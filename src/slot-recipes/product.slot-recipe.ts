import {defineSlotRecipe, defineStyles} from '@pandacss/dev';

export const product = defineSlotRecipe({
    className: 'product',
    description: 'The styles for the Product component',
    jsx: ['Product', 'Product.Root', 'Product.Inner', 'Product.Media', 'Product.Information'],
    slots: ['root', 'inner', 'media', 'information'],
    base: {
        root: {},
        inner: {},
        media: {},
        information: {},
    },
    variants: {},
    defaultVariants: {},
});
