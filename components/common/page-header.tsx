import { cn } from '@/lib/utils';

export function PageHeader({
    heading,
    description,
    children,
    className,
}: {
    heading: string;
    description?: string;
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn('flex items-center justify-between pb-6', className)}>
            <div className="space-y-1">
                <h1 className="text-3xl font-bold font-serif text-foreground tracking-tight">
                    {heading}
                </h1>
                {description && (
                    <p className="text-muted-foreground text-sm max-w-2xl">
                        {description}
                    </p>
                )}
            </div>
            {children && <div className="flex items-center gap-2">{children}</div>}
        </div>
    );
}
