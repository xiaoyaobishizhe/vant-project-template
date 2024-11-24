import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'
import presetRemToPx from "@unocss/preset-rem-to-px"

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify(),
        presetRemToPx({ baseFontSize: 4 }),
        presetIcons()
    ],
    shortcuts: {
        fcc: "flex justify-center items-center"
    }
})