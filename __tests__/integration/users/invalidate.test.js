const supertest = require('supertest');
const app = require('../../../app');
const request = supertest(app);
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

describe('Users - Invalidate user token', () => {
    let token;
    let user;

    beforeAll(async () => {
        user = await prisma.user.create({
            data: {
                name: 'my-test',
                email: 'my.test.email@test.com',
                jwt: token
            },
        });

        token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

        await prisma.user.update({
            where: {
              id: user.id,
            },
            data: {
              jwt: token
            },
          });

        console.log('✨ User successfully created!')
    })

    afterAll(async () => {
        await prisma.user.delete({
            where: {
              email: 'my.test.email@test.com',
            },
          })

        await prisma.$disconnect()
    })

    it('Should return error when trying to invalidat other than self', async () => {
        const response = await request
            .post('/users/invalidateToken/9999')
            .set('Authorization', 'Bearer ' + token)
            .set('Accept', 'application/json')
            .send();

        expect(response.statusCode).toBe(405);
        expect(response.body).toHaveProperty('message', 'Operation not permitted!');
    });

    it('Should invalidate jwt token', async () => {
        const response = await request
            .post(`/users/invalidateToken/${user.id}`)
            .set('Authorization', 'Bearer ' + token)
            .set('Accept', 'application/json')
            .send();

        const { jwt } = await prisma.user.findUnique({ where: { id: user.id } });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('success', true);
        expect(jwt).toBeNull();
    });
});