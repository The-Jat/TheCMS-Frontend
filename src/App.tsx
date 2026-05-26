// src/App.tsx

import { useEffect, useState } from 'react';
import { bootstrapAdmin } from './runtime/bootstrap';

import Layout from './layout/Layout';
import RuntimeRoutes from './runtime/RuntimeRoutes';

export default function App() {

  const [manifest, setManifest] =
    useState<any>(null);

  useEffect(() => {

    bootstrapAdmin()
      .then(setManifest);

  }, []);

  if (!manifest) {
    return <div>Loading...</div>;
  }

  return (
    <Layout manifest={manifest}>
      <RuntimeRoutes
        manifest={manifest}
      />
    </Layout>
  );
}