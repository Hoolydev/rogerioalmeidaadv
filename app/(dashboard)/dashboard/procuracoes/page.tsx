import { PageHeader } from '@/components/common/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, FileText, CheckCircle, Clock, Download } from 'lucide-react';
import { mockPowerOfAttorneys } from '@/lib/mock-data';

export default function ProcuracoesPage() {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'signed':
                return 'bg-green-100 text-green-800';
            case 'generated':
                return 'bg-blue-100 text-blue-800';
            case 'draft':
                return 'bg-gray-100 text-gray-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'signed':
                return 'Assinada';
            case 'generated':
                return 'Gerada';
            case 'draft':
                return 'Rascunho';
            default:
                return status;
        }
    };

    return (
        <div className="space-y-6">
            <PageHeader
                heading="Procurações"
                description="Geração e gerenciamento de procurações"
            >
                <Button className="bg-law-burgundy hover:bg-law-burgundy-dark">
                    <Plus className="mr-2 h-4 w-4" />
                    Nova Procuração
                </Button>
            </PageHeader>

            {/* Stats */}
            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total</CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-law-burgundy">{mockPowerOfAttorneys.length}</div>
                        <p className="text-xs text-muted-foreground">Procurações geradas</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Assinadas</CardTitle>
                        <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-600">
                            {mockPowerOfAttorneys.filter(p => p.status === 'signed').length}
                        </div>
                        <p className="text-xs text-muted-foreground">Finalizadas</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Pendentes</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-orange-600">
                            {mockPowerOfAttorneys.filter(p => p.status !== 'signed').length}
                        </div>
                        <p className="text-xs text-muted-foreground">Aguardando assinatura</p>
                    </CardContent>
                </Card>
            </div>

            {/* Power of Attorneys List */}
            <Card>
                <CardHeader>
                    <CardTitle>Procurações Cadastradas</CardTitle>
                    <CardDescription>
                        Visualize e gerencie as procurações do escritório
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="relative overflow-x-auto md:overflow-x-visible">
                        <table className="w-full text-sm">
                            <thead className="border-b">
                                <tr className="text-left">
                                    <th className="pb-3 font-medium">Cliente</th>
                                    <th className="pb-3 font-medium">Parte Contrária</th>
                                    <th className="pb-3 font-medium">Data</th>
                                    <th className="pb-3 font-medium">Status</th>
                                    <th className="pb-3 font-medium">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mockPowerOfAttorneys.map((attorney) => (
                                    <tr key={attorney.id} className="border-b last:border-0">
                                        <td className="py-4">
                                            <div className="font-medium">{attorney.clientName}</div>
                                        </td>
                                        <td className="py-4 text-muted-foreground">{attorney.opposingParty}</td>
                                        <td className="py-4 text-muted-foreground">
                                            {new Date(attorney.generatedDate).toLocaleDateString('pt-BR')}
                                        </td>
                                        <td className="py-4">
                                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(attorney.status)}`}>
                                                {getStatusLabel(attorney.status)}
                                            </span>
                                        </td>
                                        <td className="py-4">
                                            <div className="flex gap-2">
                                                <Button variant="ghost" size="sm">
                                                    <Download className="mr-1 h-3 w-3" />
                                                    Baixar
                                                </Button>
                                                <Button variant="ghost" size="sm" className="text-law-burgundy">
                                                    Editar
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

            {/* Template Info */}
            <Card className="border-l-4 border-l-law-gold">
                <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-law-gold" />
                        <div>
                            <h4 className="font-medium">Templates Disponíveis</h4>
                            <p className="text-sm text-muted-foreground">
                                O sistema permite a criação de procurações a partir de templates personalizados,
                                com preenchimento automático dos dados do cliente.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
