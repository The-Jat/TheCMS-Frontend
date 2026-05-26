// layouts/AdminLayout.tsx

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function AdminLayout({
  manifest,
  children,
}: any) {

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        background: '#f5f5f5',
      }}
    >
      <Sidebar
        navigation={
          manifest.navigation
        }
      />
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >

        <Header />

        <main
          style={{
            flex: 1,
            padding: '24px',
            overflow: 'auto',
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}