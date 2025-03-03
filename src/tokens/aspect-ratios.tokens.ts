import {defineTokens, type Tokens} from '@pandacss/dev';

/**
 * Aspect ratio tokens.
 */
export const aspectRatios: Tokens['aspectRatios'] = defineTokens.aspectRatios({
    square: {value: '1 / 1'},
    landscape: {value: '4 / 3'},
    portrait: {value: '3 / 4'},
    wide: {value: '16 / 9'},
    ultrawide: {value: '18 / 5'},
    golden: {value: '1.618 / 1'},
    '1:1': {value: '1'},
    '4:3': {value: '4 / 3'},
    '3:4': {value: '3 / 4'},
    '16:9': {value: '16 / 9'},
    '18:5': {value: '18 / 5'},
    '1.618:1': {value: '1.618 / 1'},
});
