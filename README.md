# Sistema de Gerenciamento Jurídico - Rogério Almeida Advogados

<div align="center">
  <h3>🏛️ Sistema Completo de Gestão para Escritórios de Advocacia</h3>
  <p>Gerenciamento de clientes, processos, documentos, prazos e muito mais</p>
</div>

---

## 📋 Sobre o Projeto

Sistema completo de gerenciamento jurídico desenvolvido especialmente para o escritório **Rogério Almeida Advogados**, com funcionalidades avançadas de:

- ✅ **Gestão de Clientes**: Cadastro completo com dossiês individuais
- 📁 **Documentos Inteligentes**: Upload e extração automática de dados via IA
- ⚖️ **Processos Judiciais**: Controle completo de casos e audiências
- ⏰ **Prazos e Lembretes**: Sistema inteligente de alertas
- 📱 **WhatsApp**: Integração para comunicação com clientes
- 🤖 **Análise com IA**: ChatGPT + NotebookLM para análise estratégica
- 📄 **Procurações**: Geração automática de documentos
- 📰 **DJEN**: Captura automática de publicações
- 📊 **Diário Oficial**: Extração de dados da FHEMIG
- 🔒 **Segurança Avançada**: Auditoria completa e controle de permissões

## 🚀 Tecnologias

- **Frontend**: Next.js 14, React 18, TypeScript
- **Estilização**: Tailwind CSS, Shadcn/ui
- **Backend**: Next.js API Routes (Serverless)
- **Banco de Dados**: PostgreSQL + Prisma ORM
- **Autenticação**: NextAuth.js + WebAuthn (biometria)
- **IA**: OpenAI GPT-4, Google Gemini Vision
- **Storage**: Vercel Blob
- **PWA**: Funciona como app instalável no celular

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ instalado
- PostgreSQL (ou conta Vercel Postgres)
- Chaves de API necessárias (veja .env.example)

### Passo a Passo

1. **Clone o repositório** (ou acesse o diretório do projeto)

2. **Instale as dependências**:
```bash
npm install
```

3. **Configure as variáveis de ambiente**:
   - Copie o arquivo `.env.example` para `.env`
   - Preencha as variáveis necessárias (banco de dados, APIs, etc.)

4. **Inicialize o banco de dados**:
```bash
npx prisma migrate dev --name init
npx prisma db seed  # (opcional) para dados de exemplo
```

5. **Inicie o servidor de desenvolvimento**:
```bash
npm run dev
```

6. **Acesse o sistema**:
   - Abra [http://localhost:3000](http://localhost:3000) no navegador

## 🛠️ Configuração de APIs

### 1. OpenAI (ChatGPT)
- Acesse: https://platform.openai.com/api-keys
- Crie uma nova chave de API
- Cole em `OPENAI_API_KEY` no arquivo `.env`

### 2. Google Cloud (Gemini Vision)
- Acesse: https://console.cloud.google.com/
- Ative a API Vision
- Crie credenciais de serviço account
- Baixe o JSON e salve como `google-credentials.json` na raiz do projeto
- Configure `GOOGLE_CLOUD_PROJECT_ID` no `.env`

### 3. Google Calendar
- Acesse: https://console.cloud.google.com/apis/credentials
- Configure OAuth 2.0
- Adicione `GOOGLE_CLIENT_ID` e `GOOGLE_CLIENT_SECRET` no `.env`

### 4. WhatsApp (Evolution API)
- Instale: https://github.com/EvolutionAPI/evolution-api
- Configure `EVOLUTION_API_URL` e `EVOLUTION_API_KEY` no `.env`

### 5. Vercel Blob Storage
- Acesse: https://vercel.com/storage
- Crie um Blob store
- Copie o token para `BLOB_READ_WRITE_TOKEN` no `.env`

## 📱 PWA - Instalação como App

O sistema pode ser instalado como aplicativo em dispositivos móveis:

**Android/iOS:**
1. Acesse o sistema pelo navegador
2. Toque no menu (⋮) e selecione "Adicionar à tela inicial"
3. O app estará disponível como qualquer outro aplicativo

**Desktop (Chrome/Edge):**
1. Clique no ícone de instalação (➕) na barra de endereços
2. Confirme a instalação

## 🎨 Identidade Visual

O sistema utiliza a identidade visual do escritório Rogério Almeida Advogados:

- **Cor Primária**: Borgonha (#843534)
- **Cor Secundária**: Cinza (#45414d)
- **Cor de Destaque**: Dourado (#ccb68d)
- **Tipografia**: Roboto (interface) + Alegreya (títulos)

Para personalizar o logo:
1. Acesse **Configurações** no menu
2. Faça upload da logo do escritório
3. Ajuste as cores conforme necessário

## 📚 Estrutura do Projeto

```
rogerio-almeida-advogados/
├── app/                      # Páginas e rotas (Next.js App Router)
│   ├── (dashboard)/          # Área autenticada
│   │   ├── clientes/         # Módulo de clientes
│   │   ├── processos/        # Módulo de processos
│   │   ├── prazos/           # Prazos e lembretes
│   │   └── ...
│   ├── api/                  # API Routes
│   └── globals.css           # Estilos globais
├── components/               # Componentes React
│   ├── ui/                   # Componentes UI base
│   ├── clients/              # Componentes de clientes
│   └── ...
├── lib/                      # Utilitários e configurações
├── prisma/                   # Schema e migrações do banco
├── public/                   # Assets estáticos
└── package.json              # Dependências
```

## 🔐 Segurança

O sistema implementa:
- ✅ Criptografia de dados sensíveis
- ✅ Autenticação multi-fator (senha + biometria)
- ✅ Log de auditoria completo
- ✅ Controle granular de permissões (Admin, Full Access, Limited, Read Only)
- ✅ Sistema de travamento administrativo
- ✅ Conformidade com LGPD

## 📖 Uso Básico

### Cadastrar um Cliente

1. Acesse **Clientes** → **Novo Cliente**
2. Preencha os dados pessoais
3. Faça upload de documentos (RG, CPF, etc.)
4. O sistema extrairá automaticamente os dados para validação
5. Revise e confirme as informações extraídas

### Criar um Processo

1. Acesse **Processos** → **Novo Processo**
2. Selecione o cliente
3. Insira as informações do processo
4. Defina o responsável e prazos

### Gerar uma Procuração

1. Acesse **Procurações** → **Nova Procuração**
2. Selecione o cliente e o template
3. Preencha os dados adicionais (parte contrária, etc.)
4. Visualize o preview
5. Gere o PDF

## 🤝 Suporte

Para dúvidas ou problemas:
- 📧 Email: [email do escritório]
- 📱 WhatsApp: [número do escritório]

## 📄 Licença

Este sistema foi desenvolvido exclusivamente para **Rogério Almeida Advogados**. Todos os direitos reservados.

---

<div align="center">
  <p>Desenvolvido com ⚖️ para o escritório Rogério Almeida Advogados</p>
</div>
