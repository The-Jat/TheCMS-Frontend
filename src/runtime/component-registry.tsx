// runtime/component-registry.ts

const registry = new Map<string, any>();

export function registerComponent(
  name: string,
  component: any,
) {
  registry.set(name, component);
}

export function getComponent(
  name: string,
) {
  return registry.get(name);
}