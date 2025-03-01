import { defineRecipe, defineStyles } from '@pandacss/dev';

const sharedVisualStyles = defineStyles({
	borderRadius: 'lg',
	boxShadow: 'sm',
});

export const exampleComponent = defineRecipe({
	className: 'example-component',
	description: 'The styles for the ExampleComponent component',
	jsx: ['ExampleComponent'],
	base: {},
	defaultVariants: {
		variant: 'foo',
	},
	variants: {
		variant: {
			foo: {
				...sharedVisualStyles,
			},
			bar: {
				...sharedVisualStyles,
			},
		},
	},
});
