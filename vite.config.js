import { defineConfig, searchForWorkspaceRoot } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    fs: {
      allow: [
        searchForWorkspaceRoot(process.cwd()),
        'C:/Users/annag/.cursor/projects/c-Users-annag-trzymajcie-sie-cieplo-trzymajcie-sie-cieplo/assets',
      ],
    },
  },
})
