import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export interface IBuildPaths {
    entry: string;
    html: string;
    public: string;
    output: string;
    src: string;
}

export type BuildMode = 'production' | 'development';
export type BuildPlatform = 'mobile' | 'desktop';

export interface IBuildOptions {
    port: number;
    paths: IBuildPaths;
    mode: BuildMode;
    platform: BuildPlatform;
    analyzer?: boolean;
    devOptions?: DevServerConfiguration;
}
