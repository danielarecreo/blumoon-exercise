import React, { useState, useEffect, Fragment } from 'react';
import { Table } from 'antd';

const axios = require('axios');

const AuthorsPage = () => {
  const [authorsArray, setAuthorsArray] = useState([]);

  const getAuthors = () => {
    axios.get('http://127.0.0.1:3000/authors')
      .then(function (response) {
        const authorsArray = response.data;
        setAuthorsArray(authorsArray);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  const updateAuthor = () => {
    axios.get('http://127.0.0.1:3000/update-author/:id')
      .then(function (response) {

      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  const deleteAuthor = () => {
    axios.get('http://127.0.0.1:3000/delete-author/:id')
      .then(function (response) {

      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  useEffect(() => {
    getAuthors();
  }, []);

  const dataSource = authorsArray;

  const columns = [
    {
      title: 'AuthorID',
      dataIndex: 'authorID',
      key: 'authorID'
    },
    {
      title: 'Name',
      dataIndex: 'penName',
      key: 'penName'
    },
    {
      title: 'Birthdate',
      dataIndex: 'birthDate',
      key: 'birthDate'
    }
  ];

  return (
    <Fragment>
      <Table dataSource={dataSource} columns={columns} />;
    </Fragment>
  );
};

export default AuthorsPage;
