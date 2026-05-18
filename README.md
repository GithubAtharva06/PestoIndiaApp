# PestoIndia Backend

A Pest Control Management System backend built using Spring Boot and MongoDB.

This project allows customers to create pest control service requests while providing workflow tracking and spam-prevention mechanisms for request management.

---

## Tech Stack

- Java
- Spring Boot
- MongoDB Atlas
- Maven
- Postman

---

## Features

- Create customer service requests
- MongoDB database integration
- Request status workflow
    - Pending
    - Assigned
    - Completed
    - Cancelled
- Validation handling using Spring Boot annotations
- Cooldown logic to prevent duplicate spam requests
- REST API architecture
- Frontend-ready backend APIs

---

## API Endpoints

### Create Request
POST `/requests`

### Get All Requests
GET `/responses`

### Delete Request
DELETE `/delete/{id}`

---

## How to Run

### Backend
- Run Spring Boot app on port 8080

### Frontend
- cd frontend
- npm install
- npm run dev

## Project Structure

```text
controller/
service/
repository/
entities/
