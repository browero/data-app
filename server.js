import { createServer } from './lib/http/create-server.js'
import { url, router } from './lib/http/middlewares/index.js'
import { get } from './lib/http/methods/index.js'

const server = createServer(
  url(),
  router(
    get('/', () => `Hello, World!`),
  )
)

server.listen(3000)
