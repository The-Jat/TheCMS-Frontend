import * as React from 'react';

import {
    getManifest,
} from './manifest';

// import BlogList
//     from '../plugins/blog/BlogList';

// import {
//     registerComponent,
// } from './component-registry';

import {
    registerTheme,
} from './theme-registry';

import defaultTheme
    from '../themes/default-theme';

import { registerBlogPlugin, } from '../plugins/blog/admin';
// import { registerPlugin } from './plugin-registry';

import {
    loadPlugins,
} from './plugin-loader';

import {
    PluginAPI,
} from './plugin-api';

(window as any).React = React;
(
    window as any
).TheCMS = {
    PluginAPI,
};

export async function bootstrapAdmin() {

    const manifest = await getManifest();

    // console.log("Registering");
    // registerBlogPlugin();
    // registerPlugin({
    //     name: 'blog',
    // });

    await loadPlugins(manifest.plugins);

    registerTheme(
        'default',
        defaultTheme
    );

    return manifest;
}