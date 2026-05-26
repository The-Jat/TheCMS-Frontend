// src/runtime/plugin-loader.ts

import { registry } from './registry';

export async function loadPlugins(
    plugins: any[],
) {
    for (const plugin of plugins) {

        try {
            console.log('Loading plugin:', plugin.name);

            await import(`http://localhost:4000${plugin.entry}`);
            console.log('Loaded plugin:', plugin.name);

        } catch (error) {
            console.error('Failed plugin:', plugin.name, error);
        }
        // const module =
        //     await import(
        //         /* @vite-ignore */
        //         `http://localhost:4000${plugin.entry}`
        //     );

        // module.register(registry);
    }
}