import type {Recursive, SlotRecipeDefinition} from '@pandacss/types';
import {navbar} from './navbar.slot-recipe';
import {header} from './header.slot-recipe';
import {product} from './product.slot-recipe';

export const slotRecipes: Recursive<SlotRecipeDefinition> = {
    navbar,
    header,
    product,
};
