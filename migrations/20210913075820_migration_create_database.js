'use strict';

exports.up = function (knex, Promise) {
  return knex.raw('CREATE DATABASE exercise');
};

exports.down = function (knex, Promise) {
  return knex.raw('DROP DATABASE exercise');
};

exports.config = {
  transaction: false
};
