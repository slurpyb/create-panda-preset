import { Recursive, type RecipeDefinition } from '@pandacss/types';
import { exampleComponent } from './example-component.recipe';

export const recipes: Recursive<RecipeDefinition> = {
	exampleComponent,
};
