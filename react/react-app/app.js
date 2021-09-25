const axios = require('axios');

//sample function to list all authors
 async function getAuthors() {
    try {
      const response = await axios.get('/authors');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  //sample function to create an author
  async function createAuthor() {
    try {
      const response = await axios.post('/add_author');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  //sample function to update an author
  async function updateAuthor() {
    try {
      const response = await axios.put('/update_author');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  //sample function to delete an author
  async function deleteAuthor() {
    try {
      const response = await axios.delete('/delete_author');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }