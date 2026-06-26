import { health } from '#/routes/health.js'
import { example } from '#/routes/example.js'
import { demo } from '#/routes/demo-route.js'

export const router = {
  plugin: {
    name: 'router',
    register: (server, _options) => {
      server.route([health].concat(example).concat(demo))
    }
  }
}
