import { PageHeader } from '@/components/common/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { mockClients, mockCases, mockDeadlines, mockHearings } from '@/lib/mock-data';

const MOTIVATIONAL_QUOTES = [
    'A justiça é a força dos reis, a astúcia é a força das mulheres, o orgulho é a força dos rebeldes, mas o amor é a força de Deus.',
    'O direito é a ciência do bom e do justo.',
    'A lei está para a sociedade assim como a medicina está para a saúde.',
    'Onde não há lei, não há liberdade.',
    'A justiça atrasada não é justiça, é injustiça qualificada e manifesta.',
];

function getRandomQuote() {
    return MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)];
}

export default function DashboardPage() {
    const quote = getRandomQuote();

    const today = new Date();
    const upcomingDeadlines = mockDeadlines.filter(d => {
        const dueDate = new Date(d.dueDate);
        const diffDays = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        return diffDays >= 0 && diffDays <= 7;
    });

    return (
        <div className="space-y-6">
            <PageHeader
                heading="Dashboard"
                description="Visão geral do escritório Rogério Almeida Advogados"
            />

            {/* Motivational Quote */}
            <Card className="border-l-4 border-l-law-burgundy bg-gradient-to-r from-law-burgundy/5 to-transparent">
                <CardContent className="pt-6">
                    <p className="text-lg font-serif italic text-law-grey">
                        &quot;{quote}&quot;
                    </p>
                </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total de Clientes</CardTitle>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4 text-muted-foreground"
                        >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-law-burgundy">{mockClients.length}</div>
                        <p className="text-xs text-muted-foreground">Cadastrados no sistema</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Processos Ativos</CardTitle>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4 text-muted-foreground"
                        >
                            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                            <path d="M12 11h4" />
                            <path d="M12 16h4" />
                            <path d="M8 11h.01" />
                            <path d="M8 16h.01" />
                        </svg>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-law-burgundy">{mockCases.length}</div>
                        <p className="text-xs text-muted-foreground">Em andamento</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Prazos Próximos</CardTitle>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4 text-muted-foreground"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-law-burgundy">{upcomingDeadlines.length}</div>
                        <p className="text-xs text-muted-foreground">Próximos 7 dias</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Audiências</CardTitle>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4 text-muted-foreground"
                        >
                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                            <line x1="16" x2="16" y1="2" y2="6" />
                            <line x1="8" x2="8" y1="2" y2="6" />
                            <line x1="3" x2="21" y1="10" y2="10" />
                        </svg>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-law-burgundy">{mockHearings.length}</div>
                        <p className="text-xs text-muted-foreground">Agendadas</p>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Prazos Próximos</CardTitle>
                        <CardDescription>Prazos dos próximos 7 dias</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {upcomingDeadlines.length > 0 ? (
                            <div className="space-y-3">
                                {upcomingDeadlines.slice(0, 3).map((deadline) => {
                                    const dueDate = new Date(deadline.dueDate);
                                    const daysUntil = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

                                    return (
                                        <div key={deadline.id} className="flex items-start gap-3 text-sm">
                                            <div className={`mt-0.5 rounded-full p-1 ${deadline.priority === 'urgent' ? 'bg-red-100' : 'bg-orange-100'}`}>
                                                <div className={`h-2 w-2 rounded-full ${deadline.priority === 'urgent' ? 'bg-red-600' : 'bg-orange-600'}`} />
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-medium">{deadline.title}</p>
                                                <p className="text-xs text-muted-foreground">
                                                    {deadline.clientName} • Vence em {daysUntil} {daysUntil === 1 ? 'dia' : 'dias'}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="text-center text-sm text-muted-foreground py-8">
                                Nenhum prazo nos próximos 7 dias
                            </div>
                        )}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Audiências Agendadas</CardTitle>
                        <CardDescription>Próximas audiências</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {mockHearings.length > 0 ? (
                            <div className="space-y-3">
                                {mockHearings.map((hearing) => (
                                    <div key={hearing.id} className="flex items-start gap-3 text-sm">
                                        <div className="mt-0.5 rounded-full bg-law-burgundy/10 p-1.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                className="h-3 w-3 text-law-burgundy"
                                            >
                                                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                                                <line x1="16" x2="16" y1="2" y2="6" />
                                                <line x1="8" x2="8" y1="2" y2="6" />
                                                <line x1="3" x2="21" y1="10" y2="10" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium">{hearing.type}</p>
                                            <p className="text-xs text-muted-foreground">
                                                {hearing.clientName} • {new Date(hearing.date).toLocaleDateString('pt-BR')} às {hearing.time}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center text-sm text-muted-foreground py-8">
                                Nenhuma audiência agendada
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
