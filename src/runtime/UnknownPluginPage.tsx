// src/runtime/UnknownPluginPage.tsx

export default function UnknownPluginPage({
    component,
}: {
    component: string;
}) {
    return (
        <div>
            Component not loaded:
            <b>{component}</b>
        </div>
    );
}