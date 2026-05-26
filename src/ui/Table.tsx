// src/ui/Table.tsx

export default function Table({
  columns,
  data,
}: any) {

  return (
    <table
      style={{
        width: '100%',
        background: '#fff',
      }}
    >
      <thead>
        <tr>
          {columns.map(
            (col: any) => (
              <th key={col.key}>
                {col.title}
              </th>
            )
          )}
        </tr>
      </thead>

      <tbody>

        {data.map(
          (row: any, index: number) => (
            <tr key={index}>
              {columns.map(
                (col: any) => (
                  <td
                    key={col.key}
                  >
                    {
                      row[
                        col.key
                      ]
                    }
                  </td>
                )
              )}
            </tr>
          )
        )}

      </tbody>
    </table>
  );
}