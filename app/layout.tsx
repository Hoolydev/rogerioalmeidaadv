import './globals.css';
import type { Metadata } from 'next';
import { Roboto, Alegreya } from 'next/font/google';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    variable: '--font-roboto',
    display: 'swap',
});

const alegreya = Alegreya({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    variable: '--font-alegreya',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Rogério Almeida Advogados - Sistema de Gerenciamento',
    description: 'Sistema completo de gestão jurídica',
    manifest: '/manifest.json',
    themeColor: '#843534',
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 5,
        userScalable: true,
    },
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: 'RA Advogados',
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <body className={`${roboto.variable} ${alegreya.variable} font-sans antialiased overflow-x-hidden`}>
                {children}
            </body>
        </html>
    );
}
