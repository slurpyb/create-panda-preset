import {defineSlotRecipe, defineStyles} from '@pandacss/dev';

export const header = defineSlotRecipe({
    className: 'header',
    description: 'The styles for the Header component',
    jsx: ['Header', 'Root', 'Inner', 'Content', 'Image'],
    slots: ['root', 'inner', 'content', 'image'],
    base: {
        root: {
            display: 'grid',
            gridTemplateAreas: ['"header"'],

            maxHeight: '100vh',
            // backgroundColor: 'hsl(200, 74%, 12%, 0.7)',
            overflow: 'hidden',
            // bgGradient:
            //     'linear-gradient(to top, var(--colors-black), transparent, transparent, transparent, transparent, transparent)',
            // backgroundBlendMode: 'overlay',
        },
        inner: {
            gridArea: 'header',
        },
        content: {
            // display: 'grid',
            // display: 'flex',
            // flexDirection: 'row',
            // justifyContent: 'space-around',
            // gap: '1rem',
            // alignItems: 'center',
            // colorPalette: 'gray',
            '& > *': {
                gridArea: 'header',
            },
        },
        image: {
            objectFit: 'cover',

            height: 'min(66vh, 100vh)',
            width: '100%',
            zIndex: -1,
        },
    },
    variants: {
        size: {
            full: {
                root: {
                    gridAutoRows: '100vh',
                    height: '100vh',
                },
                image: {
                    height: 'min(100vh, 100vh)',
                },
            },
            half: {
                root: {
                    gridAutoRows: '66vh',
                    height: '66vh',
                },
                image: {
                    height: 'min(66vh, 100vh)',
                },
            },
            third: {
                root: {
                    gridAutoRows: '33vh',
                    height: '33vh',
                },
                image: {
                    height: 'min(33vh, 100vh)',
                },
            },
        },
    },
    defaultVariants: {
        size: 'full',
    },
});
