# 🕶️ Smart Glass Factory

Aplicação desenvolvida como parte do projeto **Desafio Indústria 4.0** do curso Técnico em Desenvolvimento de Sistemas (4ª Fase – SENAI).  
O sistema simula uma **linha de produção automatizada** para personalização de óculos inteligentes, utilizando tecnologias modernas de **Front-End, Back-End e IoT**.

---

## 🚀 Objetivo do Projeto

Criar uma aplicação que permita ao usuário **customizar um produto (óculos)** com base em **cinco características diferentes**, e acompanhar em tempo real o **status da produção**, simulando o funcionamento de uma **bancada Smart 4.0** conectada via HTTP.

---

## 🧩 Tecnologias Utilizadas

### 🔹 Front-End
- **Next.js (React Framework)**
- **TypeScript**
- **Axios** – comunicação com a API
- **CSS Modules / Tailwind / Material UI** (opcional)
- **Fetch API**

### 🔹 Back-End
- **Node.js + Express**
- **Prisma ORM**
- **PostgreSQL**
- **Docker** (para conteinerização)
- **Railway / AWS** (para implantação)
- **RESTful API**

---

## 🧠 Funcionalidades Principais

| Funcionalidade | Descrição |
|----------------|------------|
| 🧱 Customização de Óculos | O usuário escolhe modelo, lente, cor, material e tamanho |
| 📦 Envio de Pedido | As informações são enviadas para o servidor via API REST |
| ⚙️ Integração IoT | O back-end simula o envio das ordens para a bancada inteligente |
| 📊 Status do Pedido | O sistema exibe o progresso da fabricação (Em produção, Finalizado, etc.) |
| 🖥️ Listagem de Pedidos | Painel administrativo para visualizar todos os pedidos criados |

---

## 📁 Estrutura de Pastas

app/
├─ layout.tsx # Layout principal (Navbar + Footer + conteúdo)
├─ page.tsx # Página inicial (Landing Page)
├─ customizar/
│ └─ page.tsx # Página de personalização de óculos
├─ pedidos/
│ └─ page.tsx # Lista de pedidos do cliente
├─ admin/
│ ├─ page.tsx # Área administrativa (produtos, botões)
│ └─ novoProduto.tsx # Cadastro de novos produtos
globals.css # Estilos globais
components/
├─ HeroSection.tsx # Banner animado da página inicial
├─ CarouselProdutos.tsx# Carrossel de produtos
├─ CustomizadorProduto.tsx # Formulário de personalização
├─ ListaPedidos.tsx # Tabela de pedidos
├─ Navbar.tsx # Barra de navegação
├─ ProductCard.tsx # Cartão de produto reutilizável
public/
├─ imagens e ícones # Arquivos estáticos (ex.: oculos-hero.jpg, logo.png)
node_modules/ # Dependências do projeto (gerado pelo npm)
.next/ # Build do Next.js (gerado automaticamente)