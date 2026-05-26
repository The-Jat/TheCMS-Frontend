// src/runtime/plugin-loader.ts

import { registry } from './registry';

export async function loadPlugins(
    plugins: any[],
) {
    for (const plugin of plugins) {

        const module =
            await import(
                /* @vite-ignore */
                `http://localhost:4000${plugin.entry}`
            );

        module.register(registry);
    }
}