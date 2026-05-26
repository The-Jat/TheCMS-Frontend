import Card
    from '../ui/Card';

export default function DashboardPage() {

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns:
                    'repeat(3,1fr)',
                gap: '20px',
            }}
        >
            <Card title="Plugins">
                1
            </Card>

            <Card title="Routes">
                1
            </Card>

            <Card title="Permissions">
                1
            </Card>
        </div>
    );
}