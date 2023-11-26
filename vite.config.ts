import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
    build: {
        rollupOptions: {
            input: 'src/client-chat/index.tsx',
            output: {
                entryFileNames: 'index.js',
                chunkFileNames: '[name].[hash].js',
                assetFileNames: '[name].[hash].[ext]'
            }
        },
        minify: false
    },
    plugins: [solid()],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true
            }
        }
    }
})
