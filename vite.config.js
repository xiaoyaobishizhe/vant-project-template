import { fileURLToPath, URL } from "node:url"

import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
import vueDevTools from "vite-plugin-vue-devtools"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { VantResolver } from "@vant/auto-import-resolver"
import UnoCSS from "unocss/vite"

export default defineConfig(({ mode }) => {
    let { VITE_PUBLIC_URL } = loadEnv(mode, process.cwd())

    return {
        base: VITE_PUBLIC_URL || "/",
        plugins: [
            vue(),
            vueDevTools(),
            AutoImport({
                imports: ["vue", "vue-router"],
                resolvers: [VantResolver()]
            }),
            Components({
                resolvers: [VantResolver()]
            }),
            UnoCSS()
        ],
        resolve: {
            alias: {
                "@": fileURLToPath(new URL("./src", import.meta.url))
            }
        }
    }
})