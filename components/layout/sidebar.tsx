'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
    Users,
    Scale,
    FileText,
    Calendar,
    Bell,
    Briefcase,
    MessageSquare,
    Newspaper,
    BookOpen,
    Settings,
    Home,
    LogOut,
} from 'lucide-react';

const menuItems = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: Home,
    },
    {
        title: 'Clientes',
        href: '/dashboard/clientes',
        icon: Users,
    },
    {
        title: 'Processos',
        href: '/dashboard/processos',
        icon: Scale,
    },
    {
        title: 'Prazos',
        href: '/dashboard/prazos',
        icon: Bell,
    },
    {
        title: 'Audiências',
        href: '/dashboard/audiencias',
        icon: Calendar,
    },
    {
        title: 'Procurações',
        href: '/dashboard/procuracoes',
        icon: FileText,
    },
    {
        title: 'Publicações (DJEN)',
        href: '/dashboard/publicacoes',
        icon: Newspaper,
    },
    {
        title: 'Diário Oficial',
        href: '/dashboard/diario-oficial',
        icon: BookOpen,
    },
    {
        title: 'Documentos',
        href: '/dashboard/documentos',
        icon: Briefcase,
    },
    {
        title: 'WhatsApp',
        href: '/dashboard/whatsapp',
        icon: MessageSquare,
    },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-card">
            {/* Logo */}
            <div className="flex h-20 items-center justify-center border-b border-border bg-white px-4 py-3">
                <Link href="/dashboard" className="flex w-full items-center justify-center">
                    <img
                        src="https://i.postimg.cc/76VzjQ8B/logo-rogerio-almeida.png"
                        alt="Rogério Almeida Advogados"
                        className="h-16 w-auto max-w-full object-contain"
                    />
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                                isActive
                                    ? 'bg-law-burgundy text-white'
                                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                            )}
                        >
                            <Icon className="h-5 w-5" />
                            <span>{item.title}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom Section */}
            <div className="border-t border-border p-3">
                <Link
                    href="/dashboard/configuracoes"
                    className={cn(
                        'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                        pathname === '/dashboard/configuracoes'
                            ? 'bg-law-burgundy text-white'
                            : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                    )}
                >
                    <Settings className="h-5 w-5" />
                    <span>Configurações</span>
                </Link>

                <button
                    className="mt-2 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                >
                    <LogOut className="h-5 w-5" />
                    <span>Sair</span>
                </button>
            </div>
        </aside>
    );
}
