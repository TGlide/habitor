import { Rule } from '@unocss/core';
import { cornerMap, directionMap, globalKeywords } from './constants';

export function makeGlobalStaticRules(prefix: string, property?: string) {
	return globalKeywords.map(
		(keyword) => [`${prefix}-${keyword}`, { [property ?? prefix]: keyword }] as Rule,
	);
}

export function createDirectionRules(
	classFormat: (direction: string) => string,
	propFormat: (direction: string) => string,
	value: string,
): Rule[] {
	return Object.entries(directionMap).reduce<Rule[]>((acc, [classKey, propKeys]) => {
		return [
			...acc,
			...propKeys.map<Rule>((k) => {
				return [`${classFormat(classKey)}`, { [propFormat(k)]: value }];
			}),
		];
	}, []);
}

export function createCornerRules(
	classFormat: (corner: string) => string,
	propFormat: (corner: string) => string,
	value: string,
): Rule[] {
	return Object.entries(cornerMap).reduce<Rule[]>((acc, [classKey, propKeys]) => {
		return [
			...acc,
			...propKeys.map<Rule>((k) => {
				return [`${classFormat(classKey)}`, { [propFormat(k)]: value }];
			}),
		];
	}, []);
}
