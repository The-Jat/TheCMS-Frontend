// src/layout/Sidebar.tsx
import { Link } from 'react-router-dom';

export default function Sidebar({
    items,
}: any) {

    return (
        <aside
            style={{
                width: 240,
                borderRight: '1px solid #ddd',
                padding: 20,
            }}
        >
            <h2>TheCMS</h2>

            {items.map((item: any) => (
                <div key={item.path}>
                    <Link to={item.path}>
                        {item.label}
                    </Link>
                </div>
            ))}
        </aside>
    );
}