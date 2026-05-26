// src/ui/Button.tsx

export default function Button({
  children,
  onClick,
}: any) {

  return (
    <button
      onClick={onClick}
      style={{
        padding:
          '10px 16px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}