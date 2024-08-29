# Dev-Store

Dev-Store é um projeto de e-commerce desenvolvido com Next.js, TypeScript, Tailwind CSS e Cypress para testes end-to-end (e2e). A aplicação permite visualizar produtos, adicionar itens ao carrinho e realizar pesquisas por produtos. Além disso, o projeto inclui uma API interna para gerenciamento das rotas, casos de uso e regras de negócio.

## Tecnologias Utilizadas

- Next.js: Framework React para desenvolvimento web com renderização no lado do servidor (SSR) e geração de páginas estáticas (SSG).
- TypeScript: Superconjunto do JavaScript que adiciona tipagem estática e outros recursos avançados ao desenvolvimento.
- Tailwind CSS: Framework de CSS utilitário para estilização rápida e eficiente.
- Cypress: Ferramenta de testes end-to-end para aplicações web.

### Funcionalidades

- Visualização de Produtos: Exibe uma lista de produtos disponíveis para compra.
- Carrinho de Compras: Permite adicionar produtos ao carrinho e gerenciar a quantidade.
- Pesquisa de Produtos: Funcionalidade de busca para encontrar produtos por nome ou descrição.
- API Interna: Implementação de rotas e regras de negócio utilizando as funcionalidades de API do Next.js.

### Estrutura do Projeto

```bash
dev-store/
├── .next/
├── cypress/
│   ├── e2e/
│   │   └── add-product-to-cart.cy.ts
│   ├── fixtures/
│   │   └── example.json
│   └── support/
│       ├── commands.ts
│       └── e2e.ts
├── node_modules/
├── public/
├── src/
│   ├── app/
│   ├── components/
│   ├── context/
│   ├── data/
│   └── env.ts
├── .env.local
├── .eslintrc.json
├── .gitignore
├── cypress.config.ts
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

### Pré-requisitos

- Node.js: Versão 14 ou superior
- Yarn: Gerenciador de pacotes (opcional, mas recomendado)

### Instalação

- Clone o repositório:

```bash
Copiar código
git clone https://github.com/Adriano-Henrique275/dev-store
cd dev-store
```

### Instale as dependências

```bash
npm install
# ou
yarn install
```

### Inicie o servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

- A aplicação estará disponível em `http://localhost:3000`

#### Scripts Disponíveis

- dev: Inicia o servidor de desenvolvimento.
- build: Compila a aplicação para produção.
- start: Inicia o servidor em produção após o build.
- test:e2e: Executa os testes end-to-end com Cypress.
- lint: Executa a verificação de linting do código.

#### Testes

> O projeto utiliza Cypress para testes e2e. Para executar os testes:

#### Inicie a aplicação

```bash
npm run dev
# ou
yarn dev
```

> Em outra aba do terminal, execute os testes:

```bash
npm run test:e2e
# ou
yarn test:e2e
```

- Os testes serão executados em modo interativo com o Cypress.

##### Contribuindo

> Se você deseja contribuir com o projeto, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma nova branch (git checkout -b minha-nova-feature).
3. Faça as alterações necessárias e commit (git commit -m 'Adiciona nova feature').
4. Envie para o repositório remoto (git push origin minha-nova-feature).
5. Abra um Pull Request.

#### Licença

- Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

Feito com ❤️ por Adriano Henrique
