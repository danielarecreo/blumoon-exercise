import React, { useState, useEffect } from 'react';

const axios = require('axios');

const AuthorsPage = () => {
    
    const getAuthors = () => {
        axios.get('http://127.0.0.1:3000/')
        .then(function (response) {
            const authorsArray = response.data
            return authorsArray;
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }

    const addAuthor = () => {
        axios.get('http://127.0.0.1:3000/add-author')
        .then(function (response) {
            const authorsArray = response.data
            return authorsArray;
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });  
    }

    const updateAuthor = () => {
        axios.get('http://127.0.0.1:3000/update-author')
        .then(function (response) {
            const authorsArray = response.data
            return authorsArray;
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });  
    }

    const deleteAuthor = () => {
        axios.get('http://127.0.0.1:3000/delete-author')
        .then(function (response) {
            const authorsArray = response.data
            return authorsArray;
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });  
    }

    useEffect(() => {
        getAuthors();
    }, []);

    return (         
        <div>Welcome to authors page!</div>
    )
}

export default AuthorsPage;