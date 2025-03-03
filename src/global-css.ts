import {defineGlobalStyles, type GlobalStyleObject} from '@pandacss/dev';
import type {Config} from '@pandacss/types';

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
    'h1,h2,h3,h4,h5,h6': {
        textStyle: 'heading.default',
    },
    h1: {
        textStyle: 'heading.1',
    },
    h2: {
        textStyle: 'heading.2',
    },
    h3: {
        textStyle: 'heading.3',
    },
    h4: {
        textStyle: 'heading.4',
    },
    h5: {
        textStyle: 'heading.5',
    },
});

export const globalCss: Config['globalCss'] = {
    extend: globalStyles,
};
