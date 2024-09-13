module.exports = {
	extends: ['@commitlint/config-conventional'],
	// 校验规则
	rules: {
		'type-enum': [
			2,
			'always',
			[
				'feat', // 新功能
				'perf', // 优化
				'fix', // 修复bug
				'docs', // 文档
				'style', // 格式
				'build', // 编译相关修改
			],
		],
		'type-case': [0],
		'type-empty': [0],
		'scope-empty': [0],
		'scope-case': [0],
		'subject-full-stop': [0, 'never'],
		'subject-case': [0, 'never'],
		'header-max-length': [0, 'always', 72],
	},
}
// 以上规则校验可自行根据习惯要求等进行修改
