import { PageHeader } from '@/components/common/page-header';
import { Card, CardContent } from '@/components/ui/card';

export default function ConfiguracoesPage() {
    return (
        <div className="space-y-6">
            <PageHeader
                heading="Configurações"
                description="Configurações do sistema e personalização"
            />

            <Card>
                <CardContent className="flex items-center justify-center py-12">
                    <div className="text-center">
                        <p className="text-muted-foreground">
                            Módulo de configurações em desenvolvimento
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Aqui você poderá fazer upload da logo, personalizar cores, etc.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
