import http from 'node:http'

const user = []

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET' && url === '/users') {
    return res.setHeader('Content-Type', 'application/json').end(JSON.stringify(user))
  }

  if (method === 'POST' && url === '/users') {
    user.push({
      id: 1,
      name: 'Matheus',
      age: 16
    })

    return res.writeHead(201).end()
  }

  return res.writeHead(404).end()
})

server.listen(3333, () => console.log("[server]: Running in http://localhost:3333"))