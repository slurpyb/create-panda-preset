import { defineUtility } from '@pandacss/dev';

export const ex = defineUtility({
	className: 'example-utility',
	values: 'colors',
	transform(value) {
		return { color: value };
	},
});
