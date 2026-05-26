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

export async function bootstrapAdmin() {

    const manifest =
        await getManifest();

    console.log("Registering");
    registerComponent(
        'BlogList',
        BlogList
    );

    registerTheme(
        'default',
        defaultTheme
    );

    return manifest;
}