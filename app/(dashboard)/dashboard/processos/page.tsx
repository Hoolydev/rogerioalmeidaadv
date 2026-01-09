import { PageHeader } from '@/components/common/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Plus, Search, Scale, Clock, CheckCircle } from 'lucide-react';
import { mockCases } from '@/lib/mock-data';

export default function ProcessosPage() {
    return (
        <div className="space-y-6">
            <PageHeader
                heading="Processos"
                description="Gerencie os processos judiciais do escritório"
            >
                <Button className="bg-law-burgundy hover:bg-law-burgundy-dark">
                    <Plus className="mr-2 h-4 w-4" />
                    Novo Processo
                </Button>
            </PageHeader>

            {/* Search */}
            <div className="flex items-center gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        placeholder="Buscar por número do processo, cliente ou parte contrária..."
                        className="pl-10"
                    />
                </div>
            </div>

            {/* Stats */}
            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total de Processos</CardTitle>
                        <Scale className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-law-burgundy">{mockCases.length}</div>
                        <p className="text-xs text-muted-foreground">Cadastrados</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Em Andamento</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-law-burgundy">
                            {mockCases.filter(c => c.status === 'active').length}
                        </div>
                        <p className="text-xs text-muted-foreground">Ativos</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Finalizados</CardTitle>
                        <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-law-burgundy">0</div>
                        <p className="text-xs text-muted-foreground">Concluídos</p>
                    </CardContent>
                </Card>
            </div>

            {/* Cases List */}
            <Card>
                <CardHeader>
                    <CardTitle>Processos Cadastrados</CardTitle>
                    <CardDescription>
                        Visualize e gerencie todos os processos do escritório
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {/* Desktop Table View */}
                    <div className="hidden md:block space-y-3">
                        {mockCases.map((legalCase) => (
                            <Card key={legalCase.id} className="border-l-4 border-l-law-burgundy">
                                <CardHeader className="pb-3">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="mb-2 flex items-center gap-2">
                                                <CardTitle className="text-base">{legalCase.caseNumber}</CardTitle>
                                                <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${legalCase.type === 'Trabalhista' ? 'bg-blue-100 text-blue-800' :
                                                        legalCase.type === 'Previdenciário' ? 'bg-purple-100 text-purple-800' :
                                                            'bg-gray-100 text-gray-800'
                                                    }`}>
                                                    {legalCase.type}
                                                </span>
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                <p><span className="font-medium">Cliente:</span> {legalCase.clientName}</p>
                                                <p><span className="font-medium">Parte Contrária:</span> {legalCase.opposingParty}</p>
                                                <p><span className="font-medium">Tribunal:</span> {legalCase.court}</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <div className="grid grid-cols-2 gap-2 text-sm">
                                        <div>
                                            <p className="text-muted-foreground">Distribuído:</p>
                                            <p className="font-medium">{new Date(legalCase.filingDate).toLocaleDateString('pt-BR')}</p>
                                        </div>
                                        <div>
                                            <p className="text-muted-foreground">Última atualização:</p>
                                            <p className="font-medium">{new Date(legalCase.lastUpdate).toLocaleDateString('pt-BR')}</p>
                                        </div>
                                    </div>
                                    <div className="mt-3 flex gap-2">
                                        <Button variant="outline" size="sm" className="flex-1">Ver Detalhes</Button>
                                        <Button variant="ghost" size="sm" className="flex-1">Editar</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Mobile Card View */}
                    <div className="md:hidden space-y-3">
                        {mockCases.map((legalCase) => (
                            <Card key={legalCase.id} className="border-l-4 border-l-law-burgundy">
                                <CardContent className="p-4">
                                    <div className="space-y-3">
                                        <div>
                                            <div className="font-semibold text-sm">{legalCase.caseNumber}</div>
                                            <span className={`mt-1 inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${legalCase.type === 'Trabalhista' ? 'bg-blue-100 text-blue-800' :
                                                    legalCase.type === 'Previdenciário' ? 'bg-purple-100 text-purple-800' :
                                                        'bg-gray-100 text-gray-800'
                                                }`}>
                                                {legalCase.type}
                                            </span>
                                        </div>
                                        <div className="space-y-1 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Cliente:</span>
                                                <span className="font-medium text-right">{legalCase.clientName}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Parte Contrária:</span>
                                                <span className="font-medium text-right">{legalCase.opposingParty}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Tribunal:</span>
                                                <span className="font-medium text-right text-xs">{legalCase.court}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Distribuído:</span>
                                                <span className="font-medium">{new Date(legalCase.filingDate).toLocaleDateString('pt-BR')}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Atualização:</span>
                                                <span className="font-medium">{new Date(legalCase.lastUpdate).toLocaleDateString('pt-BR')}</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button variant="outline" size="sm" className="flex-1">Ver Detalhes</Button>
                                            <Button variant="ghost" size="sm" className="flex-1">Editar</Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
