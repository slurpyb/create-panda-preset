import type {Preset} from '@pandacss/dev';
import {cluster} from './cluster.pattern';
import {container} from './container.pattern';
import {cover} from './cover.pattern';
import {frame} from './frame.pattern';
import {switcher} from './switcher.pattern';

export const patterns: Preset['patterns'] = {
    extend: {
        container,
        cover,
        cluster,
        frame,
        switcher,
    },
};
