import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			registerType: 'autoUpdate',
			includeAssets: [
				'apple-touch-icon-180x180',
				'favicon.ico',
				'logo.svg',
				'maskable-icon-512x512.png',
				'pwa-64x64.png',
				'pwa-192x192.png',
				'pwa-512x512.png',
			],
			manifest: {
				name: "Speed Word",
				short_name: "Speed Word",
				description: "Discover a new word every 10 seconds.",
				theme_color: "#ff3e00",
				background_color: "#000",
				start_url: "/",
				display: "standalone",
				scope: "/",
				icons: [
					{
						src: "/pwa-64x64.png",
						sizes: "64x64",
						type: "image/png"
					},
					{
						src: "/pwa-192x192.png",
						sizes: "192x192",
						type: "image/png"
					},
					{
						src: "/pwa-512x512.png",
						sizes: "512x512",
						type: "image/png"
					}
				]
			},
			strategies: 'generateSW',
			devOptions: {
				enabled: true
			}
		})
	],
}

export default config