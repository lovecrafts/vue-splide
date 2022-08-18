import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';


export default defineConfig( {
  build: {
		lib: {
			name    : 'VueSplide',
			entry   : './src/js/index.ts',
      formats : [ 'es', 'cjs' ],
			fileName: format => {
        let suffix: string = format;

        if ( format === 'es' ) {
          suffix = 'esm';
        }

        return `js/vue-splide.${ suffix }.js`;
      },
		},
    emptyOutDir: false,
    watch: {
			include: 'src/**'
		},
    rollupOptions: {
      external: [ 'vue', '@vue/composition-api' ],
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
      },
    },
    minify: false,
	},
  plugins: [ createVuePlugin() ],
  define: {
    'process.env': {}
  }
} );
