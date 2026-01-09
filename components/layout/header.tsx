'use client';

import { Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
    userName?: string;
    onMenuClick: () => void;
}

export function Header({ userName = 'Admin', onMenuClick }: HeaderProps) {
    return (
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background px-4 sm:px-6">
            {/* Mobile menu button */}
            <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={onMenuClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
            </Button>

            {/* Logo on mobile */}
            <div className="lg:hidden">
                <img
                    src="https://i.postimg.cc/76VzjQ8B/logo-rogerio-almeida.png"
                    alt="Rogério Almeida"
                    className="h-10 w-auto object-contain"
                />
            </div>

            {/* Spacer on desktop */}
            <div className="hidden flex-1 lg:block" />

            {/* Right side actions */}
            <div className="flex items-center gap-2 sm:gap-3">
                {/* Notifications */}
                <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-law-burgundy" />
                </Button>

                {/* User menu */}
                <Button variant="ghost" className="gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-law-burgundy text-white">
                        <User className="h-4 w-4" />
                    </div>
                    <span className="hidden text-sm font-medium sm:inline-block">
                        {userName}
                    </span>
                </Button>
            </div>
        </header>
    );
}
