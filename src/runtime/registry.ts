// src/runtime/registry.ts

class PluginRegistry {
    private components = new Map<string, any>();

    register(
        plugin: string,
        component: string,
        value: any,
    ) {
        this.components.set(
            `${plugin}:${component}`,
            value,
        );
    }

    get(
        plugin: string,
        component: string,
    ) {
        return this.components.get(
            `${plugin}:${component}`,
        );
    }
}

export const registry =
    new PluginRegistry();