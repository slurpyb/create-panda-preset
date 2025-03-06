import {definePattern, type PatternConfig, type PatternProperties} from '@pandacss/dev';
import type {InferProps} from '@pandacss/types';

// const properties: PatternProperties = {
//
// }

export const container: PatternConfig = definePattern({
    name: 'container',
    description: 'The styles for the Container component',
    jsx: ['Container'],
    transform(props) {
        return {
            position: 'relative',
            maxWidth: '{sizes.wrapper.max}',
            marginX: 'auto',
            paddingX: '{spacing.gutter}',
            ...props,
        };
    },
});
