// uno.config.ts
import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup,
} from 'unocss'

export default defineConfig({
	presets: [presetUno(), presetAttributify(), presetIcons(), presetTypography(), presetWebFonts()],
	shortcuts: {
		'line-justify': 'after:content-[""] after:inline-block after:w-full',
	},
	rules: [
		[/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
		[/^p-([\.\d]+)$/, ([_, num]) => ({ padding: `${num}px` })],
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
	theme: {
		extends: {},
	},
})
