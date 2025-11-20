# NextStore E-Commerce

**[🇧🇷 Português]**

**NextStore** é uma aplicação full-stack de e-commerce que simula uma experiência de compra moderna e um sistema de gerenciamento de inventário. O projeto foi desenvolvido para integrar uma API robusta em Java com um frontend reativo de alta performance.

### ✨ Funcionalidades

* **Loja Virtual (Storefront):** Catálogo de produtos responsivo com UI moderna (Dark Mode).
* **Carrinho de Compras:** Gerenciamento de estado em tempo real (adicionar/remover itens, cálculo automático de totais).
* **Dashboard Administrativo:** Área restrita para gerenciamento de estoque.
* **CRUD de Produtos:** Criar, Listar, Editar e Deletar produtos diretamente no banco de dados.
* **Interface Premium:** Componentes visuais avançados utilizando Aceternity UI e Tailwind CSS.

### 💻 Tecnologias Utilizadas

* **Backend:** Spring Boot (Java)
* **Frontend:** Next.js / TypeScript / Aceternity UI
* **Banco de Dados:** Oracle DB

### 📋 Pré-requisitos

* Java (JDK 17+) instalado.
* Node.js e npm instalados.
* Acesso a uma instância de banco de dados Oracle (ou Oracle XE local).
* Configuração das variáveis de ambiente (application.properties) para conexão com o banco.

### 🚀 Como Rodar o Projeto

Para rodar a aplicação, você precisará iniciar o backend e o frontend separadamente.

**1. Backend (Spring Boot)**

1.  Clone o repositório e navegue até a pasta do backend.
2.  Certifique-se de que as credenciais do Oracle DB estão configuradas corretamente no `application.properties`.
3.  Execute o comando:
    ```bash
    ./mvnw spring-boot:run
    ```

**2. Frontend (Next.js)**

1.  Abra um novo terminal e navegue até a pasta do frontend.
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Rode a aplicação localmente (geralmente em http://localhost:3000):
    ```bash
    npm run dev
    ```

### 🛠️ Como Usar a Aplicação

1.  **Loja:** Acesse a página inicial para navegar pelos produtos. Use o botão "Add to Cart" para simular uma compra.
2.  **Dashboard:** Acesse a rota `/dashboard` (ou clique no link no menu) para visualizar a tabela de estoque.
    * Use o botão **"Add New Product"** para inserir itens no banco.
    * Use os botões **"Edit"** ou **"Delete"** na tabela para gerenciar itens existentes.

### ⚠️ Status do Projeto

Este é um projeto acadêmico/portfólio desenvolvido para fins educacionais e de demonstração técnica.

### 📄 Licença

Este projeto está licenciado sob a Licença MIT.

---

**[🇬🇧 English]**

**NextStore** is a full-stack e-commerce application that simulates a modern shopping experience alongside an inventory management system. The project was developed to demonstrate the integration of a robust Java backend with a high-performance reactive frontend.

### ✨ Features

* **Storefront:** Responsive product catalog with a modern UI (Dark Mode).
* **Shopping Cart:** Real-time state management (add/remove items, automatic total calculation).
* **Admin Dashboard:** Restricted area for inventory management.
* **Product CRUD:** Create, Read, Update, and Delete products directly in the database.
* **Premium UI:** Advanced visual components using Aceternity UI and Tailwind CSS.

### 💻 Tech Stack

* **Backend:** Spring Boot (Java)
* **Frontend:** Next.js / TypeScript / Aceternity UI
* **Database:** Oracle DB

### 📋 Prerequisites

* Java (JDK 17+) installed.
* Node.js and npm installed.
* Access to an Oracle Database instance (or local Oracle XE).
* Environment variables configuration (application.properties) for database connection.

### 🚀 How to Run the Project

To run the application, you need to start the backend and frontend separately.

**1. Backend (Spring Boot)**

1.  Clone the repository and navigate to the backend folder.
2.  Ensure Oracle DB credentials are correctly set in `application.properties`.
3.  Run the command:
    ```bash
    ./mvnw spring-boot:run
    ```

**2. Frontend (Next.js)**

1.  Open a new terminal and navigate to the frontend folder.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the application locally (usually at http://localhost:3000):
    ```bash
    npm run dev
    ```

### 🛠️ How to Use the Application

1.  **Store:** Access the home page to browse products. Use the "Add to Cart" button to simulate a purchase.
2.  **Dashboard:** Access the `/dashboard` route (or click the menu link) to view the stock table.
    * Use the **"Add New Product"** button to insert items into the database.
    * Use the **"Edit"** or **"Delete"** buttons in the table to manage existing items.

### ⚠️ Project Status & Disclaimer

This is an academic/portfolio project developed for educational and technical demonstration purposes.

### 📄 License

This project is licensed under the MIT License.
