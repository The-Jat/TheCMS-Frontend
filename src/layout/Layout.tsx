// src/layout/Layout.tsx

// import { ReactNode } from 'react';
import Sidebar from './Sidebar';

export default function Layout({
  manifest,
  children,
}: any) {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
      }}
    >
      <Sidebar
        items={manifest.navigation}
      />

      <main
        style={{
          flex: 1,
          padding: 20,
        }}
      >
        {children}
      </main>
    </div>
  );
}