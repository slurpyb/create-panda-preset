import type { Config } from '@pandacss/types';

export const conditions: Config['conditions'] = {
	extend: {
		exampleCondition: '&:is([data-example])',
	},
};
