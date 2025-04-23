# Estrutura de Pastas - Projeto Next.js

Organização padrão profissional para sistemas grandes e modulares.

## Estrutura Principal

---

## Descrição Rápida

- **/components/ui** → Componentes atômicos reutilizáveis (Button, Label, Modal, etc).
- **/components/layouts** → Layouts de páginas (AdminLayout, AuthLayout, etc).
- **/components/common** → Componentes compartilhados como Navbar e Sidebar.
- **/features** → Componentes específicos de cada módulo do sistema.
- **/services** → Funções de requisições API separadas por módulo.
- **/hooks** → Hooks customizados para consumir serviços ou manipular estados.
- **/lib** → Funções auxiliares (utils, validators, etc).
- **/types** → Definições de tipos e interfaces do TypeScript.
- **/constants** → Constantes usadas no projeto (rotas fixas, mensagens padrões).
- **/styles** → Estilos globais ou customizações de framework CSS.
- **/middlewares** → Proteção de rotas ou lógicas de autenticação client-side (opcional).
- **/contexts** → Contextos React (autenticação, tema, etc).

---

## Observações

- Cada `/page.tsx` apenas importa e renderiza o componente da página real (`DepartamentoPage`, `ClientePage`, etc).
- Layouts e componentes reutilizáveis ficam separados dos componentes de regra de negócio.
- Organização baseada no conceito de "Feature Driven Development" (FDD) + separação limpa de responsabilidades.

---

> 📌 Manter o projeto organizado desde o início é o que separa o programador raiz do programador suado.

