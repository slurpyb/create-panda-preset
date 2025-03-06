import {defineSlotRecipe, defineStyles} from '@pandacss/dev';

const sharedVisualStyles = defineStyles({
    borderRadius: 'lg',
    boxShadow: 'sm',
});

export const navbar = defineSlotRecipe({
    className: 'navbar',
    description: 'The styles for the Navbar component',
    jsx: ['Navbar', 'Root', 'Logo', 'Inner', 'Links', 'Actions'],
    slots: ['root', 'inner', 'logo', 'links', 'actions'],
    base: {
        root: {
            display: 'grid',
            gridArea: 'header',

            // color: 'white',
            // paddingBlock: 'clamp(1rem, 3%, 1.5rem)',
            zIndex: 9999,
            // justifySelf: 'center',
        },
        logo: {
            height: 'auto',
            width: '12.5%',
        },
        inner: {
            // maxWidth: 'var(--measure, token(sizes.global.wrapper.measure))',
            // paddingInline: 'var(--space, token(spacing.global.wrapper.space))',
            // marginInline: 'auto',
            // display: 'flex',
            // flexDirection: 'row',
            width: '100%',
            height: 'fit-content',

            // justifyContent: 'space-between',
            // alignItems: 'center',
        },
        links: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            gap: '1rem',
            fontFamily: 'body',
            alignItems: 'center',
            colorPalette: 'gray',
        },
        actions: {
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
            alignItems: 'center',

            '& > li': {
                alignSelf: 'center',
            },
        },
    },
    // defaultVariants: {
    //     variant: 'foo',
    // },
    // variants: {
    //     variant: {
    //         foo: {
    //             root: {},
    //             inner: {
    //                 ...sharedVisualStyles,
    //             },
    //             header: {},
    //             content: {},
    //             footer: {},
    //         },
    //         bar: {
    //             root: {},
    //             inner: {
    //                 ...sharedVisualStyles,
    //             },
    //             header: {},
    //             content: {},
    //             footer: {},
    //         },
    //     },
    // },
});
