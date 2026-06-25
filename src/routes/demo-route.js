export const demo = [
  {
    method: 'POST',
    path: '/api/v1/register-professional',
    handler: async (request, h) => {
      const result = await request.db
        .collection('example-data')
        .insertOne(request.payload)

      return h.response({ insertedId: result.insertedId }).code(201)
    }
  }
]