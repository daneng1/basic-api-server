'use strict';

const { server } = require('../src/server.js'); 
const supertest = require('supertest'); 
const mockRequest = supertest(server); 

describe('***API SERVER***', () => {
  it('should respond with a 404 on not found', async () => {
    return mockRequest.get('/no-thing').then(data => {
      expect(data.status).toBe(404);
    });
  });

  it('should respond with a 404 on bad method', async () => {
    return mockRequest.patch('/food').then(data => {
      expect(data.status).toBe(404);
    });
  });

  it('should create a new item in the db', async () => {
    const response = await mockRequest.post('/food').send({ name: 'banana' })
    expect(response.status).toBe(201);
    expect(response.body.record.name).toEqual('banana');
  });

  it('should retrieve an item from the db', async () => {
    const response = await mockRequest.get('/food/1');
    expect(response.status).toBe(200);
  });

  it('should retrieve all items from the db', async () => {
    const response = await mockRequest.get('/food');
    expect(response.status).toBe(200);
  });

  it('should delete one item from the DB', async () => {
    const response = await mockRequest.delete('/food/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({});
  });

  it('should create a new item in the db', async () => {
    const response = await mockRequest.post('/clothes').send({ name: 'shirt' })
    expect(response.status).toBe(201);
    expect(response.body.record.name).toEqual('shirt');
  });

  it('should retrieve an item from the db', async () => {
    const response = await mockRequest.get('/clothes/1');
    expect(response.status).toEqual(200);

    console.log(response.body);
  });

  it('should retrieve all items from the db', async () => {
    const response = await mockRequest.get('/clothes');
    expect(response.status).toBe(200);
  });

  it('should delete one item from the DB', async () => {

    const response = await mockRequest.delete('/clothes/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({});
  });
});
