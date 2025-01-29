import sqlite3

# Connect to SQLite database (it will be created if it doesn't exist)
conn = sqlite3.connect('health_data.db')

# Create a cursor object to interact with the database
cursor = conn.cursor()

# Create table to store health data
cursor.execute('''
CREATE TABLE IF NOT EXISTS health_data (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    heart_rate INTEGER,
    body_temperature REAL,
    latitude REAL,
    longitude REAL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
)
''')

# Commit the changes and close the connection
conn.commit()
conn.close()

print("Database initialized successfully.")
