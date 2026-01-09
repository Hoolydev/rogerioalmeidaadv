import { PageHeader } from '@/components/common/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MessageSquare, Send, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { mockWhatsAppMessages } from '@/lib/mock-data';

export default function WhatsAppPage() {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'read':
                return 'bg-blue-100 text-blue-800';
            case 'delivered':
                return 'bg-green-100 text-green-800';
            case 'sent':
                return 'bg-gray-100 text-gray-800';
            case 'failed':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'read':
                return 'Lida';
            case 'delivered':
                return 'Entregue';
            case 'sent':
                return 'Enviada';
            case 'failed':
                return 'Falhou';
            default:
                return status;
        }
    };

    return (
        <div className="space-y-6">
            <PageHeader
                heading="WhatsApp"
                description="Comunicação com clientes via WhatsApp Business"
            >
                <Button className="bg-law-burgundy hover:bg-law-burgundy-dark">
                    <Send className="mr-2 h-4 w-4" />
                    Nova Mensagem
                </Button>
            </PageHeader>

            {/* Stats */}
            <div className="grid gap-4 md:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Enviadas</CardTitle>
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-law-burgundy">{mockWhatsAppMessages.length}</div>
                        <p className="text-xs text-muted-foreground">Este mês</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Entregues</CardTitle>
                        <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-600">
                            {mockWhatsAppMessages.filter(m => m.status === 'delivered' || m.status === 'read').length}
                        </div>
                        <p className="text-xs text-muted-foreground">Taxa de entrega</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Lidas</CardTitle>
                        <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-blue-600">
                            {mockWhatsAppMessages.filter(m => m.status === 'read').length}
                        </div>
                        <p className="text-xs text-muted-foreground">Taxa de leitura</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Falhas</CardTitle>
                        <AlertCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-red-600">0</div>
                        <p className="text-xs text-muted-foreground">Sem erros</p>
                    </CardContent>
                </Card>
            </div>

            {/* Message Composer */}
            <Card>
                <CardHeader>
                    <CardTitle>Enviar Mensagem</CardTitle>
                    <CardDescription>
                        Envie mensagens aos clientes com modelos personalizados
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="phone">Telefone do Cliente</Label>
                            <Input id="phone" placeholder="(32) 98765-4321" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="template">Modelo de Mensagem</Label>
                            <select
                                id="template"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            >
                                <option>Lembrete de Audiência</option>
                                <option>Aniversário</option>
                                <option>Solicitação de Documentos</option>
                                <option>Mensagem Personalizada</option>
                            </select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Mensagem</Label>
                        <textarea
                            id="message"
                            rows={4}
                            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            placeholder="Digite sua mensagem aqui... Use {nome} para personalizar"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline">Pré-visualizar</Button>
                        <Button className="bg-law-burgundy hover:bg-law-burgundy-dark">
                            <Send className="mr-2 h-4 w-4" />
                            Enviar Mensagem
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Messages History */}
            <Card>
                <CardHeader>
                    <CardTitle>Histórico de Mensagens</CardTitle>
                    <CardDescription>
                        Acompanhe todas as mensagens enviadas
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        {mockWhatsAppMessages.map((message) => (
                            <div
                                key={message.id}
                                className="flex items-start gap-3 rounded-lg border p-4 transition-colors hover:bg-accent"
                            >
                                <div className="mt-1">
                                    <MessageSquare className="h-5 w-5 text-law-burgundy" />
                                </div>
                                <div className="flex-1 space-y-1">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h4 className="font-semibold">{message.recipientName}</h4>
                                            <p className="text-sm text-muted-foreground">{message.recipientPhone}</p>
                                        </div>
                                        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(message.status)}`}>
                                            {getStatusLabel(message.status)}
                                        </span>
                                    </div>
                                    <p className="text-sm">{message.message}</p>
                                    <p className="text-xs text-muted-foreground">
                                        Enviada em: {message.sentAt}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Info Card */}
            <Card className="border-l-4 border-l-law-gold">
                <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                        <MessageSquare className="h-5 w-5 text-law-gold" />
                        <div>
                            <h4 className="font-medium">Integração WhatsApp Business</h4>
                            <p className="text-sm text-muted-foreground">
                                O sistema permite enviar mensagens via WhatsApp com confirmação prévia do administrador.
                                Todas as comunicações são registradas para histórico e auditoria. Use variáveis como
                                {'{nome}'} para personalizar as mensagens automaticamente.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
