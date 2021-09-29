import React, { useState, useEffect } from 'react';
import { Input, Layout, Row } from 'antd';
import Form from 'rc-field-form/es/Form';

const axios = require('axios');

const CreateAuthorPage = () => {

   const create = () => {
    axios.post('/create-author', {
        
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

   useEffect(() => {
        create();
    }, []);

    return (
      <Form>
        <Input size='small' placeholder="First Name" />


      </Form>
    )
}

export default CreateAuthorPage;