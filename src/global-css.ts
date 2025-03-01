import { defineGlobalStyles, type GlobalStyleObject } from '@pandacss/dev';
import type { Config } from '@pandacss/types';

const exampleGlobalStyle: GlobalStyleObject = {
	html: {
		'-moz-text-size-adjust': 'none',
		'-webkit-text-size-adjust': 'none',
		'text-size-adjust': 'none',
	},
};

const body = {
	fontFamily: '{fonts.body}',
	fontSize: '1rem',
	lineHeight: '1.5',
};

const globalStyles = defineGlobalStyles({
	...exampleGlobalStyle,
	body,
});

export const globalCss: Config['globalCss'] = {
	extend: globalStyles,
};
