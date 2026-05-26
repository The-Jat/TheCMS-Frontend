// src/runtime/UnknownPluginPage.tsx

import {
    getComponent,
} from './component-registry';

export default function UnknownPluginPage({
    component,
}: any) {

    const Component =
        getComponent(component);

    if (!Component) {
        return (
            <div>
                Component not loaded:
                {component}
            </div>
        );
    }

    return <Component />;
}