import type { Preset } from '@pandacss/dev';
import { examplePattern } from './example.pattern';

export const patterns: Preset['patterns'] = {
	extend: {
		examplePattern,
	},
};
