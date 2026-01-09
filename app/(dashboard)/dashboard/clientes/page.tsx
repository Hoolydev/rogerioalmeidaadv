'use client';

import { PageHeader } from '@/components/common/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Plus, Search, Users, FileText, Calendar } from 'lucide-react';
import { mockClients } from '@/lib/mock-data';
import { ResponsiveTable } from '@/components/common/responsive-table';

export default function ClientesPage() {
    return (
        <div className="space-y-6">
            <PageHeader
                heading="Clientes"
                description="Gerencie o cadastro de clientes do escritório"
            >
                <Button className="bg-law-burgundy hover:bg-law-burgundy-dark">
                    <Plus className="mr-2 h-4 w-4" />
                    Novo Cliente
                </Button>
            </PageHeader>

            {/* Search and filters */}
            <div className="flex items-center gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        placeholder="Buscar por nome, CPF ou telefone..."
                        className="pl-10"
                    />
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total de Clientes</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-law-burgundy">{mockClients.length}</div>
                        <p className="text-xs text-muted-foreground">Cadastrados no sistema</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Documentos Pendentes</CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-law-burgundy">2</div>
                        <p className="text-xs text-muted-foreground">Aguardando upload</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Aniversariantes</CardTitle>
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-law-burgundy">1</div>
                        <p className="text-xs text-muted-foreground">Neste mês</p>
                    </CardContent>
                </Card>
            </div>

            {/* Clients Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Lista de Clientes</CardTitle>
                    <CardDescription>
                        Visualize e gerencie todos os clientes cadastrados
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ResponsiveTable
                        data={mockClients}
                        keyExtractor={(client) => client.id}
                        columns={[
                            {
                                header: 'Nome',
                                accessor: (client) => (
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-law-burgundy/10 text-sm font-medium text-law-burgundy">
                                            {client.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                        </div>
                                        <div>
                                            <div className="font-medium">{client.name}</div>
                                            <div className="text-xs text-muted-foreground">{client.email}</div>
                                        </div>
                                    </div>
                                ),
                                mobileLabel: 'Cliente',
                            },
                            {
                                header: 'CPF',
                                accessor: 'cpf',
                                className: 'text-muted-foreground',
                            },
                            {
                                header: 'Contato',
                                accessor: 'phone',
                                className: 'text-muted-foreground',
                            },
                            {
                                header: 'Cidade',
                                accessor: (client) => `${client.city} - ${client.state}`,
                                className: 'text-muted-foreground',
                            },
                            {
                                header: 'Processos',
                                accessor: (client) => (
                                    <span className="inline-flex items-center rounded-full bg-law-gold/20 px-2.5 py-0.5 text-xs font-medium text-law-grey">
                                        {client.casesCount} {client.casesCount === 1 ? 'processo' : 'processos'}
                                    </span>
                                ),
                            },
                            {
                                header: 'Ações',
                                accessor: () => (
                                    <Button variant="ghost" size="sm">
                                        Ver Detalhes
                                    </Button>
                                ),
                            },
                        ]}
                        mobileCardRender={(client) => (
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-law-burgundy/10 text-sm font-medium text-law-burgundy">
                                        {client.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-semibold">{client.name}</div>
                                        <div className="text-sm text-muted-foreground">{client.email}</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div>
                                        <span className="text-muted-foreground">CPF:</span>
                                        <div className="font-medium">{client.cpf}</div>
                                    </div>
                                    <div>
                                        <span className="text-muted-foreground">Telefone:</span>
                                        <div className="font-medium">{client.phone}</div>
                                    </div>
                                    <div>
                                        <span className="text-muted-foreground">Cidade:</span>
                                        <div className="font-medium">{client.city} - {client.state}</div>
                                    </div>
                                    <div>
                                        <span className="text-muted-foreground">Processos:</span>
                                        <div>
                                            <span className="inline-flex items-center rounded-full bg-law-gold/20 px-2 py-0.5 text-xs font-medium text-law-grey">
                                                {client.casesCount}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <Button variant="outline" size="sm" className="w-full">
                                    Ver Detalhes
                                </Button>
                            </div>
                        )}
                    />
                </CardContent>
            </Card>
        </div>
    );
}
