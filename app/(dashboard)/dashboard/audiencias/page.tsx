import { PageHeader } from '@/components/common/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Calendar, Clock, MapPin, User } from 'lucide-react';
import { mockHearings } from '@/lib/mock-data';

export default function AudienciasPage() {
    return (
        <div className="space-y-6">
            <PageHeader
                heading="Audiências"
                description="Gerencie as audiências e eventos dos processos"
            >
                <Button className="bg-law-burgundy hover:bg-law-burgundy-dark">
                    <Plus className="mr-2 h-4 w-4" />
                    Nova Audiência
                </Button>
            </PageHeader>

            {/* Stats */}
            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total de Audiências</CardTitle>
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-law-burgundy">{mockHearings.length}</div>
                        <p className="text-xs text-muted-foreground">Agendadas</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Próximos 7 Dias</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-law-burgundy">
                            {mockHearings.filter(h => {
                                const hearingDate = new Date(h.date);
                                const today = new Date();
                                const diffDays = Math.ceil((hearingDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
                                return diffDays >= 0 && diffDays <= 7;
                            }).length}
                        </div>
                        <p className="text-xs text-muted-foreground">Audiências próximas</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Este Mês</CardTitle>
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-law-burgundy">{mockHearings.length}</div>
                        <p className="text-xs text-muted-foreground">No mês atual</p>
                    </CardContent>
                </Card>
            </div>

            {/* Hearings List */}
            <Card>
                <CardHeader>
                    <CardTitle>Audiências Agendadas</CardTitle>
                    <CardDescription>
                        Acompanhe todas as audiências programadas
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {mockHearings.map((hearing) => (
                            <div
                                key={hearing.id}
                                className="flex items-start gap-4 rounded-lg border p-4 transition-colors hover:bg-accent"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-law-burgundy/10">
                                    <Calendar className="h-6 w-6 text-law-burgundy" />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h4 className="font-semibold">{hearing.type}</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Processo: {hearing.caseNumber}
                                            </p>
                                        </div>
                                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                                            {hearing.status === 'scheduled' ? 'Agendada' : 'Concluída'}
                                        </span>
                                    </div>
                                    <div className="grid gap-2 text-sm md:grid-cols-2">
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <User className="h-4 w-4" />
                                            <span>{hearing.clientName}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <Calendar className="h-4 w-4" />
                                            <span>
                                                {new Date(hearing.date).toLocaleDateString('pt-BR')} às{' '}
                                                {hearing.time}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <MapPin className="h-4 w-4" />
                                            <span>{hearing.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <User className="h-4 w-4" />
                                            <span>{hearing.judge}</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 pt-2">
                                        <Button variant="outline" size="sm">
                                            Ver Detalhes
                                        </Button>
                                        <Button variant="ghost" size="sm" className="text-law-burgundy">
                                            Analisar com IA
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
