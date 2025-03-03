import {defineSemanticTokens, type SemanticTokens} from '@pandacss/dev';

/**
 * Font tokens.
 */
export const fonts: SemanticTokens['fonts'] = defineSemanticTokens.fonts({
    display: {
        value: 'shrikhand',
    },
    body: {
        value: 'raleway',
    },
});
