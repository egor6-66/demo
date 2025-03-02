import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ModuleOptions } from 'webpack';

import { IBuildOptions } from './types/types';

export function buildLoaders(options: IBuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development';

    const modelLoader = {
        test: /\.(glb|gltf)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/models/',
                },
            },
        ],
    };

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };

    const svgrLoader = {
        test: /\.svg$/i,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true,
                                },
                            },
                        ],
                    },
                },
            },
        ],
    };

    const scssLoader = {
        test: /(\.module)?.(sass|scss)$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName: '[path][name]__[local]--[hash:base64:5]',
                    },
                    sourceMap: true,
                },
            },
            'sass-loader',
        ],
    };

    const babelLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-typescript', ['@babel/preset-react', { runtime: 'automatic' }]],
                plugins: [] as any,
            },
        },
    };

    return [assetLoader, scssLoader, babelLoader, svgrLoader, modelLoader];
}
