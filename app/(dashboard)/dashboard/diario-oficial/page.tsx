import { PageHeader } from '@/components/common/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, BookOpen, Search, FileText } from 'lucide-react';
import { mockOfficialGazettes } from '@/lib/mock-data';

export default function DiarioOficialPage() {
    return (
        <div className="space-y-6">
            <PageHeader
                heading="Diário Oficial - FHEMIG"
                description="Acompanhamento automatizado do Diário Oficial de Minas Gerais"
            >
                <Button className="bg-law-burgundy hover:bg-law-burgundy-dark">
                    <Download className="mr-2 h-4 w-4" />
                    Buscar Edição
                </Button>
            </PageHeader>

            {/* Stats */}
            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Edições Processadas</CardTitle>
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-law-burgundy">{mockOfficialGazettes.length}</div>
                        <p className="text-xs text-muted-foreground">Este mês</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Entradas FHEMIG</CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-law-burgundy">
                            {mockOfficialGazettes.reduce((acc, g) => acc + g.fhemigEntriesCount, 0)}
                        </div>
                        <p className="text-xs text-muted-foreground">Total de registros</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Última Atualização</CardTitle>
                        <Search className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-law-burgundy">Hoje</div>
                        <p className="text-xs text-muted-foreground">
                            {new Date().toLocaleDateString('pt-BR')}
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Gazettes List */}
            <Card>
                <CardHeader>
                    <CardTitle>Edições Processadas</CardTitle>
                    <CardDescription>
                        Histórico de edições do Diário Oficial com dados da FHEMIG
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="relative overflow-x-auto md:overflow-x-visible">
                        <table className="w-full text-sm">
                            <thead className="border-b">
                                <tr className="text-left">
                                    <th className="pb-3 font-medium">Edição</th>
                                    <th className="pb-3 font-medium">Data de Publicação</th>
                                    <th className="pb-3 font-medium">Entradas FHEMIG</th>
                                    <th className="pb-3 font-medium">Status</th>
                                    <th className="pb-3 font-medium">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mockOfficialGazettes.map((gazette) => (
                                    <tr key={gazette.id} className="border-b last:border-0">
                                        <td className="py-4">
                                            <div className="font-medium">{gazette.editionNumber}</div>
                                        </td>
                                        <td className="py-4 text-muted-foreground">
                                            {new Date(gazette.publicationDate).toLocaleDateString('pt-BR')}
                                        </td>
                                        <td className="py-4">
                                            <span className="inline-flex items-center rounded-full bg-law-burgundy/10 px-2.5 py-0.5 text-xs font-medium text-law-burgundy">
                                                {gazette.fhemigEntriesCount} {gazette.fhemigEntriesCount === 1 ? 'entrada' : 'entradas'}
                                            </span>
                                        </td>
                                        <td className="py-4">
                                            {gazette.isProcessed ? (
                                                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                                    Processada
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                                                    Pendente
                                                </span>
                                            )}
                                        </td>
                                        <td className="py-4">
                                            <div className="flex gap-2">
                                                <Button variant="ghost" size="sm">
                                                    Ver Detalhes
                                                </Button>
                                                <Button variant="ghost" size="sm">
                                                    <Download className="mr-1 h-3 w-3" />
                                                    Baixar
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>

            {/* Info Card */}
            <Card className="border-l-4 border-l-law-gold">
                <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                        <BookOpen className="h-5 w-5 text-law-gold" />
                        <div>
                            <h4 className="font-medium">Processamento Automático</h4>
                            <p className="text-sm text-muted-foreground">
                                O sistema faz o download diário do Diário Oficial de Minas Gerais e extrai
                                automaticamente todas as informações relacionadas à FHEMIG, organizando os dados
                                para fácil consulta e análise.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
