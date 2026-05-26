// components/Sidebar.tsx

import {
    Link,
} from 'react-router-dom';

export default function Sidebar({
    navigation,
}: any) {

    return (
        <aside
            style={{
                width: '240px',
                background: '#111827',
                color: '#fff',
                flexShrink: 0,
                padding: '20px',
            }}
        >
            <h2 style={{
                marginBottom: '30px',
            }}>
                TheCMS
            </h2>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    marginTop: '20px',
                }}
            >

                <Link
                    to="/"
                    style={{
                        color: '#fff',
                        textDecoration: 'none',
                    }}
                >
                    Dashboard
                </Link>

                {navigation.map(
                    (item: any) => (

                        <Link
                            key={item.path}
                            to={item.path}
                            style={{
                                color: '#fff',
                                textDecoration: 'none',
                            }}
                        >
                            {item.label}
                        </Link>

                    )
                )}

            </div>
        </aside>
    );
}