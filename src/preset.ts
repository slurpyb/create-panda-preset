import type {Preset} from '@pandacss/types';
import {definePreset} from '@pandacss/dev';
import type {PresetOptions} from './options';
import {animationStyles} from './animations';
import {globalCss} from './global-css';
import {layerStyles} from './layer-styles';
import {conditions} from './conditions';
import {breakpoints} from './breakpoints';
import {textStyles} from './text-styles';
import {utilities} from './utilities';
import {tokens} from './tokens';
import {semanticTokens} from './semantic-tokens';
import {recipes} from './recipes';
import {slotRecipes} from './slot-recipes';
import {patterns} from './patterns';

import {defaultOptions} from './consts';

export async function createPreset(options?: PresetOptions): Promise<Preset> {
    const presetOptions = options ?? defaultOptions;
    return definePreset({
        name: '@repo/velveteenDiscoPreset',
        globalCss,
        conditions,
        utilities,
        patterns,
        theme: {
            textStyles,
            layerStyles,
            extend: {
                animationStyles,
                breakpoints,
                tokens,
                semanticTokens,
                recipes,
                slotRecipes,
            },
        },
    });
}
