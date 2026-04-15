# 🤝 Guia de Contribuição

Obrigado por considerar contribuir para os projetos da AlfaUnipac Aimorés! Este documento fornece diretrizes e instruções para contribuir de forma efetiva.

## 📋 Código de Conduta

Todos os contribuidores devem seguir nosso [Código de Conduta](./CODE_OF_CONDUCT.md). Esperamos comportamento profissional, respeitoso e inclusivo em todas as interações.

## 🚀 Como Começar

### Pré-requisitos
- Git instalado e configurado
- Node.js 18+ e pnpm 10+
- Conta no GitHub
- Familiaridade com Git e GitHub workflow

### Setup Local

```bash
# 1. Fork o repositório
# Clique no botão "Fork" na página do repositório

# 2. Clone seu fork
git clone https://github.com/seu-usuario/framaciapesquisa.git
cd framaciapesquisa

# 3. Adicione o repositório original como upstream
git remote add upstream https://github.com/AlfaUnipacAimores/framaciapesquisa.git

# 4. Instale as dependências
pnpm install

# 5. Crie uma branch para sua feature
git checkout -b feature/sua-feature-aqui
```

## 📝 Processo de Contribuição

### 1. Identifique uma Issue ou Crie uma Nova

- Procure por issues abertas que você possa ajudar
- Se não encontrar uma issue relacionada ao seu trabalho, crie uma nova descrevendo:
  - O problema ou feature que você quer implementar
  - Por que é importante
  - Sua abordagem proposta

### 2. Faça o Desenvolvimento

**Padrões de Código:**

- Use TypeScript para todo o código novo
- Siga o estilo de código existente
- Escreva código limpo e bem documentado
- Use nomes descritivos para variáveis e funções
- Adicione comentários para lógica complexa

**Commits:**

```bash
# Use commits semânticos
git commit -m "feat: adicionar nova funcionalidade"
git commit -m "fix: corrigir bug na autenticação"
git commit -m "docs: atualizar README"
git commit -m "test: adicionar testes para nova feature"
git commit -m "refactor: melhorar estrutura do código"
```

**Tipos de Commit:**
- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Alterações na documentação
- `test:` Adição ou alteração de testes
- `refactor:` Refatoração de código
- `perf:` Melhorias de performance
- `chore:` Alterações em configuração ou dependências

### 3. Testes

```bash
# Execute os testes localmente
pnpm test

# Verifique a cobertura de testes
pnpm test:coverage

# Execute testes em modo watch
pnpm test:watch
```

**Diretrizes de Testes:**
- Escreva testes para toda nova funcionalidade
- Mantenha a cobertura de testes acima de 80%
- Use descritores claros nos testes
- Teste casos de sucesso e erro

### 4. Linting e Formatação

```bash
# Verifique o linting
pnpm lint

# Formate o código automaticamente
pnpm format

# Verifique tipos TypeScript
pnpm type-check
```

### 5. Sincronize com o Repositório Principal

```bash
# Busque as mudanças mais recentes
git fetch upstream

# Rebase sua branch com main
git rebase upstream/main

# Se houver conflitos, resolva-os e continue
git rebase --continue
```

### 6. Push e Crie um Pull Request

```bash
# Push sua branch para seu fork
git push origin feature/sua-feature-aqui
```

**No GitHub:**
1. Vá para o repositório original
2. Clique em "New Pull Request"
3. Selecione sua branch
4. Preencha o template do PR com:
   - Descrição clara do que foi implementado
   - Referência à issue relacionada (ex: `Closes #123`)
   - Screenshots (se aplicável)
   - Checklist de verificação

### 7. Code Review

- Responda aos comentários dos reviewers de forma construtiva
- Faça as alterações solicitadas em novos commits
- Não force push após o PR ser aberto (a menos que solicitado)
- Seja paciente - revisões levam tempo

## 📚 Estrutura do Projeto

```
framaciapesquisa/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── pages/         # Páginas principais
│   │   ├── components/    # Componentes reutilizáveis
│   │   └── lib/           # Utilitários
│   └── index.html
├── server/                # Backend Express + tRPC
│   ├── routers.ts         # Definição de procedures
│   ├── db.ts              # Funções de banco de dados
│   └── _core/             # Configurações
├── drizzle/               # Schema e migrações
├── shared/                # Código compartilhado
└── README.md
```

## 🐛 Reportando Bugs

Ao reportar um bug, inclua:

1. **Título descritivo** - Resuma o problema em uma linha
2. **Descrição detalhada** - Explique o comportamento esperado vs. atual
3. **Passos para reproduzir** - Instruções claras e numeradas
4. **Exemplos específicos** - Forneça exemplos concretos
5. **Screenshots/Logs** - Anexe evidências do problema
6. **Ambiente** - Sistema operacional, versão do Node.js, browser, etc.

## 💡 Sugestões de Features

Para sugerir uma nova feature:

1. Use um título descritivo
2. Forneça uma descrição detalhada do comportamento esperado
3. Explique por que essa feature seria útil
4. Liste exemplos de como seria usada
5. Mencione possíveis alternativas

## 📖 Documentação

Ao adicionar novas funcionalidades:

- Atualize o README.md se necessário
- Adicione comentários JSDoc para funções públicas
- Crie/atualize arquivos de documentação
- Inclua exemplos de uso

**Exemplo de JSDoc:**
```typescript
/**
 * Calcula a dosagem recomendada de um medicamento
 * @param weight - Peso do paciente em kg
 * @param age - Idade do paciente em anos
 * @returns Dosagem recomendada em mg
 * @throws {Error} Se os parâmetros forem inválidos
 */
function calculateDosage(weight: number, age: number): number {
  // implementação
}
```

## 🎨 Padrões de Código

### TypeScript
- Use tipos explícitos sempre que possível
- Evite `any`
- Use interfaces para estruturas de dados
- Prefira tipos union a enums

### React
- Use functional components
- Prefira hooks a class components
- Mantenha componentes pequenos e focados
- Use prop types ou TypeScript para validação

### CSS/Tailwind
- Use classes Tailwind em vez de CSS customizado quando possível
- Mantenha a consistência com o design system
- Use variáveis CSS para cores e espaçamento

## 🔄 Workflow de Revisão

1. **Automated Checks**
   - Testes passam
   - Linting passa
   - Cobertura de testes adequada

2. **Code Review**
   - Mínimo 1 aprovação de um maintainer
   - Sem conflitos com a branch main

3. **Merge**
   - Squash commits se necessário
   - Delete branch após merge

## 📞 Suporte

- **Dúvidas?** Abra uma issue com a tag `question`
- **Precisa de ajuda?** Comente em uma issue existente
- **Quer discutir?** Use as Discussions do GitHub

## 🙏 Agradecimentos

Agradecemos sinceramente a todos que contribuem para melhorar nossos projetos! Suas contribuições fazem diferença na formação de profissionais farmacêuticos de excelência.

---

**Última atualização: Abril de 2026**
