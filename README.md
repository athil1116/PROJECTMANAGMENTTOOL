# 📋 Project Management Tool

A simple beginner-level Project Management Tool built using **React**, **Express.js**, **MongoDB (Compass)**, and **Bootstrap**. It allows users to register, log in, and manage their projects using an intuitive and responsive UI.

## 🚀 Features

- User Registration & Login
- Dashboard with Navigation
- Create, Read, Update, Delete (CRUD) for Projects
- Form view to add/edit projects
- List view to display projects
- Responsive UI with Bootstrap

## 🛠️ Technologies Used

| Technology     | Description                                |
|----------------|--------------------------------------------|
| React          | Frontend UI Library                        |
| Express.js     | Backend Framework (Node.js)                |
| MongoDB        | NoSQL Database (used via MongoDB Compass)  |
| Bootstrap      | For UI Styling and Responsive Layouts      |
| Vite           | Frontend build tool (React app)            |

## 📁 Project Structure


## ⚙️ How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/project-management-tool.git


#Set Up Backend (Express + MongoDB)
cd project-management-tool
cd server
npm install

##Create a .env file in the server/ directory:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
PORT=5000

##Run the backend server:

bash
Copy
Edit
node server.js
Make sure MongoDB Compass is running and connected to the correct database.

## Set Up Frontend (React)
bash
Copy
Edit
cd ../client
npm install
npm run dev
The app will start at http://localhost:5173.

🔐 Authentication
Basic user login and registration are implemented using Express and MongoDB. You can expand this with JWT authentication or session-based login in the future.

📸 Screenshots




![Screenshot 2025-07-02 184043](https://github.com/user-attachments/assets/3bdfde29-f679-482a-bf07-a221ebf4ace6)

![Screenshot 2025-07-02 184120](https://github.com/user-attachments/assets/e8209801-dacb-4cb2-85db-08ec808d3faa)



📚 Future Improvements
Add JWT Authentication

Assign due dates and priority to projects

Add user roles and permissions

Mobile responsiveness improvements

