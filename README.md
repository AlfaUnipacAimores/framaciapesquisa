# O Farmacêutico na Pesquisa Científica

> Um memorial descritivo interativo sobre o papel vital do farmacêutico na pesquisa científica e desenvolvimento de medicamentos, desenvolvido como trabalho acadêmico para a disciplina de **Desenvolvimento Profissional - Vida e Carreira** do curso de Farmácia da Faculdade AlfaUnipac, filial Aimorés.

## 📋 Sobre o Projeto

Este projeto é uma plataforma web moderna e responsiva que explora a evolução tecnológica na pesquisa farmacêutica, desde as primeiras comunidades de compartilhamento de conhecimento até a era da Inteligência Artificial. O site apresenta informações aprofundadas sobre:

- **Evolução Tecnológica**: Da era dos repositórios informais (GeoCities) aos sistemas modernos de indexação científica e IA
- **O Papel do Farmacêutico**: Atuação profissional em pesquisa, desenvolvimento, ensaios clínicos e inovação
- **Eixos de Pesquisa**: Etapas de desenvolvimento de medicamentos, participação farmacêutica, importância social
- **Descobertas Históricas**: Medicamentos revolucionários que transformaram a medicina (Penicilina, Insulina, Vacinas, etc.)
- **Recursos Compartilhados**: Plataforma para upload e gerenciamento de materiais de pesquisa

## 👥 Equipe Responsável

**Instituição**: Faculdade AlfaUnipac - Aimorés, MG  
**Coordenador**: Juliano Kacio Zorzal  
**Professora Orientadora**: Aline R. Loss  
**Disciplina**: Desenvolvimento Profissional - Vida e Carreira

### Alunos Colaboradores (1º e 2º Períodos - 2026)

- Camilly Ferreira de Sousa
- Carlos Eduardo Silva Andrade
- Vanessa Tomaz Coutinho
- Quezia de Oliveira Souza
- Maria Jackeline Matos Silva de Andrade
- Ludimila Caetano da Silva
- Ana Lídia Costa de Lima
- Leandro Teixeira

## 🚀 Recursos Principais

### Frontend
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Design Elegante**: Filosofia de "Modernismo Científico com Austeridade Elegante"
- **Tipografia Sofisticada**: Playfair Display (títulos) + Lato (corpo)
- **Paleta Profissional**: Azul Marinho, Verde Menta, Cinza Carvão
- **Animações Suaves**: Transições reveladoras e efeitos visuais refinados

### Backend & Funcionalidades
- **Autenticação**: Sistema de login via Manus OAuth
- **Armazenamento de Arquivos**: Upload e gerenciamento de materiais de pesquisa com S3
- **Banco de Dados**: MySQL com schema otimizado para categorização de recursos
- **API tRPC**: Procedures type-safe para todas as operações

### Páginas Implementadas

| Página | Descrição |
|--------|-----------|
| **Home** | Página inicial com hero section, timeline tecnológica, informações sobre o farmacêutico e eixos de pesquisa |
| **Descobertas** | Histórico de 6 descobertas farmacêuticas revolucionárias com impacto global |
| **Recursos** | Plataforma para upload, listagem e download de materiais de pesquisa |

## 🛠️ Stack Tecnológico

### Frontend
- **React 19** com TypeScript
- **Tailwind CSS 4** para styling
- **Vite** como bundler
- **Wouter** para roteamento
- **Shadcn/UI** para componentes
- **Lucide React** para ícones

### Backend
- **Express 4** para servidor
- **tRPC 11** para API type-safe
- **Drizzle ORM** para gerenciamento de banco de dados
- **MySQL 2** como banco de dados
- **AWS S3** para armazenamento de arquivos

### DevOps & Testing
- **Vitest** para testes unitários
- **Drizzle Kit** para migrações de banco de dados
- **Node.js** com TypeScript

## 📦 Instalação e Setup

### Pré-requisitos
- Node.js 18+ e pnpm 10+
- Conta no GitHub
- Variáveis de ambiente configuradas

### Passos de Instalação

```bash
# 1. Clonar o repositório
git clone https://github.com/AlfaUnipacAimores/framaciapesquisa.git
cd framaciapesquisa

# 2. Instalar dependências
pnpm install

# 3. Configurar variáveis de ambiente
# Copie o arquivo .env.example para .env e preencha as variáveis necessárias
cp .env.example .env

# 4. Sincronizar banco de dados
pnpm db:push

# 5. Iniciar servidor de desenvolvimento
pnpm dev
```

O servidor estará disponível em `http://localhost:3000`

## 📝 Variáveis de Ambiente

As seguintes variáveis de ambiente são necessárias:

```env
# Banco de Dados
DATABASE_URL=mysql://user:password@host:port/database

# Autenticação
JWT_SECRET=your_jwt_secret_key
VITE_APP_ID=your_app_id
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://portal.manus.im

# Armazenamento S3
AWS_S3_BUCKET=your_bucket_name
AWS_REGION=us-east-1

# Informações do Proprietário
OWNER_NAME=AlfaUnipac Aimorés
OWNER_OPEN_ID=your_owner_id
```

## 🧪 Testes

```bash
# Executar todos os testes
pnpm test

# Executar testes em modo watch
pnpm test:watch

# Gerar cobertura de testes
pnpm test:coverage
```

## 🏗️ Estrutura do Projeto

```
farmacia-memorial-site/
├── client/                    # Frontend React
│   ├── public/               # Arquivos estáticos
│   ├── src/
│   │   ├── pages/            # Páginas (Home, Descobertas, Recursos)
│   │   ├── components/       # Componentes reutilizáveis
│   │   ├── lib/              # Utilitários e configurações
│   │   ├── contexts/         # React Contexts
│   │   ├── App.tsx           # Roteamento principal
│   │   └── index.css         # Estilos globais
│   └── index.html
├── server/                    # Backend Express + tRPC
│   ├── routers.ts            # Definição de procedures tRPC
│   ├── db.ts                 # Funções de banco de dados
│   ├── storage.ts            # Integração S3
│   └── _core/                # Configurações internas
├── drizzle/                   # Schema e migrações de banco de dados
│   ├── schema.ts             # Definição das tabelas
│   └── migrations/           # Histórico de migrações
├── shared/                    # Código compartilhado
├── package.json
└── README.md
```

## 🚀 Deployment

### Opção 1: Manus (Recomendado)
O projeto está otimizado para deployment no Manus. Clique no botão "Publish" na interface de gerenciamento.

**URL de Acesso**: `https://farmaceutico-zrig5uod.manus.space`

### Opção 2: Vercel
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Opção 3: Railway
```bash
# Instalar Railway CLI
npm i -g @railway/cli

# Deploy
railway up
```

## 📱 Acesso via QR Code

O site foi otimizado para acesso rápido via QR Code. Você pode gerar um QR Code apontando para:
- **URL Manus**: `https://farmaceutico-zrig5uod.manus.space`
- **URL GitHub Pages** (após configuração): `https://alfaunipacaimores.github.io/framaciapesquisa`

## 🔗 Links Importantes

- **Site Oficial da AlfaUnipac**: https://www.unipacaimores.com.br/cursos/farmacia
- **Instagram**: https://www.instagram.com/unipacaimores/
- **Facebook**: https://www.facebook.com/UnipacAimores/
- **WhatsApp**: +55 (33) 99989-8904

## 📚 Funcionalidades Detalhadas

### 1. Página Home
- Hero section com imagem de laboratório profissional
- Timeline interativa da evolução tecnológica
- Seção sobre o papel do farmacêutico
- Cards com eixos temáticos de pesquisa
- Informações institucionais e equipe
- Links de redes sociais funcionais

### 2. Página Descobertas
- 6 medicamentos revolucionários com histórico completo
- Informações sobre descobridores e prêmios
- Aplicações clínicas de cada medicamento
- Estatísticas de impacto global
- CTA para voltar à página inicial

### 3. Página Recursos
- Upload autenticado de arquivos de pesquisa
- Categorização de materiais (pesquisa, didático, ensaios clínicos)
- Listagem pública de recursos
- Download direto via S3
- Gerenciamento de arquivos para administradores

## 🎨 Customização

### Alterar Cores
Edite as variáveis CSS em `client/src/index.css`:

```css
@theme {
  --color-primary: #1e3a8a;      /* Azul Marinho */
  --color-accent: #10b981;       /* Verde Menta */
  --color-secondary: #374151;    /* Cinza Carvão */
}
```

### Alterar Tipografia
Modifique as fontes em `client/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato:wght@400;700&display=swap" rel="stylesheet">
```

## 🤝 Contribuindo

Para contribuir com melhorias:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte e Contato

Para dúvidas ou sugestões sobre o projeto:

- **WhatsApp**: +55 (33) 99989-8904
- **Email**: contato@unipacaimores.com.br
- **Instagram**: @unipacaimores

## 🙏 Agradecimentos

Agradecemos especialmente à Professora Aline R. Loss pela orientação e ao Coordenador Juliano Kacio Zorzal pelo suporte durante o desenvolvimento deste projeto.

---

**Desenvolvido com ❤️ pelos alunos do curso de Farmácia - AlfaUnipac Aimorés**

*Última atualização: Abril de 2026*
