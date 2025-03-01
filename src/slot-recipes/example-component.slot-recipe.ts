import { defineSlotRecipe, defineStyles } from '@pandacss/dev';

const sharedVisualStyles = defineStyles({
	borderRadius: 'lg',
	boxShadow: 'sm',
});

export const exampleSlotComponent = defineSlotRecipe({
	className: 'example-slot-component',
	description: 'The styles for the ExampleSlotComponent component',
	jsx: ['ExampleSlotComponent'],
	slots: ['root', 'inner', 'header', 'content', 'footer'],
	base: {
		root: {
			bgColor: {
				_light: 'white',
				_dark: 'black',
			},
		},
		inner: {},
		header: {},
		content: {},
		footer: {},
	},
	defaultVariants: {
		variant: 'foo',
	},
	variants: {
		variant: {
			foo: {
				root: {},
				inner: {
					...sharedVisualStyles,
				},
				header: {},
				content: {},
				footer: {},
			},
			bar: {
				root: {},
				inner: {
					...sharedVisualStyles,
				},
				header: {},
				content: {},
				footer: {},
			},
		},
	},
});
