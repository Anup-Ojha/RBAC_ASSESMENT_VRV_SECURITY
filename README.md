
# 🌟 RBAC UI - Role-Based Access Control Dashboard  

## 📌 Overview  

This **Role-Based Access Control (RBAC)** UI is a robust web application designed to simplify user, role, and permission management. It empowers administrators with seamless tools to manage access control dynamically and securely. Built with **Angular** on the frontend and integrated with **MongoDB** for backend storage, it incorporates authentication, CRUD operations, and responsive design principles.  

---

## 🚀 Features  

### 🧑‍🤝‍🧑 User Management  
- ➕ Add, ✏️ Edit, and ❌ Delete users.  
- 🔑 Assign roles and toggle user status (Active/Inactive).  
- 🔒 Secure login system with password encryption.  

### 🔑 Role Management  
- 📝 Create, ✏️ Edit, and ❌ Delete roles.  
- 🛠️ Assign or modify granular permissions (e.g., Read, Write, Delete).  

### 🛡️ Authentication & Security  
- 🔐 User authentication with JWT (JSON Web Tokens).  
- 🗂️ Role-based access ensures users see only authorized content.  

### 📡 Database Integration  
- 💾 Data persistence powered by **MongoDB**.  
- 🤖 Automatic database initialization for new collections (`users`, `roles`, `permissions`).  

### 📱 Responsive Design  
- 🖥️ Optimized for desktop, tablet, and mobile devices for a seamless experience.  

### 🔄 Additional Features  
- 🔍 Powerful search, filtering, and sorting functionality.  
- 📊 Intuitive dashboards with actionable insights.  
- ⚠️ Validation and error handling for better user experience.  

---

## 🛠️ Technologies Used  

### **Frontend**  
- Framework: **Angular**  
- UI: **Bootstrap** + **Custom CSS** for responsive design  

### **Backend**  
- Database: **MongoDB**  
- Authentication: **JWT** with password hashing using **bcrypt**  
- API Development: **Node.js** + **Express.js**  

### **Additional Tools**  
- HTTP Client: **Axios**  
- API Simulation: Mock data for local development  

---

## ⚙️ Installation & Setup  

### Prerequisites  
Ensure the following tools are installed:  
- **Node.js** (v16 or higher)  
- **npm** or **Yarn** for managing dependencies  
- **MongoDB**  

### Setup Steps  

1. **Clone the Repository**  
   ```bash  
   git clone https://github.com/Anup-Ojha/rbac-ui.git  
   cd rbac-ui  
   ```  

2. **Install Dependencies**  
   With **npm**:  
   ```bash  
   npm install  
   ```  
   With **Yarn**:  
   ```bash  
   yarn install  
   ```  

3. **Configure Environment Variables**  
   Create a `.env` file in the root directory with the following keys:  
   ```plaintext  
   MONGO_URI=mongodb://localhost:27017/anup_rbac  
   JWT_SECRET=your_jwt_secret_key  
   ```  

4. **Start the Application**  
   With **npm**:  
   ```bash  
   npm run dev  
   ```  
   With **Yarn**:  
   ```bash  
   yarn start  
   ```  

5. **Admin Setup**  
   - Open the app at `http://localhost:3000`.  
   - Register the first admin with email `vrv@gmail.com` and set a password.  
   - Create additional roles and users for testing.  

---

## 📑 Folder Structure  

```plaintext  
rbac-ui/  
│  
├── src/  
│   ├── assets/              # Static assets  
│   ├── components/          # Reusable UI components  
│   ├── pages/               # Pages like Login, Dashboard, User Management  
│   ├── services/            # Backend API interaction services  
│   ├── store/               # State management  
│   ├── App.js               # Application root  
│   └── index.js             # Main entry point  
│  
├── backend/  
│   ├── config/              # MongoDB and environment configuration  
│   ├── models/              # User, Role, and Permission schemas  
│   ├── routes/              # REST API routes  
│   └── server.js            # Backend server entry point  
│  
├── public/  
│   └── index.html           # Main HTML file  
│  
├── .gitignore               # Git ignore file  
├── package.json             # Project metadata and dependencies  
└── README.md                # Project README file  
```  

---

## 📡 API Endpoints  

### **User Routes**  
- `GET /api/users` - Fetch all users.  
- `POST /api/users` - Add a new user.  
- `PUT /api/users/{id}` - Update user details.  
- `DELETE /api/users/{id}` - Delete a user.  

### **Role Routes**  
- `GET /api/roles` - Fetch all roles.  
- `POST /api/roles` - Add a new role.  
- `PUT /api/roles/{id}` - Update role details.  
- `DELETE /api/roles/{id}` - Delete a role.  

### **Authentication Routes**  
- `POST /api/auth/login` - Authenticate and obtain a JWT.  

---

## 🔐 Security Practices  

- **Password Security**: Passwords are encrypted using **bcrypt**.  
- **Token Validation**: JWT ensures secure session management.  
- **Error Handling**: Comprehensive error messages for a smooth user experience.  

---

## 🧪 Testing  

Run automated tests:  
```bash  
npm test  
```  

---

## 🚀 Deployment  

1. Build the production-ready app:  
   ```bash  
   npm run build  
   ```  
2. Deploy the `build/` folder to a hosting service like **Vercel**, **Netlify**, or your custom server.  
3. Ensure the backend server is live and accessible via the configured `MONGO_URI`.  

---

## 👨‍💻 Contributing  

Contributions are always welcome! Fork the repository, implement your changes, and create a pull request.  

---

## 📧 Contact  

📩 **Email**: anup2001ojha@gmail.com  
🐙 **GitHub**: [Anup-Ojha](https://github.com/Anup-Ojha)  
