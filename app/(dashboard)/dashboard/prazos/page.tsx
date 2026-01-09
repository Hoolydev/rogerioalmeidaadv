import { PageHeader } from '@/components/common/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, AlertTriangle, Clock, CheckCircle2, Calendar } from 'lucide-react';
import { mockDeadlines } from '@/lib/mock-data';

export default function PrazosPage() {
    const today = new Date();
    const upcomingDeadlines = mockDeadlines.filter(d => {
        const dueDate = new Date(d.dueDate);
        const diffDays = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        return diffDays >= 0 && diffDays <= 7;
    });

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'urgent':
                return 'bg-red-100 text-red-800 border-red-200';
            case 'high':
                return 'bg-orange-100 text-orange-800 border-orange-200';
            case 'medium':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            default:
                return 'bg-green-100 text-green-800 border-green-200';
        }
    };

    const getPriorityLabel = (priority: string) => {
        switch (priority) {
            case 'urgent':
                return 'Urgente';
            case 'high':
                return 'Alta';
            case 'medium':
                return 'Média';
            default:
                return 'Baixa';
        }
    };

    return (
        <div className="space-y-6">
            <PageHeader
                heading="Prazos e Lembretes"
                description="Controle de prazos processuais e lembretes importantes"
            >
                <Button className="bg-law-burgundy hover:bg-law-burgundy-dark">
                    <Plus className="mr-2 h-4 w-4" />
                    Novo Prazo
                </Button>
            </PageHeader>

            {/* Stats */}
            <div className="grid gap-4 md:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Hoje</CardTitle>
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-law-burgundy">0</div>
                        <p className="text-xs text-muted-foreground">Prazos para hoje</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Próximos 7 dias</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-law-burgundy">{upcomingDeadlines.length}</div>
                        <p className="text-xs text-muted-foreground">Prazos próximos</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Urgentes</CardTitle>
                        <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-red-600">
                            {mockDeadlines.filter(d => d.priority === 'urgent').length}
                        </div>
                        <p className="text-xs text-muted-foreground">Prioridade urgente</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Concluídos</CardTitle>
                        <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-600">0</div>
                        <p className="text-xs text-muted-foreground">Este mês</p>
                    </CardContent>
                </Card>
            </div>

            {/* Deadlines List */}
            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Prazos Pendentes</CardTitle>
                        <CardDescription>Próximos prazos a vencer</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {mockDeadlines.map((deadline) => {
                                const dueDate = new Date(deadline.dueDate);
                                const daysUntil = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

                                return (
                                    <div
                                        key={deadline.id}
                                        className="flex items-start gap-3 rounded-lg border p-3 transition-colors hover:bg-accent"
                                    >
                                        <div className="mt-0.5">
                                            <div className={`rounded-full p-1.5 ${deadline.priority === 'urgent' ? 'bg-red-100' : deadline.priority === 'high' ? 'bg-orange-100' : 'bg-yellow-100'}`}>
                                                <Clock className={`h-4 w-4 ${deadline.priority === 'urgent' ? 'text-red-600' : deadline.priority === 'high' ? 'text-orange-600' : 'text-yellow-600'}`} />
                                            </div>
                                        </div>
                                        <div className="flex-1 space-y-1">
                                            <div className="flex items-start justify-between">
                                                <h4 className="text-sm font-semibold leading-none">{deadline.title}</h4>
                                                <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${getPriorityColor(deadline.priority)}`}>
                                                    {getPriorityLabel(deadline.priority)}
                                                </span>
                                            </div>
                                            <p className="text-xs text-muted-foreground">{deadline.clientName}</p>
                                            <p className="text-xs text-muted-foreground">Processo: {deadline.caseNumber}</p>
                                            <div className="flex items-center gap-2 pt-1">
                                                <span className="text-xs font-medium">
                                                    Vencimento: {dueDate.toLocaleDateString('pt-BR')}
                                                </span>
                                                <span className="text-xs text-muted-foreground">
                                                    ({daysUntil} {daysUntil === 1 ? 'dia' : 'dias'})
                                                </span>
                                            </div>
                                            <p className="text-xs text-muted-foreground">Responsável: {deadline.assignedTo}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Calendário de Prazos</CardTitle>
                        <CardDescription>Visão mensal dos prazos</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex h-64 items-center justify-center rounded-lg border-2 border-dashed">
                            <div className="text-center text-sm text-muted-foreground">
                                <Calendar className="mx-auto mb-2 h-8 w-8" />
                                <p>Calendário interativo</p>
                                <p className="text-xs">em desenvolvimento</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
