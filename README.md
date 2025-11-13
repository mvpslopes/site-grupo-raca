# Site Grupo Raça

Site institucional do Grupo Raça - Especialistas em leilões de cavalos de elite.

## 🚀 Tecnologias

- React + TypeScript
- Vite
- Tailwind CSS
- Supabase
- Lucide React (ícones)

## 📦 Instalação

```bash
npm install
```

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-aqui
```

### Deploy no Vercel

1. Conecte seu repositório GitHub ao Vercel
2. Configure as seguintes variáveis de ambiente no painel do Vercel:
   - `VITE_SUPABASE_URL` - URL do seu projeto Supabase
   - `VITE_SUPABASE_ANON_KEY` - Chave anônima do Supabase

3. O Vercel detectará automaticamente o framework (Vite) e fará o deploy

## 🎨 Design

O site utiliza um design moderno com tema preto e metálico, mantendo a identidade visual da marca.

## 📄 Estrutura

- `/src/pages` - Páginas do site
- `/src/components` - Componentes reutilizáveis
- `/src/lib` - Configurações e utilitários
- `/public` - Arquivos estáticos (imagens, logo)

## 🐴 Funcionalidades

- Página inicial com hero section e eventos
- Shopping de Coberturas
- Venda Direta
- Assessorias Técnicas
- Previsão do Tempo
- Contato e cadastro
