import React, { useState, useEffect } from 'react';
import { Input, Form, Button } from 'antd';

const axios = require('axios');

const UpdateAuthorPage = () => {

  const [ firstName, setFirstName ] = useState('');

  const updateAuthor = () => {
    axios.get('http://127.0.0.1:3000/update-author')
    .then(function (response) {

    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        "// always executed"
    });  
  }

    return (
        <div>Update author page</div>
    )
}

export default UpdateAuthorPage;