# 🛒 Microservice Architecture – E-commerce Payment API

This project demonstrates a **microservices architecture** for handling e-commerce payments, developed with **NestJS**, **Docker**, **NATS**, and **MySQL**.

It consists of:

- **HTTP API Gateway**
- **Users Microservice**
- **Payments Microservice**

All services communicate via NATS for event-driven messaging and persist data in MySQL databases.

---

## 🚀 Getting Started

The easiest way to set up this project locally is using Docker.

### 1. Clone the Repository

```bash
git clone https://github.com/YanivBohbot/microserviceProject.git
cd microserviceProject



### 2. Install Dependencies

Run the following command at the project root to install all dependencies:
```bash
npm run install

### 3. Start Docker Compose
Ensure Docker is running, then execute:
```bash
docker-compose up --build


This will:

    Build Docker images

    Launch MySQL and NATS containers

    Start all microservices

### 4. Verify Services

    The API Gateway runs on http://localhost:3000

    MySQL runs on port 3306

    NATS runs on port 4222

### 🗂 Application Structure
### HTTP API Gateway

    Entry point for all external HTTP requests

    Handles routing and forwards requests via NATS

    Publishes messages to the NATS server

    Listens for specific events from NATS

    Defines all HTTP API endpoints

This service acts as a bridge between external clients and the internal microservices.


### Users Microservice

    Listens for createUser events from NATS

    Creates new user records in the MySQL database

    Manages user-related business logic

Example functionality:

    Create user accounts upon receiving events

    Manage user data and persistence

### Payments Microservice

    Listens for createPayment events from NATS

    Creates payment records in the MySQL database

    Handles payment processing logic

Example functionality:

    Process payment creation requests

    Manage payment statuses and persistence


### 🛠️ Technologies Used

    NestJS – Node.js framework for scalable server-side apps

    Docker – Containerization platform

    NATS – Lightweight, high-performance messaging system

    MySQL – Relational database

    Docker Compose – Orchestration of multi-container applications

### 💡 Future Improvements

    Implement authentication and authorization

    Add comprehensive error handling and validation

    Set up health checks for services

    Integrate distributed tracing for debugging

    Add unit and integration tests
