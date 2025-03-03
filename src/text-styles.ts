import {defineTextStyles, type TextStyles, type CompositionStyles} from '@pandacss/dev';

const body: CompositionStyles['textStyles'] = {
    default: {
        value: {
            fontSize: 'sm',
            fontFamily: 'body',
            lineHeight: '1.5',
        },
    },
};

const p: CompositionStyles['textStyles'] = {
    default: {
        value: {
            fontSize: 'sm',
            fontFamily: 'body',
            lineHeight: '1.5',
        },
    },
};

const heading: CompositionStyles['textStyles'] = {
    default: {
        value: {
            fontFamily: 'display',
            lineHeight: 'snug',
        },
    },
    1: {
        value: {
            fontSize: '4xl',
        },
    },
    2: {
        value: {
            fontSize: '3xl',
        },
    },
    3: {
        value: {
            fontSize: '2xl',
        },
    },
    4: {
        value: {
            fontSize: 'xl',
        },
    },
    5: {
        value: {
            fontSize: 'lg',
        },
    },
};

export const textStyles: TextStyles = defineTextStyles({
    heading,
});
