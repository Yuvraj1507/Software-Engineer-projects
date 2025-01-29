import random
import time
import sqlite3
import os

# Ensure the 'data' folder exists
os.makedirs("data", exist_ok=True)

# SQLite database file path
db_path = "data/temperature_data.db"

# Connect to the SQLite database (create it if it doesn't exist)
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Create a table for temperature data if it doesn't already exist
cursor.execute("""
CREATE TABLE IF NOT EXISTS temperature_data (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp TEXT NOT NULL,
    year INTEGER NOT NULL,
    month TEXT NOT NULL,
    temperature REAL NOT NULL
)
""")
conn.commit()

# Data provided (your dataset)
data = {
    "YEAR": [1901, 1902, 1903, 1904, 1905, 1906],  # Example years
    "JAN": [22.4, 24.93, 23.44, 22.5, 22, 22.28],
    "FEB": [24.14, 26.58, 25.03, 24.73, 22.83, 23.69],
    "MAR": [29.07, 29.77, 27.83, 28.21, 26.68, 27.31],
    "APR": [31.91, 31.78, 31.39, 32.02, 30.01, 31.93],
    "MAY": [33.41, 33.73, 32.91, 32.64, 33.32, 34.11],
    "JUN": [33.18, 32.91, 33, 32.07, 33.25, 32.19],
    "JUL": [31.21, 30.92, 31.34, 30.36, 31.44, 31.01],
    "AUG": [30.94, 31.28, 30.74, 31.14, 30.65, 30.98],
    "SEP": [29.92, 30.1, 28.89, 28.75, 28.2, 28.79],
    "OCT": [27.33, 28.45, 27.25, 27.01, 27.4, 27.59],
    "NOV": [24.14, 25.91, 24.83, 24.65, 24.23, 24.42],
    "DEC": [23.01, 24.11, 23.34, 22.77, 22.39, 23.16],
}

# Function to simulate temperature readings based on the dataset
def generate_temperature_data():
    # Pick a random year and month
    year = random.choice(data["YEAR"])
    month = random.choice(list(data.keys())[1:])  # Exclude 'YEAR'
    
    # Get the temperature for the chosen month and year
    temperature = data[month][data["YEAR"].index(year)]
    
    # Generate a timestamp
    timestamp = time.strftime('%Y-%m-%d %H:%M:%S')
    
    # Return a dictionary with the generated data
    return {"timestamp": timestamp, "year": year, "month": month, "temperature": temperature}

# Generate and insert data periodically
while True:
    temp_data = generate_temperature_data()
    print(temp_data)  # Print for visibility
    cursor.execute("""
    INSERT INTO temperature_data (timestamp, year, month, temperature)
    VALUES (?, ?, ?, ?)
    """, (temp_data["timestamp"], temp_data["year"], temp_data["month"], temp_data["temperature"]))
    conn.commit()
    time.sleep(5)  # Pause for 5 seconds between readings
