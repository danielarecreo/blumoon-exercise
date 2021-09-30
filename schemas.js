const allAuthors = {
    response: {
        200: {
            type: 'array',
            items: {
                type: 'object',
                required: ['authorID', 'firstName', 'lastName', 'penName', 'birthDate'],
                properties: {
                    authorID: {type: 'integer'},                                                              
                    firstName: {type: 'string'},                                           
                    lastName:{type: 'string'},                  
                    penName: {type: 'string'},
                    birthDate: {type: 'string',format: "date-time"},
                }
            }
        }
    }
}

const addAuthor = {
    body: {
        type: 'object',
        required: ["firstName", 'lastName'],
        properties: {
            id: {type: 'integer'},
            firstName: {type: 'string'},
            birthDate: {type: 'string'}
        }
    },
    response: {
        201: {
            type: 'object',
            properties: {
                created: {type: 'boolean'}
            }
        }
    }
}

const updateAuthor = {
    body: {
        type: 'object',
        properties: {
            firstName: {type: 'string'},
            lastName: {type: 'string'},
            penName: {type: 'string'},
            birthDate: {type: 'string', format: 'date-time'}
        }
    },
    params: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' }
        }
    }
}

const deleteAuthor = {
    params: {
        type: 'object',
        properties: {
            id: {type: 'string'}
        }
    }
}
