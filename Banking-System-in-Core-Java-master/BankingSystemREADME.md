# Online Banking System

## Overview

The **Online Banking System** is a web application built using **Java** and **MySQL** to provide users with a secure platform for managing their bank accounts, performing fund transfers, and viewing transaction history. The system focuses on user authentication, account management, and security measures to ensure safe transactions and data protection.

## Features

- **User Authentication:**
  - Secure login and registration functionalities.
  - Password encryption for enhanced security.

- **Account Management:**
  - View account details, balance, and transaction history.
  - Option to update account information.

- **Fund Transfers:**
  - Transfer funds between user accounts.
  - View transaction receipts and updated account balances.

- **Transaction History:**
  - Detailed transaction history for each user.
  - Displays transaction type (deposit, withdrawal, transfer), date, and amount.

- **Security Measures:**
  - Password hashing for secure storage.
  - HTTPS encryption to protect user data during transmission.
  - Session management to ensure only authenticated users access account features.

## Technologies Used

- **Java** (Programming language)
- **MySQL** (Database)
- **JavaServer Pages (JSP)** (Frontend)
- **Servlets** (Backend)
- **HTML, CSS, JavaScript** (Frontend)
- **JDBC** (Database connectivity)
- **BCrypt** (Password hashing)

## Project Setup

Follow these steps to set up and run the **Online Banking System** locally.

### Prerequisites

- **Java Development Kit (JDK)** 8 or later
- **MySQL** (Database server)
- **Apache Tomcat** or any Java-compatible web server
- **Eclipse** or **IntelliJ IDEA** (for development)

### Step 1: Clone the Repository

Clone the project from the repository:

```bash
git clone https://github.com/your-username/online-banking-system.git
mkdir online-banking-system
cd online-banking-system

git add .
git commit -m "Add online-banking-system "
git push origin main
