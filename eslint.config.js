import globals from 'globals'
import eslintConfigPrettier from 'eslint-config-prettier'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'
// import { readFile } from 'fs/promises'
// const autoImportFile = new URL('./.eslintrc-auto-imports.json', import.meta.url)
// const autoImportGlobals = JSON.parse(await readFile(autoImportFile, 'utf8'))

export default [
	{
		files: ['**/*.{js,mjs,cjs,ts,vue}'],
	},
	{
		languageOptions: {
			globals: globals.browser,
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...pluginVue.configs['flat/essential'],
	eslintConfigPrettier,
	{
		files: ['**/*.vue'],
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser,
			},
		},
		plugins: {
			prettier: prettier,
		},
		rules: {
			// 开启这条规则后，会将prettier的校验规则传递给eslint，这样eslint就可以按照prettier的方式来进行代码格式的校验
			'prettier/prettier': 'error',
			'no-var': 'error', // 要求使用 let 或 const 而不是 var
			'no-console': 'off',
			'no-undef': 'off',
			'no-restricted-globals': 'off',
			'no-restricted-syntax': 'off',
			'vue/multi-word-component-names': 'off',
			'no-multiple-empty-lines': ['warn', { max: 1 }],
			'vue/valid-template-root': 'off',
		},
	},
]
