# 📘 Git Commit Viewer

A Git commit diff viewer that displays and compares commit changes efficiently using a well-structured frontend and backend. Built with **React, Material-UI, Node.js, and Express, Typescript**.
.

## ⚙️ **Setup Instructions**
### 1. 📥 Clone the Repository
```bash
git clone 
```

### 2. 📂 Navigate to  Folder
```bash
cd git-diff-app
```

### 3. 📦 Install Dependencies
```bash
npm run install:all
```
---

## 📚 **Environment Variables**
Create a `.env` file in the git-diff-app/backend directory:
```
GITHUB_API_BASE_URL=https://api.github.com
GITHUB_ACCESS_TOKEN=
PORT=5000
```

### 4. ⚡ Start the Server
```bash
npm run start:backend
```
at root of the project
The server will be available at [http://localhost:5000](http://localhost:5000).

---

### 5. ▶️ Run the Application
```bash
npm run start:frontend
```
at root of project
The application will be available at [http://localhost:3000](http://localhost:3000).

### 6. Results
- Open the link consisting of ownername, repo, and commitId Ex: `http://localhost:3000/repositories/golemfactory/clay/commit/a1bf367b3af680b1182cc52bb77ba095764a11f9` to view the results you can also navigate to parent commit history as well by clicking on Parent link.

---

## 🚀 **Features**
- View and compare code changes in a GitHub-like UI.
- Expand and collapse diff sections for better readability.
- Syntax highlighting and visual representation of added/removed lines.
- Commit metadata display with author, timestamp, and parent commits.

---

## 🛠️ **Tech Stack**
- **React 18+** - Frontend library.
- **Material-UI (MUI)** - For styling and UI components.
- **TypeScript** - Strongly typed JavaScript.
- **React Router** - Navigation and routing.
- **Axios** - API communication.
- **GitHub API** - For fetching commit and diff data.

---


## 🎯 **API Routes**
| Method | Endpoint          | Description                |
|--------|-------------------|----------------------------|
| GET    | `/api/commit/:sha` | Fetch commit data          |

---

# 🚀 Git Diff Viewer - Backend

This is the backend service for the **Git Diff Viewer** application. It is built using **Node.js, Express, Typescript**, and integrates with the **GitHub Token** to fetch commit and diff data.

---

## ⚙️ **Features**
- Fetch commit metadata and file diffs using GitHub API.
- Handle requests for viewing commit history and diffs.

---

## 🛠️ **Tech Stack**
- **Node.js** - JavaScript runtime.
- **Express.js** - Web framework for handling REST APIs.
- **Axios** - API communication with GitHub.
- **TypeScript** - Strongly typed JavaScript.

---

## 📧 **Contact**
For any questions or feedback, please reach out to [shreyanshjain2053@gmail.com](mailto:shreyanshjain2053@gmail.com).

