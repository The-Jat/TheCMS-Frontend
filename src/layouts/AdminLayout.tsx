// layouts/AdminLayout.tsx

import Sidebar from '../components/Sidebar';

export default function AdminLayout({
  manifest,
  children,
}: any) {

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
      }}
    >
      <Sidebar
        navigation={
          manifest.navigation
        }
      />

      <main
        style={{
          flex: 1,
          padding: '24px',
        }}
      >
        {children}
      </main>
    </div>
  );
}