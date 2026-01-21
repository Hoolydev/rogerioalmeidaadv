import React from 'react';

type ColumnAccessor<T> = keyof T | ((item: T) => React.ReactNode);

interface ResponsiveTableProps<T extends Record<PropertyKey, unknown>> {
    data: T[];
    columns: {
        header: string;
        accessor: ColumnAccessor<T>;
        className?: string;
        mobileLabel?: string;
    }[];
    onRowClick?: (item: T) => void;
    keyExtractor: (item: T) => string | number;
    mobileCardRender?: (item: T) => React.ReactNode;
}

export function ResponsiveTable<T extends Record<PropertyKey, unknown>>({
    data,
    columns,
    onRowClick,
    keyExtractor,
    mobileCardRender,
}: ResponsiveTableProps<T>) {
    const toCellNode = (value: unknown): React.ReactNode => {
        if (value == null) return null;
        if (React.isValidElement(value)) return value;
        if (typeof value === 'string') return value;
        if (typeof value === 'number') return value;
        if (typeof value === 'bigint') return value.toString();
        if (typeof value === 'boolean') return value ? 'Sim' : 'Não';
        return String(value);
    };

    const getCellValue = (item: T, accessor: ColumnAccessor<T>): React.ReactNode => {
        if (typeof accessor === 'function') {
            return accessor(item);
        }
        return toCellNode(item[accessor]);
    };

    return (
        <>
            {/* Desktop Table View */}
            <div className="hidden overflow-x-auto md:block">
                <table className="w-full text-sm">
                    <thead className="border-b">
                        <tr className="text-left">
                            {columns.map((column, index) => (
                                <th key={index} className="pb-3 font-medium">
                                    {column.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr
                                key={keyExtractor(item)}
                                className={`border-b last:border-0 ${onRowClick ? 'cursor-pointer hover:bg-accent' : ''
                                    }`}
                                onClick={() => onRowClick?.(item)}
                            >
                                {columns.map((column, index) => (
                                    <td key={index} className={`py-4 ${column.className || ''}`}>
                                        {getCellValue(item, column.accessor)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card View */}
            <div className="space-y-3 md:hidden">
                {data.map((item) => (
                    <div
                        key={keyExtractor(item)}
                        className={`rounded-lg border p-4 ${onRowClick ? 'cursor-pointer active:bg-accent' : ''
                            }`}
                        onClick={() => onRowClick?.(item)}
                    >
                        {mobileCardRender ? (
                            mobileCardRender(item)
                        ) : (
                            <div className="space-y-2">
                                {columns.map((column, index) => (
                                    <div key={index} className="flex justify-between gap-2">
                                        <span className="text-sm font-medium text-muted-foreground">
                                            {column.mobileLabel || column.header}:
                                        </span>
                                        <span className={`text-sm ${column.className || ''}`}>
                                            {getCellValue(item, column.accessor)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}
