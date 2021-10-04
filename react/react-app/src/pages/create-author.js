import React, { useState, useEffect } from 'react';
import { Input, Form, Button } from 'antd';

const axios = require('axios');

const CreateAuthorPage = () => {

  const [ newFirstName, setNewFirstName ] = useState("");
  const [ newLastName, setNewLastName ] = useState("");
  const [ newPenName, setNewPenName ] = useState("");
  const [ newBirthDate, setNewBirthDate ] = useState("");

  const addAuthor = () => {
    axios.post('http://127.0.0.1:3000/add-author', {
      "firstName": newFirstName,
      "lastName": newLastName,
      "penName": newPenName,
      "birthDate": newBirthDate
    })    
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        "// always executed"
    });  
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8}}
      initialValues={{ remember: true }}
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >

      <h2 wrapperCol={{ span: 8}}>Create a new author</h2>

      <Form.Item
        label="First Name"
        name="firstName"
        value={newFirstName}
        onChange={e => setNewFirstName(e.target.value)}
        // rules={[{ required: true, message: 'Please input your first name' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastName"
        value={newLastName}
        onChange={e => setNewLastName(e.target.value)}
        // rules={[{ required: true, message: 'Please input your last name' }]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        label="Pen Name"
        name="penName"
        value={newPenName}
        onChange={e => setNewPenName(e.target.value)}
        // rules={[{ required: true, message: 'Please input your pen name' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Birthdate"
        name="birthDate"
        value={newBirthDate}
        onChange={e => setNewBirthDate(e.target.value)}
        // rules={[{ required: true, message: 'Please input your birthdate' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
        <Button 
          type="primary" 
          htmlType="submit"
          onClick={addAuthor}>
          
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default CreateAuthorPage;