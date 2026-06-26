export const demo = [
  {
    method: 'POST',
    path: '/api/v1/register-professional',
    handler: async (request, h) => {
      const result = await request.db
        .collection('example-data')
        .insertOne(request.payload)

      const STATUS_CREATED = 201
      return h.response({ insertedId: result.insertedId }).code(STATUS_CREATED)
    }
  }
]
