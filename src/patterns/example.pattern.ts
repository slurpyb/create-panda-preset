import { definePattern, type PatternConfig, type PatternProperties } from '@pandacss/dev';
import type { InferProps } from '@pandacss/types';

const properties: PatternProperties = {
	tone: {
		type: 'property',
		value: 'color',
	},
};

export const examplePattern: PatternConfig = definePattern({
	description: 'The styles for the Example pattern',
	jsx: ['ExamplePattern'],
	properties,
	defaultValues: {
		tone: 'red',
	},
	transform(props: InferProps<typeof properties>) {
		const { tone, ...rest } = props;
		return {
			color: tone,
			...rest,
		};
	},
});
