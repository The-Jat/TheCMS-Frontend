// src/ui/Page.tsx

export default function Page({
  title,
  actions,
  children,
}: any) {

  return (
    <div>

      <div
        style={{
          display: 'flex',
          justifyContent:
            'space-between',
          alignItems:
            'center',
          marginBottom: '20px',
        }}
      >
        <h1>{title}</h1>

        {actions}
      </div>

      {children}

    </div>
  );
}