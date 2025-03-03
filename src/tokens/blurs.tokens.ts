import {defineTokens, type Tokens} from '@pandacss/dev';

/**
 * Blur tokens.
 */
export const blurs: Tokens['blurs'] = defineTokens.blurs({
    sm: {value: '4px'},
    base: {value: '8px'},
    md: {value: '12px'},
    lg: {value: '16px'},
    xl: {value: '24px'},
    '2xl': {value: '40px'},
    '3xl': {value: '64px'},
});
