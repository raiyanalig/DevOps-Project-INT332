# RebalancePro Portfolio Rebalancing Application

A full-stack web application that compares a client’s mutual fund portfolio against a model portfolio and generates automated portfolio rebalancing recommendations.

---

## 🚀 Features

- Portfolio comparison with model portfolio
- Automated rebalancing calculations
- REST API integration
- Responsive frontend UI
- SQLite database integration
- Docker containerization
- Jenkins CI/CD pipeline automation
- GitHub integration for version control

---

## 🛠️ Tech Stack

### Frontend
- React 18
- Tailwind CSS

### Backend
- Node.js
- Express.js
- better-sqlite3

### Database
- SQLite

### DevOps
- Docker
- Docker Compose
- Jenkins
- GitHub

---

## 📂 Project Structure

```bash
RebalancePro/
│
├── frontend/          # React frontend
├── backend/           # Node.js backend
├── docker-compose.yml
├── Jenkinsfile
├── README.md
└── package.json
```

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone <your-repository-url>
cd RebalancePro
```

---

### 2. Backend Setup

```bash
cd backend
npm install
npm start
```

Backend runs on:

```bash
http://localhost:5000
```

---

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## 🐳 Docker Setup

### Build & Run Containers

```bash
docker-compose up --build
```

### Stop Containers

```bash
docker-compose down
```

---

## 🔄 Jenkins CI/CD Pipeline

The project includes Jenkins-based CI/CD automation for continuous integration and deployment.

### Pipeline Workflow

1. GitHub code push
2. Jenkins pipeline trigger
3. Dependency installation
4. Docker image build
5. Container deployment
6. Deployment verification

---

## 📌 Jenkins Pipeline Stages

- Clone Repository
- Install Dependencies
- Build Docker Images
- Run Containers
- Verify Deployment

---

## 🧪 Testing

The application was tested for:

- API response validation
- Frontend rendering
- Backend functionality
- Docker container execution
- CI/CD pipeline execution
- Deployment verification

---

## 📈 Implementation Outcome

- Automated deployments
- Faster build cycles
- Reduced manual deployment effort
- Improved deployment reliability
- Containerized deployment architecture

---

## 🔮 Future Improvements

- Kubernetes integration
- AWS/Azure deployment
- Monitoring with Prometheus & Grafana
- SonarQube integration
- Security vulnerability scanning
- Blue-Green deployment strategy

---

## 👨‍💻 Author

**Raiyan Ali**

---

## 📚 References

- Jenkins Documentation
- Docker Documentation
- React Documentation
- Node.js Documentation
- Express.js Documentation
- SQLite Documentation
- GitHub Documentation
