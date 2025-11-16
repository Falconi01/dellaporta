# 🚀 Instruções para Deploy no GitHub

## 📋 Pré-requisitos
- Git instalado no sistema
- Conta no GitHub
- Node.js instalado

## 🔧 Configuração do Repositório

### 1. Instalar Git (se necessário)
Baixe e instale o Git: https://git-scm.com/download/windows

### 2. Inicializar Repositório
```bash
git init
git add .
git commit -m "Initial commit: D'LLA PORTA Construtora landing page"
```

### 3. Conectar ao GitHub
```bash
# Substituir 'seu-usuario' e 'nome-do-repositorio' pelos seus dados
git remote add origin https://github.com/seu-usuario/nome-do-repositorio.git
git branch -M main
git push -u origin main
```

## 🌐 Deploy no GitHub Pages

### Opção 1: Deploy Manual
1. Faça o upload da pasta `build/` para o GitHub
2. Vá em Settings > Pages
3. Configure source como "Deploy from a branch"
4. Selecione a branch `main` e pasta `/build`

### Opção 2: Deploy Automático com GitHub Actions
Crie o arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build
```

## 📁 Arquivos Importantes

✅ **Já criados:**
- `.gitignore` - Ignora arquivos desnecessários
- `README.md` - Documentação completa
- `build/` - Arquivos de produção prontos

## 🔄 Atualizações Futuras

Para fazer updates:
```bash
# Fazer suas alterações no código
npm run build          # Gerar nova build
git add .              # Adicionar mudanças
git commit -m "Update: descrição das mudanças"
git push               # Enviar para GitHub
```

## 🎯 URL Final
Após o deploy, seu site estará disponível em:
`https://seu-usuario.github.io/nome-do-repositorio/`

## 📞 Suporte
- Documentação GitHub Pages: https://pages.github.com/
- Documentação Vite: https://vitejs.dev/guide/static-deploy.html