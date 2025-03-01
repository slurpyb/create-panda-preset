import { Recursive, type SlotRecipeDefinition } from '@pandacss/types';
import { exampleSlotComponent } from './example-component.slot-recipe';

export const slotRecipes: Recursive<SlotRecipeDefinition> = {
	exampleSlotComponent,
};
