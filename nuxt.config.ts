// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	typescript: {
		shim: false,
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/_colors.scss" as *;',
				},
			},
		},
	},
})
