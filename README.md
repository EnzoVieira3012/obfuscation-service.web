# 🛡️ Obfuscation Service - Frontend

## 📋 Descrição
Frontend Angular para serviço de ofuscação/criptografia de IDs numéricos. Interface profissional com autenticação e operações de criptografia/descriptografia em tempo real.

## 🚀 Funcionalidades
- ✅ **Autenticação segura** - Sistema de login protegido
- ✅ **Criptografia de IDs** - Transforma IDs numéricos em strings ofuscadas
- ✅ **Descriptografia** - Recupera IDs originais a partir das strings ofuscadas
- ✅ **Interface responsiva** - Design adaptável para diferentes dispositivos
- ✅ **Tema escuro profissional** - Interface visual moderna e elegante
- ✅ **Feedback em tempo real** - Status das operações visível ao usuário

## 🔐 Credenciais de Acesso
```
Usuário: admin
Senha: admin123
```

## 🛠️ Tecnologias
- **Angular 21** - Framework principal
- **TypeScript** - Linguagem de desenvolvimento
- **RxJS** - Programação reativa
- **CSS3** - Estilização moderna
- **HTML5** - Estrutura semântica

## 📁 Estrutura do Projeto
```
src/
├── app/
│   ├── app.css              # Estilos principais
│   ├── app.html             # Template HTML
│   ├── app.ts               # Componente principal
│   ├── app.config.ts        # Configuração Angular
│   ├── auth.service.ts      # Serviço de autenticação
│   └── obfuscation.service.ts # Serviço de ofuscação
├── index.html               # Página inicial
├── main.ts                  # Bootstrap da aplicação
└── styles.css               # Estilos globais
```

## 🔧 Configuração e Execução

### Pré-requisitos
- Node.js 18+
- npm 10.8+
- Angular CLI 21.1+

### Instalação
```bash
# Clone o repositório
git clone [<repositório>](https://github.com/EnzoVieira3012/obfuscation-service.web.git)

# Instale as dependências
npm install

# Execute a aplicação
npm start
```

### Build para produção
```bash
npm run build
```

## 🌐 API Endpoints
A aplicação se conecta automaticamente aos seguintes endpoints:

### Local (desenvolvimento)
```
http://localhost:5047/api/obfuscation/encrypt/{id}
http://localhost:5047/api/obfuscation/decrypt/{value}
```

### Produção (fallback)
```
https://obfuscation-service-api.onrender.com/api/obfuscation/encrypt/{id}
https://obfuscation-service-api.onrender.com/api/obfuscation/decrypt/{value}
```

## 🎨 Design
- **Tema**: Escuro absoluto (#000000)
- **Cores principais**:
  - Laranja (#ff6b00) - Ações primárias
  - Azul (#2196f3) - Descriptografia
  - Vermelho (#f44336) - Logout/erros
- **Tipografia**: Segoe UI com hierarquia clara
- **Responsividade**: Adaptado para mobile e desktop

## ⚙️ Funcionamento da Interface

### Fluxo de Criptografia
1. Digite um ID numérico no campo superior
2. Clique em "🔒 Criptografar"
3. O resultado aparece automaticamente no campo inferior
4. O campo inferior fica destacado em laranja

### Fluxo de Descriptografia
1. Cole uma string ofuscada no campo inferior
2. Clique em "🔓 Decriptografar"
3. O resultado aparece automaticamente no campo superior
4. Status de operação é exibido temporariamente

## 🔒 Segurança
- Autenticação via localStorage
- Credenciais hardcoded somente para demonstração
- Todas as requisições são HTTP GET
- Fallback automático entre ambientes

## 📱 Responsividade
- Desktop: Layout otimizado para telas largas
- Mobile: Adaptação automática para telas menores
- Touch-friendly: Botões e inputs dimensionados para toque

## 🐛 Solução de Problemas

### Problema: "Credenciais inválidas"
- Verifique se está usando `admin` / `admin123`
- Limpe o localStorage do navegador

### Problema: Erro de conexão com API
- Verifique se o servidor backend está rodando
- Confira a conexão com a internet
- A aplicação tentará automaticamente o endpoint de produção

### Problema: Interface não atualiza
- Recarregue a página (F5)
- Limpe o cache do navegador

## 📄 Licença
Este projeto é destinado para uso interno e demonstração.

## 👥 Manutenção
- **Desenvolvedor**: Enzo V.
- **Stack**: Angular + TypeScript
- **Última atualização**: Janeiro 2026

---

**Nota**: Esta aplicação é uma ferramenta administrativa para manipulação segura de IDs através de ofuscação. Mantenha as credenciais protegidas em ambiente de produção.