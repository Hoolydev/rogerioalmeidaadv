import { PageHeader } from '@/components/common/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Plus, Search, FileText, Upload, CheckCircle, Clock } from 'lucide-react';
import { mockDocuments } from '@/lib/mock-data';

export default function DocumentosPage() {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'validated':
                return 'bg-green-100 text-green-800';
            case 'extracted':
                return 'bg-blue-100 text-blue-800';
            case 'uploaded':
                return 'bg-gray-100 text-gray-800';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'validated':
                return 'Validado';
            case 'extracted':
                return 'Dados Extraídos';
            case 'uploaded':
                return 'Enviado';
            case 'pending':
                return 'Pendente';
            default:
                return status;
        }
    };

    const getTypeLabel = (type: string) => {
        const types: Record<string, string> = {
            IDENTITY: 'Documento de Identidade',
            PAYCHECK: 'Contracheque',
            TIMESHEET: 'Espelho de Ponto',
            ADDRESS_PROOF: 'Comprovante de Residência',
            COURT_DOCUMENT: 'Documento Judicial',
            CONTRACT: 'Contrato',
            PHOTO: 'Foto',
            OTHER: 'Outros',
        };
        return types[type] || type;
    };

    return (
        <div className="space-y-6">
            <PageHeader
                heading="Documentos"
                description="Gerenciamento de documentos com extração automática de dados"
            >
                <Button className="bg-law-burgundy hover:bg-law-burgundy-dark">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload de Documentos
                </Button>
            </PageHeader>

            {/* Search */}
            <div className="flex items-center gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        placeholder="Buscar por nome do documento ou cliente..."
                        className="pl-10"
                    />
                </div>
            </div>

            {/* Stats */}
            <div className="grid gap-4 md:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total de Documentos</CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-law-burgundy">{mockDocuments.length}</div>
                        <p className="text-xs text-muted-foreground">Cadastrados</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Validados</CardTitle>
                        <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-600">
                            {mockDocuments.filter(d => d.status === 'validated').length}
                        </div>
                        <p className="text-xs text-muted-foreground">Aprovados</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Aguardando Validação</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-blue-600">
                            {mockDocuments.filter(d => d.status === 'extracted').length}
                        </div>
                        <p className="text-xs text-muted-foreground">Pendentes</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Este Mês</CardTitle>
                        <Upload className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-law-burgundy">{mockDocuments.length}</div>
                        <p className="text-xs text-muted-foreground">Uploads recentes</p>
                    </CardContent>
                </Card>
            </div>

            {/* Documents List */}
            <Card>
                <CardHeader>
                    <CardTitle>Documentos Cadastrados</CardTitle>
                    <CardDescription>
                        Visualize e gerencie todos os documentos do escritório
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="relative overflow-x-auto md:overflow-x-visible">
                        <table className="w-full text-sm">
                            <thead className="border-b">
                                <tr className="text-left">
                                    <th className="pb-3 font-medium">Documento</th>
                                    <th className="pb-3 font-medium">Tipo</th>
                                    <th className="pb-3 font-medium">Cliente</th>
                                    <th className="pb-3 font-medium">Data de Upload</th>
                                    <th className="pb-3 font-medium">Tamanho</th>
                                    <th className="pb-3 font-medium">Status</th>
                                    <th className="pb-3 font-medium">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mockDocuments.map((document) => (
                                    <tr key={document.id} className="border-b last:border-0">
                                        <td className="py-4">
                                            <div className="flex items-center gap-2">
                                                <FileText className="h-4 w-4 text-muted-foreground" />
                                                <span className="font-medium">{document.name}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 text-muted-foreground">
                                            {getTypeLabel(document.type)}
                                        </td>
                                        <td className="py-4 text-muted-foreground">{document.clientName}</td>
                                        <td className="py-4 text-muted-foreground">
                                            {new Date(document.uploadDate).toLocaleDateString('pt-BR')}
                                        </td>
                                        <td className="py-4 text-muted-foreground">{document.size}</td>
                                        <td className="py-4">
                                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(document.status)}`}>
                                                {getStatusLabel(document.status)}
                                            </span>
                                        </td>
                                        <td className="py-4">
                                            <div className="flex gap-2">
                                                <Button variant="ghost" size="sm">
                                                    Visualizar
                                                </Button>
                                                {document.status === 'extracted' && (
                                                    <Button variant="ghost" size="sm" className="text-law-burgundy">
                                                        Validar
                                                    </Button>
                                                )}
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
            <Card className="border-l-4 border-l-law-burgundy">
                <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-law-burgundy" />
                        <div>
                            <h4 className="font-medium">Extração Automática com IA</h4>
                            <p className="text-sm text-muted-foreground">
                                O sistema utiliza IA (Google Gemini Vision) para extrair automaticamente dados de
                                documentos como RG, CPF, contracheques e espelhos de ponto. Todos os dados extraídos
                                passam por validação humana obrigatória antes de serem confirmados.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
