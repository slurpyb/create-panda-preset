import {definePattern, type PatternConfig, type PatternProperties} from '@pandacss/dev';
import type {InferProps} from '@pandacss/types';

const properties: PatternProperties = {
    centered: {
        type: 'string',
    },
    minHeight: {
        type: 'property',
        value: 'minBlockSize',
    },
    space: {
        type: 'property',
        value: 'marginBlock',
    },
    noPad: {
        type: 'boolean',
    },
};

export const cover: PatternConfig = definePattern({
    description: 'Cover layout',
    jsx: ['Cover'],
    properties,
    defaultValues: {
        centered: 'h1',
        minHeight: '100vh',
        noPad: false,
        space: '1rem',
    },
    transform(props: InferProps<typeof properties>) {
        const {minHeight, centered, space, noPad, ...rest} = props;
        return {
            display: 'flex',
            flexDirection: 'column',
            minBlockSize: minHeight,
            padding: noPad === true ? 0 : '1rem',
            '& > *': {
                marginBlock: space,
            },
            '& > :first-child:not(div[data-part="centered"])': {
                marginBlockStart: 0,
            },
            '& > :last-child:not(div[data-part="centered"])': {
                marginBlockEnd: 0,
            },
            '& > div[data-part="centered"]': {
                marginBlock: 'auto',
            },
            ...rest,
        };
    },
});
