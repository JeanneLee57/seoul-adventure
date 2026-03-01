import { buildServer } from '../src/index.js'

let app: Awaited<ReturnType<typeof buildServer>> | undefined

export default async function handler(req: any, res: any) {
  if (!app) {
    app = await buildServer()
    await app.ready()
  }
  app.server.emit('request', req, res)
}
