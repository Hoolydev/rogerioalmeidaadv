import { PageHeader } from '@/components/common/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Plus, Search, Newspaper, Link as LinkIcon, CheckCircle } from 'lucide-react';
import { mockPublications } from '@/lib/mock-data';

export default function PublicacoesPage() {
    return (
        <div className="space-y-6">
            <PageHeader
                heading="Publicações (DJEN)"
                description="Acompanhamento de publicações do Diário de Justiça Eletrônico"
            >
                <Button className="bg-law-burgundy hover:bg-law-burgundy-dark">
                    <Plus className="mr-2 h-4 w-4" />
                    Adicionar Publicação
                </Button>
            </PageHeader>

            {/* Search */}
            <div className="flex items-center gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        placeholder="Buscar por número do processo ou partes..."
                        className="pl-10"
                    />
                </div>
            </div>

            {/* Stats */}
            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total de Publicações</CardTitle>
                        <Newspaper className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-law-burgundy">{mockPublications.length}</div>
                        <p className="text-xs text-muted-foreground">Cadastradas</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Processadas</CardTitle>
                        <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-600">
                            {mockPublications.filter(p => p.isProcessed).length}
                        </div>
                        <p className="text-xs text-muted-foreground">Vinculadas</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Esta Semana</CardTitle>
                        <Newspaper className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-law-burgundy">{mockPublications.length}</div>
                        <p className="text-xs text-muted-foreground">Publicações recentes</p>
                    </CardContent>
                </Card>
            </div>

            {/* Publications List */}
            <Card>
                <CardHeader>
                    <CardTitle>Publicações Recentes</CardTitle>
                    <CardDescription>
                        Acompanhe as publicações do DJEN
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {mockPublications.map((publication) => (
                            <div
                                key={publication.id}
                                className="rounded-lg border p-4 transition-colors hover:bg-accent"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1 space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Newspaper className="h-4 w-4 text-law-burgundy" />
                                            <h4 className="font-semibold">{publication.caseNumber}</h4>
                                            {publication.isProcessed && (
                                                <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                                                    Processada
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            {publication.parties}
                                        </p>
                                        <p className="text-sm">{publication.content}</p>
                                        <div className="flex items-center gap-4 pt-2 text-xs text-muted-foreground">
                                            <span>
                                                Publicado em: {new Date(publication.publicationDate).toLocaleDateString('pt-BR')}
                                            </span>
                                            {publication.deadline && (
                                                <span className="font-medium text-orange-600">
                                                    Prazo: {new Date(publication.deadline).toLocaleDateString('pt-BR')}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Button variant="outline" size="sm">
                                            <LinkIcon className="mr-1 h-3 w-3" />
                                            Ver no DJEN
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Info Card */}
            <Card className="border-l-4 border-l-law-burgundy">
                <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                        <Newspaper className="h-5 w-5 text-law-burgundy" />
                        <div>
                            <h4 className="font-medium">Integração com DJEN</h4>
                            <p className="text-sm text-muted-foreground">
                                O sistema permite a extração automática de publicações do DJEN através da API oficial.
                                As publicações são automaticamente vinculadas aos processos cadastrados.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
