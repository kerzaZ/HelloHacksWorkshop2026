import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'simple-get-endpoint',
      configureServer(server) {
        server.middlewares.use('/api/hello', (req, res) => {
          if (req.method !== 'GET') {
            res.statusCode = 405
            res.setHeader('Allow', 'GET')
            res.end()
            return
          }

          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ message: 'Hello from the API!' }))
        })
      },
    },
  ],
})
