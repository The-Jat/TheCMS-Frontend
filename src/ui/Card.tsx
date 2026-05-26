// src/ui/Card.tsx

export default function Card({
  title,
  children,
}: any) {

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: '8px',
        padding: '20px',
        boxShadow:
          '0 1px 3px rgba(0,0,0,.1)',
      }}
    >
      <h3>{title}</h3>

      {children}
    </div>
  );
}