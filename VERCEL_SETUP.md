# Configuração no Vercel

## ⚠️ Variáveis de Ambiente Obrigatórias

Para o site funcionar corretamente no Vercel, você precisa configurar as seguintes variáveis de ambiente:

### 1. Acesse o Painel do Vercel

1. Vá para [vercel.com](https://vercel.com)
2. Selecione seu projeto `site-grupo-raca`
3. Vá em **Settings** → **Environment Variables**

### 2. Adicione as Variáveis

Adicione as seguintes variáveis de ambiente:

| Nome da Variável | Descrição | Onde encontrar |
|-----------------|-----------|----------------|
| `VITE_SUPABASE_URL` | URL do seu projeto Supabase | Dashboard do Supabase → Settings → API → Project URL |
| `VITE_SUPABASE_ANON_KEY` | Chave pública (anon) do Supabase | Dashboard do Supabase → Settings → API → anon public key |

### 3. Exemplo de Valores

```
VITE_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4eHh4eHh4eHh4eHh4eHgiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTY0NTE5MjAwMCwiZXhwIjoxOTYwNzY4MDAwfQ.xxxxxxxxxxxxx
```

### 4. Redeploy

Após adicionar as variáveis:
1. Vá em **Deployments**
2. Clique nos três pontos (⋯) do último deployment
3. Selecione **Redeploy**

Ou faça um novo commit para acionar um novo deploy automaticamente.

## 🔍 Como Obter as Credenciais do Supabase

1. Acesse [supabase.com](https://supabase.com)
2. Faça login na sua conta
3. Selecione seu projeto (ou crie um novo)
4. Vá em **Settings** (ícone de engrenagem) → **API**
5. Copie:
   - **Project URL** → use como `VITE_SUPABASE_URL`
   - **anon public** key → use como `VITE_SUPABASE_ANON_KEY`

## ✅ Verificação

Após configurar, o site deve funcionar sem erros. Se ainda houver problemas, verifique:
- Se as variáveis estão escritas corretamente (sem espaços extras)
- Se o redeploy foi feito após adicionar as variáveis
- Se as credenciais do Supabase estão corretas

