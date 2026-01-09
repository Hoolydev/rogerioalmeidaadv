'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X } from 'lucide-react';

export function InstallPrompt() {
    const [isVisible, setIsVisible] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

    // Listen for the beforeinstallprompt event
    if (typeof window !== 'undefined') {
        window.addEventListener('beforeinstallprompt', (e) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later
            setDeferredPrompt(e);
            // Update UI to show install button
            setIsVisible(true);
        });

        // Check if already installed
        if (window.matchMedia('(display-mode: standalone)').matches) {
            // Already installed, don't show prompt
            setIsVisible(false);
        }
    }

    const handleInstall = async () => {
        if (!deferredPrompt) {
            return;
        }

        // Show the install prompt
        deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            console.log('PWA installed');
        }

        // Clear the deferred prompt
        setDeferredPrompt(null);
        setIsVisible(false);
    };

    const handleDismiss = () => {
        setIsVisible(false);
        // Save preference to not show again (could use localStorage)
        if (typeof window !== 'undefined') {
            localStorage.setItem('pwa-install-dismissed', 'true');
        }
    };

    // Check if user previously dismissed
    if (typeof window !== 'undefined') {
        const dismissed = localStorage.getItem('pwa-install-dismissed');
        if (dismissed && isVisible) {
            setIsVisible(false);
        }
    }

    if (!isVisible) {
        return null;
    }

    return (
        <Card className="fixed bottom-4 left-4 right-4 z-50 border-law-burgundy shadow-lg md:left-auto md:right-4 md:w-96">
            <CardContent className="relative p-4">
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-6 w-6"
                    onClick={handleDismiss}
                >
                    <X className="h-4 w-4" />
                </Button>

                <div className="pr-8">
                    <div className="mb-3 flex items-center gap-3">
                        <img
                            src="https://i.postimg.cc/76VzjQ8B/logo-rogerio-almeida.png"
                            alt="Rogério Almeida"
                            className="h-12 w-auto"
                        />
                    </div>

                    <h3 className="mb-1 font-serif text-lg font-semibold text-law-burgundy">
                        Instalar Aplicativo
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                        Adicione o Sistema Rogério Almeida Advogados à tela inicial do seu dispositivo para acesso rápido e experiência melhorada.
                    </p>

                    <div className="flex gap-2">
                        <Button
                            onClick={handleInstall}
                            className="flex-1 bg-law-burgundy hover:bg-law-burgundy/90"
                        >
                            Instalar
                        </Button>
                        <Button
                            variant="outline"
                            onClick={handleDismiss}
                            className="flex-1"
                        >
                            Agora Não
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
