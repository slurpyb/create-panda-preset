import {definePattern, type PatternConfig, type PatternProperties} from '@pandacss/dev';
import type {InferProps} from '@pandacss/types';

const properties: PatternProperties = {
    threshold: {
        type: 'property',
        value: 'width',
    },
    space: {
        type: 'property',
        value: 'margin',
    },
    limit: {
        type: 'number',
    },
};

export const switcher: PatternConfig = definePattern({
    description: '',
    jsx: ['Switcher'],
    properties,
    defaultValues: {
        threshold: '30rem',
        space: '1rem',
        limit: 4,
    },
    transform(props: InferProps<typeof properties>) {
        const {threshold, space, limit, ...rest} = props;
        const limitFn = (v: number) => `& > :nth-child(n + ${v + 1}) ~ * : { flex-basis: 100%; }`;
        const thresholdFn = (v: string) => `calc((var(--threshold, ${threshold}) - 100%) * 999)`;
        return {
            display: 'flex',
            flexWrap: 'wrap',
            gap: space,
            '& > *': {
                flexBasis: thresholdFn(threshold),
            },
            // `& > :nth-child(n + ${limit + 1}) ~ * : { flex-basis: 100%; }`,
            ...rest,
        };
    },
});
