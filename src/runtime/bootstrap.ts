// runtime/bootstrap.ts

import { getManifest } from './manifest';
// import { loadPlugins } from './plugin-loader';
import { registerComponent } from './component-registry';
import BlogList from '../plugins/blog/BlogList';

export async function bootstrapAdmin() {

    const manifest = await getManifest();
    console.log(
        'Plugins:',
        manifest.plugins
    );

    registerComponent(
        'BlogList',
        BlogList
    );
    //   await loadPlugins(
    //     manifest.plugins,
    //   );

    return manifest;
}