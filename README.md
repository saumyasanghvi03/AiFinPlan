# AI-Powered Financial Planner Telegram Bot

## Overview

This project is a fully automated financial planner for personal and corporate use, implemented as a Telegram mini app. It uses AI models like GPT-3 or Claude for document analysis and financial planning advice. The app includes user authentication, subscription billing, and an admin dashboard for managing users and documents.

## Technologies Used

- **Telegram Bot API**
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **AI Model:** GPT-3 or Claude
- **Payment Gateway:** Razorpay (for subscription billing)

## Features

1. **Telegram Bot Integration**
    - Bot Setup and Configuration
    - User Interaction and Commands

2. **User Authentication and Subscription Management**
    - User Registration and Login
    - Subscription Billing

3. **Document Analysis**
    - Upload and Analysis of Financial Documents

4. **AI-Powered Financial Planning**
    - Personal and Corporate Financial Advice
    - Use of GPT-3 or Claude for generating advice

5. **Admin Dashboard**
    - User Management
    - Subscription Management
    - Document Analysis Logs

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Python
- npm

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/financial-planner-bot.git
    ```

2. Navigate to the project directory:
    ```sh
    cd financial-planner-bot
    ```

3. Install backend dependencies:
    ```sh
    cd backend
    npm install
    ```

4. Install Telegram bot dependencies:
    ```sh
    cd ../telegram-bot
    npm install
    ```

5. Set up the machine learning environment:
    ```sh
    cd ../machine-learning
    pip install -r requirements.txt
    ```

6. Set up the NLP environment:
    ```sh
    cd ../nlp
    pip install -r requirements.txt
    ```

### Running the Application

1. Start the backend server:
    ```sh
    cd backend
    npm start
    ```

2. Start the Telegram bot:
    ```sh
    cd ../telegram-bot
    npm start
    ```

3. The application should now be running, and the Telegram bot can be interacted with via the Telegram app.

## Usage

- Register a new user with the `/register` command
- Log in with the `/login` command
- Upload financial documents with the `/upload_document` command
- Get financial advice with the `/get_advice` command
- Admins can view users and documents on the Admin Dashboard

## License

Distributed under the MIT License. See `LICENSE` for more information.