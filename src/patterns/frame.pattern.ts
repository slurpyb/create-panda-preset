import {definePattern, type PatternProperties} from '@pandacss/dev';
import type {InferProps} from '@pandacss/types';

const properties: PatternProperties = {
    ratio: {
        type: 'property',
        value: 'aspectRatio',
    },
};

export const frame = definePattern({
    description: 'Frame Layout Pattern',
    jsx: ['Frame'],
    properties,
    defaultValues: {
        ratio: '16 / 9',
    },
    transform(props: InferProps<typeof properties>) {
        const {ratio, ...rest} = props;
        return {
            aspectRatio: ratio,
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& > img, & > video': {
                inlineSize: '100%',
                blockSize: '100%',
                objectFit: 'cover',
            },
            ...rest,
        };
    },
});
