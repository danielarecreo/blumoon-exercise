'use strict';

const { test } = require('tap');
const build = require('../app');
const routes = require('../routes');

test('requests the "/" route', async t => {
  const app = build();

  const response = await app.inject({
    method: 'GET',
    url: '/'
  });

  console.log('status code: ', response.statusCode)
  console.log('body: ', response.body)
});

//failed tests
test('requests the "/authors" route', async t => {
  const app = routes();

  const response = await app.inject({
    method: 'GET',
    url: '/authors'
  });

  console.log('status code: ', response.statusCode)
  console.log('body: ', response.body)
}); 

test('requests the "/add_author" route', async t => {
  const app = build();

  const response = await app.inject({
    method: 'POST',
    url: '/add_author'
  });

  t.equal(response.statusCode, 200, 'returns a status code of 200 for /add_author');
});

test('requests the "/update_author" route', async t => {
  const app = build();

  const response = await app.inject({
    method: 'PUT',
    url: '/update_author'
  });

  t.equal(response.statusCode, 200, 'returns a status code of 200 for /update_author');
});

test('requests the "/remove_author" route', async t => {
  const app = build();

  const response = await app.inject({
    method: 'DELETE',
    url: '/remove_author'
  });

  t.equal(response.statusCode, 200, 'returns a status code of 200 for /remove_author');
});

test();
