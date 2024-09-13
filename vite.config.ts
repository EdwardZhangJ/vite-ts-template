import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import UnoCSS from 'unocss/vite'
import vuetify from 'vite-plugin-vuetify'
import AutoImport from 'unplugin-auto-import/vite'
import eslintPlugin from 'vite-plugin-eslint'
/**
 * 引入vite-plugin-eslint eslint提示引用报错的话 
 * 需要修改 vite-plugin-eslint模块的package.json，找到"import": "./dist/index.mjs"，将其改为：
	"import": {
		"types": "./dist/index.d.ts",
		"default": "./dist/index.mjs"
	}
 */

// https://vitejs.dev/config/
export default defineConfig({
	envDir: 'env', // 指定环境变量文件所在文件夹
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
		AutoImport({
			// targets to transform
			include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
			// global imports to register
			imports: [
				// 插件预设支持导入的api
				'vue',
				'vue-router',
				'pinia',
				// 自定义导入的api
			],
			// Generate corresponding .eslintrc-auto-import.json file.
			// eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
			eslintrc: {
				enabled: false, // Default `false`
				filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
				globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
			},
			// Filepath to generate corresponding .d.ts file.
			// Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
			// Set `false` to disable.
			dts: './auto-imports.d.ts',
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
