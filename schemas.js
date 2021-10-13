const allAuthors = {
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          authorID: { type: 'string' },
          firstName: { type: 'string' },
          lastName: { type: 'string' },
          penName: { type: 'string' },
          birthDate: { type: 'string', format: 'date' }
        }
      }
    }
  }
};

const addAuthor = {
  body: {
    type: 'object',
    required: ['firstName', 'lastName'],
    properties: {
      id: { type: 'integer' },
      firstName: { type: 'string' },
      birthDate: { type: 'string', format: 'date' }
    }
  },
  response: {
    201: {
      type: 'object',
      properties: {
        created: { type: 'boolean' }
      }
    }
  }
};

const updateAuthor = {
  body: {
    type: 'object',
    properties: {
      firstName: { type: 'string' },
      lastName: { type: 'string' },
      penName: { type: 'string' },
      birthDate: { type: 'string', format: 'date' }
    }
  },
  params: {
    type: 'object',
    properties: {
      id: { type: 'integer' }
    }
  }
};

const deleteAuthor = {
  params: {
    type: 'object',
    properties: {
      id: { type: 'string' }
    }
  }
};
