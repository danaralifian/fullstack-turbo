import type React from "react"

interface TableProps {
    headers: string[]
    children: React.ReactNode
}

export const Table: React.FC<TableProps> = ({ headers, children }) => {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    {headers.map((header, index) => (
                        <th
                            key={index}
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
        </table>
    )
}

