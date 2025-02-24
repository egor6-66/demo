import path from 'path';
import { Configuration } from 'webpack';

import { IBuildOptions } from './types/types';

export function buildResolvers(options: IBuildOptions): Configuration['resolve'] {
    return {
        extensions: ['.tsx', '.ts', '.js', '.scss'],
        alias: {
            '@': options.paths.src,
            styleUtilities: path.join(options.paths.src, 'shared', 'styles'),
        },
    };
}
