import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "markdown-loader",
      transform(code, id) {
        if (id.slice(-3) === ".md") {
          return `export default ${JSON.stringify(code)}`
        }
      }
    }
  ],
  server: {
    proxy: {
      '^/images' : {
        target: ['http://localhost:5173/','http://localhost:5173/projects']
      },
    }
  }
})
