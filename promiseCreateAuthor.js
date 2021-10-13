
const rp = require('request-promise');

module.exports = (url) => {
  const p = new Promise((resolve, reject) => {
    if (url !== 'http://localhost:3000/add-author') {
      reject(Error('url is wrong'));
    } else {
      const options = {
        method: 'POST',
        uri: 'http://localhost:3000/add-author',
        body: {
          id: '1',
          firstName: 'test'
        },
        json: true // Automatically stringifies the body to JSON
      };

      rp(options).then(data => resolve(data));
    }
  });

  return p;
};
