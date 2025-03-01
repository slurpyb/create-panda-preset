import { defineLayerStyles, type LayerStyles } from '@pandacss/dev';

const exampleLayerStyle = {
	description: 'Example layer style',
	value: {
		color: 'red',
	},
};
export const layerStyles: LayerStyles = defineLayerStyles({
	exampleLayerStyle,
});
