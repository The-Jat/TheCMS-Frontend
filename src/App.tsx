// App.tsx

import {
  useEffect,
  useState,
} from 'react';

import RuntimeRoutes
  from './runtime/RuntimeRoutes';

import {
  bootstrapAdmin,
} from './runtime/bootstrap';

function App() {

  const [
    manifest,
    setManifest,
  ] = useState<any>();

  useEffect(() => {

    bootstrapAdmin()
      .then(setManifest);

  }, []);

  if (!manifest) {

    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    <RuntimeRoutes
      manifest={manifest}
    />
  );
}

export default App;