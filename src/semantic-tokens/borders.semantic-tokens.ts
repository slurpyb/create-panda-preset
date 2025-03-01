import { defineSemanticTokens, type SemanticTokens } from '@pandacss/dev';

/**
 * Border tokens.
 */
export const borders: SemanticTokens['borders'] = defineSemanticTokens.borders({
	none: { value: 'none' },
});
