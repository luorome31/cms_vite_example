import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    target:['edge90','chrome90','firefox90','safari15']
  },
  server: {
    port: 8080
  },

}