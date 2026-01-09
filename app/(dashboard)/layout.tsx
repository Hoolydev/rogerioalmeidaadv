'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { MobileSidebar } from '@/components/layout/mobile-sidebar';
import { Header } from '@/components/layout/header';
import { InstallPrompt } from '@/components/pwa/install-prompt';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-background">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block">
                <Sidebar />
            </div>

            {/* Mobile Sidebar */}
            <MobileSidebar
                isOpen={isMobileSidebarOpen}
                onClose={() => setIsMobileSidebarOpen(false)}
            />

            {/* Main Content */}
            <div className="flex flex-1 flex-col lg:pl-64 w-full max-w-full overflow-x-hidden">
                <Header
                    userName="Admin"
                    onMenuClick={() => setIsMobileSidebarOpen(true)}
                />

                <main className="flex-1 p-4 sm:p-6 w-full max-w-full">
                    <div className="mx-auto max-w-7xl w-full">
                        {children}
                    </div>
                </main>
            </div>

            {/* PWA Install Prompt */}
            <InstallPrompt />
        </div>
    );
}
