# PowerOfAum - Module H: Admin Metrics Dashboard

## Candidate Submission

**Module:** H - Admin Metrics  
**Candidate:** Hashim K
**Company:** Alatree Ventures

---

## 🌟 Live Demo

- **🔗 Live App:** [View Staging](candidate-00-x-powerofaum-module-me-ten.vercel.app/api/platform-commission-metrics)
- **📊 API Base URL:** `candidate-00-x-powerofaum-module-me-ten.vercel.app`

---

## 📋 Project Summary

This is a backend module designed for **PowerOfAum**—a private SaaS platform focused on spiritual ecosystems. The module provides RESTful API endpoints to track and retrieve key business metrics including:

- Platform commission and revenue data
- User engagement metrics
- Subscription analytics
- Add-on sales tracking
- Pro trial conversions

The system is built with Node.js and Express, featuring a mock database service for demonstration purposes.

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Access the API**
   - Server will be running on `http://localhost:3000`
   - API endpoints available at `http://localhost:3000/api/*`

---

## 📁 Project Structure

```
powerofaum-admin-metrics/
├── DB/
│   └── mock-db-service.js     # Mock database service with sample data
├── server.js                  # Main Express server configuration
├── package.json              # Project dependencies and scripts
├── .gitignore                # Git ignore rules
└── README.md                 # Project documentation
```

---

## 🔌 API Documentation

### Base URL

```
http://localhost:3000/api
```

### Endpoints

#### 1. Platform Commission Metrics

**GET** `/api/platform-commission-metrics`

Retrieves platform revenue and commission data.

**Response:**

```json
{
  "totalGrossRevenueCents": 15000000,
  "totalCommissionCents": 3000000
}
```

**Example Request:**

```bash
curl -X GET http://localhost:3000/api/platform-commission-metrics
```

#### 2. Overall Platform Metrics

**GET** `/api/overall-metrics`

Retrieves comprehensive platform usage statistics.

**Response:**

```json
{
  "totalUsers": 1200,
  "totalSubscriptions": 800,
  "totalAddOnSales": 150,
  "totalProTrials": 200
}
```

**Example Request:**

```bash
curl -X GET http://localhost:3000/api/overall-metrics
```

---

## 📊 Data Models

### Platform Commission Metrics

| Field                    | Type   | Description                            |
| ------------------------ | ------ | -------------------------------------- |
| `totalGrossRevenueCents` | Number | Total platform revenue in cents (USD)  |
| `totalCommissionCents`   | Number | Total commission earned in cents (USD) |

### Overall Metrics

| Field                | Type   | Description                            |
| -------------------- | ------ | -------------------------------------- |
| `totalUsers`         | Number | Total registered users on the platform |
| `totalSubscriptions` | Number | Active subscription count              |
| `totalAddOnSales`    | Number | Number of add-on purchases             |
| `totalProTrials`     | Number | Pro trial activations                  |

---

## 🛠️ Technical Implementation

### Core Technologies

- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **CORS** - Cross-origin resource sharing middleware
- **ES6 Modules** - Modern JavaScript module system

### Key Features

- **RESTful API Design** - Clean, predictable endpoint structure
- **Mock Database Service** - Simulated data layer for demonstration
- **Request Logging** - Comprehensive logging with timestamps and IP tracking
- **Error Handling** - Robust error management and logging
- **CORS Support** - Cross-origin requests enabled for frontend integration

### Database Service

The `MetricsService` class provides:

- In-memory data storage simulation
- Async/await pattern for database operations
- Metadata tracking (timestamps, currency info)
- Scalable architecture for real database integration

---

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
NODE_ENV=development
```

### CORS Configuration

Currently configured to accept requests from any origin (`*`). For production, update the CORS settings in `server.js`:

```javascript
app.use(
  cors({
    origin: ["https://yourdomain.com", "https://admin.yourdomain.com"],
    credentials: true,
  })
);
```

---
