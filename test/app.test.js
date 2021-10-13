'use strict';

const { test } = require('tap');
const build = require('../app');
const promise = require('../promise');
const promiseCreateAuthor = require('../promiseCreateAuthor');
const promiseUpdate = require('../promiseUpdate');
const promiseDelete = require('../promiseDelete');

test('requests the "/" route', async t => {
  const app = build();

  const response = await app.inject({
    method: 'GET',
    url: '/'
  });

  console.log('status code: ', response.statusCode);
  console.log('body: ', response.body);
});

// unit test: check calling method from fastify returns the list
test('request GET /authors', async ({ ok, type }) => {
  const data = await promise('http://localhost:3000/authors');

  ok(data);
  type(new Array(), Array, Object);
});

// unit test: check calling method from fastify fastify, with test parameters, inserts the author
test('request POST /authors', async ({ ok, type }) => {
  const data = await promiseCreateAuthor('http://localhost:3000/add-author');

  ok(data);
  type(new Object(), Object);
});

// unit test: check calling method from fastify, will update an author
test('request PUT /update-author/:id', async ({ ok, type }) => {
  const data = await promiseUpdate('http://localhost:3000/update-author/:id');

  ok(data);
  type(new Object(), Object);
});

// unit test: check if calling method from fastify, will delete an author
test('request DELETE /delete-author/:id', async ({ ok, type }) => {
  const data = await promiseDelete('http://localhost:3000/delete-author/:id');

  ok(data);
  type(new Object(), Object);
});

test();
