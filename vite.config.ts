import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import UnoCSS from 'unocss/vite'
import vuetify from 'vite-plugin-vuetify'
// 引入vite-plugin-eslint
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
	css: {
		preprocessorOptions: {
			less: {
				modifyVars: {
					'primary-color': '#1890ff',
					'link-color': '#1890ff',
					'border-radius-base': '2px',
				},
				javascriptEnabled: true,
			},
		},
	},
	plugins: [
		vue(),
		UnoCSS(),
		vuetify({ autoImport: true }), // vuetify 组件自动引入
		eslintPlugin({
			include: ['src/**/*.js', 'src/**/*.vue'],
			cache: true,
		}),
	],
	resolve: {
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
		alias: {
			a: resolve(__dirname, 'src'),
			components: resolve(__dirname, 'src/components'),
			views: resolve(__dirname, 'src/views'),
			assets: resolve(__dirname, 'src/assets'),
			utils: resolve(__dirname, 'src/utils'),
		},
	},
	server: {
		host: true,
		port: 8080,
		open: true,
		cors: true, // 允许跨域
		proxy: {
			// '/api': {
			//   target: 'http://localhost:3200/',
			//   changeOrigin: true,
			//   rewrite: (path) => path.replace(/^\/api/, '') // 重写路径把路径变成空字符
			// }
		},
	},
	// 打包选项
	build: {
		// 消除打包大小超过500kb警告
		chunkSizeWarningLimit: 2000,
		// 在生产环境移除console.log
		terserOptions: {
			compress: {
				drop_console: false,
				pure_funcs: ['console.log', 'console.info'],
				drop_debugger: true,
			},
		},
		// 指定生成静态资源的存放路径
		assetsDir: 'static/assets',
		// 静态资源打包到dist下的不同目录
		rollupOptions: {
			output: {
				chunkFileNames: 'static/js/[name]-[hash].js',
				entryFileNames: 'static/js/[name]-[hash].js',
				assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
			},
		},
	},
	preview: {
		port: 4173,
		open: true,
	},
})
