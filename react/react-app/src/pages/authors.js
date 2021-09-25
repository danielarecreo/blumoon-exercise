import React, { useState, useEffect } from 'react';

const axios = require('axios');

const AuthorsPage = () => {
    
    // return <h1>Welcome to authors page!</h1>;
    
   const getAll = () => {
    axios.get('https://mocki.io/v1/cb4b1204-63b6-4aca-a6a2-47b5d75ee6bb')
    .then(function (response) {
        const authorsData = response.data;
        return authorsData;
        //console.log(authorsData)
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        // always executed
    });  
   }

   useEffect(() => {
        getAll();
    }, []);

    return (         
        <div>Welcome to authors page!</div>
    )
}

// async function getAuthors() {
//     // try {
//     //   const response = await axios.get('https://mocki.io/v1/4751c4b8-4298-4f31-95a9-01c4ea10af23');
//     //   console.log(response);
//     // } catch (error) {
//     //   console.error(error);
//     // }

//     const response = await axios.get('https://mocki.io/v1/4751c4b8-4298-4f31-95a9-01c4ea10af23');
//     console.log(response)
//   }


export default AuthorsPage;