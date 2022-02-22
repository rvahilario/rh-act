module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [
			2,
			'always',
			[
				'feat',
				'fix',
				// 'style',
				// 'refact',
				// 'test',
				// 'config',
				// 'del',
				// 'dep-add',
				// 'dep-rm',
				// 'gitingore',
				// 'docs',
				// 'perf',
				// 'start',
				// 'moving',
				// 'assets',
			],
		],
	},
	parserPreset: {
		parserOpts: {
			headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
		},
	},
};