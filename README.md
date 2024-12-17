
# E-Commerce Chatbot

This repository contains the source code for an e-commerce chatbot built using a React frontend and a Flask backend. The chatbot allows users to search for products, view product details, and interact with a simulated backend API that mimics an e-commerce platform. The project also features user login and session management, along with a responsive UI for a seamless experience.

## Table of Contents

1. [Project Summary](#project-summary)
2. [Deliverables](#deliverables)
3. [Technologies Used](#technologies-used)
4. [Setup and Execution](#setup-and-execution)
5. [API Documentation](#api-documentation)
6. [Sample Queries](#sample-queries)
7. [Project Report](#project-report)
8. [Presentation](#presentation)

# Project Summary

The goal of this project was to build an e-commerce chatbot with the following key features:

- **Product Search:** Users can search for products through a chatbot interface.
- **Product Display:** Displays product details including name, description, price, and category.
- **User Authentication:** A simple login system for users to manage their sessions.
- **Responsive Design:** The frontend is built with React and is fully responsive for mobile and desktop users.
- **Backend:** The Flask backend handles product data, user authentication, and connects to a SQLite database populated with mock data.

The project is structured into separate frontend and backend components, with the frontend built using React and the backend using Flask and Python.

# Deliverables

 1. GitHub Repository

The repository contains all the source code for the project. This includes:

- **Frontend (React):**
  - `Chatbot.jsx`: Chatbot interface that communicates with the Flask backend.
  - `Login.jsx`: Login form with email and password fields.
  - `Navbar.jsx`: A responsive navigation bar with search functionality.
  - `App.jsx`: Main application routing logic using React Router.

- **Backend (Flask/Python):**
  - `app.py`: Flask application that manages product search, user authentication, and database integration.
  - `chatbot.py`: Basic keyword-based chatbot logic for interacting with users.
  - `config.py`: Configuration settings for SQLAlchemy and SQLite database.
  - `models.py`: SQLAlchemy model that defines the `Product` class with attributes like name, description, price, and category.
  - `populate_db.py`: Script to populate the SQLite database with mock product data.
  - `run.py`: Flask app runner script.

 2. Detailed Project Report

A comprehensive project report is included to showcase the following:

- **Technology Stack Used:** The technologies utilized in both the frontend and backend components of the project.
- **Sample Queries:** Examples of how the chatbot interacts with the user and queries the backend for product information.
- **Results Obtained:** Key results and observations from the project, including how it meets the original requirements and objectives.

 3. Presentation

A presentation is provided for the recruitment panel, detailing the following:

- **Project Approach:** Explanation of the development process and how the project was executed.
- **Technologies Utilized:** Overview of the tools and technologies used, including React, Flask, SQLAlchemy, and SQLite.
- **Key Learnings:** Insights gained from building the project, including challenges faced and how they were overcome.

 Technologies Used

- **Frontend:**
  - React.js (for UI development)
  - React Router (for routing and page navigation)

- **Backend:**
  - Flask (for building the API and handling requests)
  - Python (for backend logic)
  - SQLAlchemy (for database management)
  - SQLite (for the database)

- **Other:**
  - Bootstrap (for responsive design)
  - JSON (for API responses)

## Setup and Execution

### Prerequisites

- Python 3.7+ for the backend
- Node.js and npm for the frontend
- SQLite for the database

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/e-commerce-chatbot.git
   cd e-commerce-chatbot
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows use venv\Scripts\activate
   ```

3. Install the necessary Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Populate the database with mock data:
   ```bash
   python populate_db.py
   ```

5. Run the Flask backend:
   ```bash
   python run.py
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install the necessary npm packages:
   ```bash
   npm install
   ```

3. Start the React application:
   ```bash
   npm start
   ```

4. The frontend should now be running on [http://localhost:3000](http://localhost:3000).

## API Documentation

The Flask backend provides the following routes:

- **GET /products:** Retrieves a list of all products in the database.
- **GET /products/search:** Allows users to search for products by name or category.
- **POST /login:** Handles user login by validating email and password.

### Sample Query

- **Search for products:**
  ```bash
  GET /products/search?q=laptop
  ```
  Returns a list of products that match the search term "laptop."

- **Login request:**
  ```bash
  POST /login
  Body: { "email": "user@example.com", "password": "password123" }
  ```

## Sample Queries

- **Search for electronics:**
  ```bash
  GET /products/search?q=electronics
  ```

- **Get all products:**
  ```bash
  GET /products
  ```

## Project Report

The project report is available in the `docs` folder. It includes an in-depth analysis of the technology stack, challenges faced during development, and a summary of the results obtained.

## Presentation

A presentation file is included in the `presentation` folder, which outlines the approach, key technologies, and lessons learned during the project.

---

Feel free to reach out for any questions or further clarifications.
