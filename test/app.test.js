'use strict';

const { test } = require('tap');
const build = require('../app');

test('requests the "/authors" route', async t => {
  const app = build();

  const response = await app.inject({
    method: 'GET',
    url: '/authors'
  });

  t.equal(response.statusCode, 200, 'returns a status code of 200 for /authors');
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
