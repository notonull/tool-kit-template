import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import ViteComponents from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/export
export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    })
  ],  
  base: './'
})