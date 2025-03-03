import {defineTokens, type Tokens} from '@pandacss/dev';

/**
 * Font tokens.
 */
export const fonts: Tokens['fonts'] = defineTokens.fonts({
    shrikhand: {
        value: 'var(--font-shrikhand), sans-serif',
    },
    oxygen: {
        value: 'var(--font-oxygen), sans-serif',
    },
    raleway: {
        value: 'var(--font-raleway), sans-serif',
    },
    system: {
        value: [
            'system-ui',
            'Segoe UI',
            'Roboto',
            'Helvetica',
            'Arial',
            'sans-serif',
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol',
        ],
    },
});
