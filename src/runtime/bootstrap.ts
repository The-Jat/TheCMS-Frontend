import {
    getManifest,
} from './manifest';

import BlogList
    from '../plugins/blog/BlogList';

import {
    registerComponent,
} from './component-registry';

import {
    registerTheme,
} from './theme-registry';

import defaultTheme
    from '../themes/default-theme';

import { registerBlogPlugin, } from '../plugins/blog/admin';
import { registerPlugin } from './plugin-registry';

export async function bootstrapAdmin() {

    const manifest = await getManifest();

    console.log("Registering");
    registerBlogPlugin();
    // registerPlugin({
    //     name: 'blog',
    // });

    registerTheme(
        'default',
        defaultTheme
    );

    return manifest;
}