
const rp = require('request-promise');

module.exports = (url) => {
  const p = new Promise((resolve, reject) => {
    if (url !== 'http://localhost:3000/update-author/:id') {
      reject(Error('url is wrong'));
    } else {
      const options = {
        method: 'PUT',
        uri: 'http://localhost:3000/update-author/1',
        body: {
          id: '1'
        },
        json: true // Automatically stringifies the body to JSON
      };

      rp(options).then(data => resolve(data));
    }
  });

  return p;
};
