import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import path from 'path';


export default defineConfig( {
  base: './',
  plugins: [ createVuePlugin() ],
  resolve: {
    alias: [
      { find: 'vue', replacement: path.resolve( './node_modules/vue' ) },
    ],
  }
} );
