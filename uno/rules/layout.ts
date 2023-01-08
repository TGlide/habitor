import { Rule } from '@unocss/core';
import pollen from '../pollen';

export const layout: Rule[] = [
	// Size
	...Object.keys(pollen.size).reduce<Rule[]>((acc, key) => {
		return [
			...acc,
			[`w-${key}`, { width: `var(--size-${key})` }],
			[`h-${key}`, { height: `var(--size-${key})` }],
			[`m-${key}`, { margin: `var(--size-${key})` }],
			[`mr-${key}`, { 'margin-right': `var(--size-${key})` }],
			[`ml-${key}`, { 'margin-left': `var(--size-${key})` }],
			[`mt-${key}`, { 'margin-top': `var(--size-${key})` }],
			[`mb-${key}`, { 'margin-bottom': `var(--size-${key})` }],
			[`mx-${key}`, { 'margin-left': `var(--size-${key})`, 'margin-right': `var(--size-${key})` }],
			[`my-${key}`, { 'margin-top': `var(--size-${key})`, 'margin-bottom': `var(--size-${key})` }],
			[`p-${key}`, { padding: `var(--size-${key})` }],
			[`pr-${key}`, { 'padding-right': `var(--size-${key})` }],
			[`pl-${key}`, { 'padding-left': `var(--size-${key})` }],
			[`pt-${key}`, { 'padding-top': `var(--size-${key})` }],
			[`pb-${key}`, { 'padding-bottom': `var(--size-${key})` }],
			[
				`px-${key}`,
				{ 'padding-left': `var(--size-${key})`, 'padding-right': `var(--size-${key})` },
			],
			[
				`py-${key}`,
				{ 'padding-top': `var(--size-${key})`, 'padding-bottom': `var(--size-${key})` },
			],
			[`gap-${key}`, { gap: `var(--size-${key})` }],
		];
	}, []),
	// Container Widths
	...Object.keys(pollen.width).map((key) => {
		return [`contained-${key}`, { 'max-width': `var(--width-${key})` }] as Rule;
	}),
	// Aspect Ratio
	...Object.keys(pollen.ratio).map((key) => {
		return [`ratio-${key}`, { 'aspect-ratio': `var(--ratio-${key})` }] as Rule;
	}),
];
