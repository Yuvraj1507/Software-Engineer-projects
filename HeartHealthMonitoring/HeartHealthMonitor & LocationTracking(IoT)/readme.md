# Heart Health Monitoring Dashboard

This project is a **Real-Time Health Monitoring Dashboard** built using **Flask**, **SQLite**, and **Plotly**. The application simulates heart rate, body temperature, and location data, stores it in an SQLite database, and visualizes it in real-time on a web dashboard.


## Project Overview

This health monitoring system simulates the collection of heart rate, body temperature, and geographical location. This data is stored in an **SQLite** database (`health_data.db`), and **Flask** is used as the backend framework to fetch this data and serve it on a web dashboard. 

The frontend is built using **HTML**, **CSS**, and **Plotly** for graphing the heart rate and body temperature data in real-time. 

---

## Prerequisites
To run this project, you will need the following installed on your local machine:

- **Python 3.x**
- **Flask**: Python web framework
- **Plotly.js**: JavaScript library for interactive visualizations (included via CDN)

---

## Features:
- **Real-time Health Data**: Monitors heart rate (BPM), body temperature (°C), and geographical location (latitude and longitude).
- **Plotly Graphs**: Interactive graphs for heart rate and body temperature.
- **SQLite Database**: Stores health data for persistence even if the server restarts.
- **Flask Backend**: Simple API for delivering health data to the frontend.
- **Alerts**: Displays alerts for abnormal health metrics (e.g., low heart rate, high fever).
- **Backend API**: Flask server provides health data through an API endpoint (`/health_data`).
- **Multi-Threading**: Health data is updated in the background using threads.
- **pySerial**: Python to communicate with Arduino via Serial Communication or other interfaces.

---

## Technologies Used

- **Flask**: Python web framework for creating the backend server.
- **JavaScript (AJAX)**: Used to fetch and display real-time health data every few seconds.
- **HTML/CSS**: For designing the dashboard interface.
- **Threading (Python)**: Used to periodically update the health data in the background.

---

## Files:
- 'heart_rate_monitor.py': Simulates heart rate monitoring and alerting.
- 'location_monitor.py': Simulates GPS location tracking.
- 'app.py': Flask Web Server
- 'dashboard.html': Frontend <Frontend dashboard to display health data>
- 'view_data.html': Display all the stored health data records from the database.
- 'Plotly.js': To visualize the heart rate and body temperature data and real-time line graphs.
- 'health_data.db': SQLite database used to store such as heart rate, body temperature, and GPS coordinates) for tracking and analysis over time.

---

### Explanation:
1. **Overview**: Describes the project features and how it works.
2. **Installation**: Provides the steps for setting up the environment, installing dependencies, and running the app.
3. **Project Structure**: Explains the file structure of the project.
4. **Frontend & Backend Code**: Outlines the HTML (`dashboard.html`) and Python (`app.py`) code with comments and clarifications.
5. **Contributing**: Provides instructions on how to contribute to the project.
6. **License**: This project is licensed under the MIT License.

This **README.md** will help users understand how to run my project, its structure, and how to contribute.

---

- **Real-Time Data Updates**: The data is updated every 5 seconds via a background thread in the Flask backend.

---

# Testing the Health Data

You can also test the data being inserted and fetched from the SQLite database using this Python script:
python

import sqlite3

# Connect to the database
conn = sqlite3.connect('health_data.db')
cursor = conn.cursor()

# Fetch the latest health data
cursor.execute('SELECT * FROM health_data ORDER BY timestamp DESC LIMIT 5')
data = cursor.fetchall()

# Print the data
for row in data:
    print(row)

conn.close()

This script will print the latest 5 entries from the table. You should see heart rate, body temperature, latitude, longitude, and timestamp for each entry.health_data

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Installation Instructions](#installation-instructions)
3. [Setting Up SQLite Database](#setting-up-sqlite-database)
4. [Running the Flask App](#running-the-flask-app)
5. [Accessing the Dashboard](#accessing-the-dashboard)
6. [Testing the Health Data](#testing-the-health-data)
7. [Contributing](#contributing)
8. [License](#license)
 
---

# Installation of Project in GitHub 

### 1. Clone the Repository

```bash
git clone https://github.com/Yourusername/Projects.git
cd Projects

mkdir HeartHealthMonitoring
cd HeartHealthMonitoring
# Add your .py files and README.md here
git add .
git commit -m "Add heart health and location monitoring system"
git push origin main

