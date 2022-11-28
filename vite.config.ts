import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from "unplugin-vue-components/vite"
import { ArcoResolver } from "unplugin-vue-components/resolvers"
import Unocss from 'unocss/vite'
import presetUno from '@unocss/preset-uno'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'arcoblue-6': '#f85959',
        },
        javascriptEnabled: true,
      }
    }
  },
  plugins: [
    vue(),
    Components({
      dts: true,
      resolvers: [ArcoResolver({ resolveIcons: true, importStyle: "less" })],
    }),
    Unocss({
      presets: [
        presetUno(),
      ],
    }),
  ]
})
