import {definePattern, type PatternConfig, type PatternProperties} from '@pandacss/dev';
import type {InferProps} from '@pandacss/types';

const properties: PatternProperties = {
    justify: {
        type: 'property',
        value: 'justifyContent',
    },
    align: {
        type: 'property',
        value: 'alignItems',
    },
    space: {
        type: 'property',
        value: 'gap',
    },
};

export const cluster: PatternConfig = definePattern({
    description: 'Cluster Layout Pattern',
    jsx: ['Cluster'],
    properties,
    defaultValues: {
        justify: 'flex-start',
        align: 'center',
        space: '1rem',
    },
    transform(props: InferProps<typeof properties>) {
        const {justify, align, space, ...rest} = props;
        return {
            display: 'flex',
            flexWrap: 'wrap',
            gap: space,
            justifyContent: justify,
            alignItems: align,
            ...rest,
        };
    },
});
