import {
    Routes,
    Route,
} from 'react-router-dom';

import AdminLayout
    from '../layouts/AdminLayout';

import DashboardPage
    from '../pages/DashboardPage';

import UnknownPluginPage
    from './UnknownPluginPage';

export default function RuntimeRoutes({
    manifest,
}: any) {

    return (
        <AdminLayout
            manifest={manifest}
        >

            <Routes>

                <Route
                    path="/"
                    element={
                        <DashboardPage />
                    }
                />

                {manifest.routes.map(
                    (route: any) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={
                                <UnknownPluginPage
                                    component={
                                        route.component
                                    }
                                />
                            }
                        />
                    )
                )}

            </Routes>

        </AdminLayout>
    );
}