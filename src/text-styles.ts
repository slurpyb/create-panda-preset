import { defineTextStyles, type TextStyles, type CompositionStyles } from '@pandacss/dev';

const p: CompositionStyles['textStyles'] = {
	default: {
		value: {
			fontSize: 'sm',
			fontFamily: 'body',
			lineHeight: '1.5',
		},
	},
};

export const textStyles: TextStyles = defineTextStyles({
	// p
});
