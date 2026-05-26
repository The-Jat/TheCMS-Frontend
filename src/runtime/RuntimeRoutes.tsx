// src/runtime/RuntimeRoutes.tsx

import {
    Routes,
    Route,
} from 'react-router-dom';

import UnknownPluginPage
    from './UnknownPluginPage';

import {
    getComponent,
} from './component-registry';

export default function RuntimeRoutes({
    manifest,
}: any) {

    return (
        <Routes>

            <Route
                path="/"
                element={<h1>Dashboard</h1>}
            />

            {manifest.routes.map(
                (route: any) => {

                    const Component =
                        getComponent(
                            route.component
                        );

                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={
                                Component
                                    ? <Component />
                                    : (
                                        <UnknownPluginPage
                                            component={
                                                route.component
                                            }
                                        />
                                    )
                            }
                        />
                    );
                }
            )}

        </Routes>
    );
}