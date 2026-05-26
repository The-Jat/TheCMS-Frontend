import {
    Link,
} from 'react-router-dom';

export default function Sidebar({
    navigation,
}: any) {

    return (
        <aside
            style={{
                width: '250px',
                borderRight:
                    '1px solid #ddd',
                padding: '20px',
            }}
        >
            <h2>
                TheCMS
            </h2>

            {navigation.map(
                (item: any) => (
                    <div
                        key={item.path}
                    >
                        <Link
                            to={item.path}
                        >
                            {item.label}
                        </Link>
                    </div>
                )
            )}
        </aside>
    );
}