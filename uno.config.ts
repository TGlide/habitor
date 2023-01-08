import { extractorSvelte, Rule } from '@unocss/core';
import presetIcons from '@unocss/preset-icons';
import rules from './uno/rules';
import type { VitePluginConfig } from '@unocss/vite';
import transformerDirectives from '@unocss/transformer-directives';

const config: VitePluginConfig = {
	extractors: [extractorSvelte],
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	presets: [presetIcons() as any],
	rules: [
		...Object.values(rules).reduce<Rule[]>((acc, curr) => {
			acc.push(...curr);
			return acc;
		}, []),
	],
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	transformers: [transformerDirectives() as any],
};

export default config;
