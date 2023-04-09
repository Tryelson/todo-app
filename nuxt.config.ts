import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
		postcss: {
			plugins: {
				tailwindcss: {},
				autoprefixer: {},
			},
		},
    buildModules: [
        '@nuxt/typescript-build',
        '@pinia/nuxt',
        'vue-smooth-dnd'
    ],
    css: [
        '@/assets/css/globals.css',
				'@/assets/css/main.css',
    ]
}

export default config