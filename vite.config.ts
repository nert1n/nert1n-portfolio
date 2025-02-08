import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import compression from "vite-plugin-compression";
import { VitePWA } from "vite-plugin-pwa";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
	plugins: [
		react(),
		sitemap({ hostname: "https://www.template.com" }),
		compression({ algorithm: "gzip" }),
		legacy({ targets: ["defaults", "not IE 11"] }),
		VitePWA({
			registerType: "autoUpdate",
			includeAssets: ["favicon.ico", "robots.txt"],
			manifest: {
				name: "Template",
				short_name: "Temp",
				description: "Template vite react typescript",
				theme_color: "#ffffff",
			},
			workbox: {
				runtimeCaching: [
					{
						urlPattern: /^https:\/\/api\.template\.com\/.*$/,
						handler: "NetworkFirst",
						options: {
							cacheName: "api-cache",
							expiration: {
								maxEntries: 50,
								maxAgeSeconds: 60 * 60 * 24,
							},
						},
					},
					{
						urlPattern: /^https:\/\/www\.template\.com\/.*$/,
						handler: "NetworkFirst",
						options: {
							cacheName: "html-cache",
						},
					},
				],
			},
		}),
	],
	css: {
		preprocessorOptions: {
			scss: {
				sassOptions: {
					api: "modern-compiler",
				},
			},
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@app": path.resolve(__dirname, "./src/app"),
			"@pages": path.resolve(__dirname, "./src/pages"),
			"@widgets": path.resolve(__dirname, "./src/widgets"),
			"@features": path.resolve(__dirname, "./src/features"),
			"@entities": path.resolve(__dirname, "./src/entities"),
			"@shared": path.resolve(__dirname, "./src/shared"),
		},
	},
	server: {
		port: 3000,
		proxy: {
			"/api": {
				target: "https://api.template.com",
				changeOrigin: true,
				secure: true,
				cookieDomainRewrite: "localhost",
				rewrite: path => path.replace(/^\/api/, ""),
			},
			"/ws": {
				target: "wss://api.template.com",
				ws: true,
				rewrite: path => path.replace(/^\/ws/, "/chat"),
				changeOrigin: true,
				rewriteWsOrigin: true,
				secure: true,
			},
		},
		hmr: { overlay: true },
		fs: {
			allow: [".."],
		},
	},
	optimizeDeps: { include: ["react", "react-dom", "workbox-window"] },
	build: {
		target: "esnext",
		outDir: "dist",
		rollupOptions: {
			external: ["workbox-window"],
			input: path.resolve(__dirname, "index.html"),
			output: {
				manualChunks(id) {
					if (id.includes("node_modules")) {
						return id.split("node_modules/")[1].split("/")[0];
					}
				},
				chunkFileNames: "assets/[name]-[hash].js",
				assetFileNames: "assets/[name]-[hash][extname]",
			},
		},
		sourcemap: false,
	},
});
