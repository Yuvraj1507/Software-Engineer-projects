import sqlite3

def create_database():
    conn = sqlite3.connect('health_data.db')
    cursor = conn.cursor()

    # Create table if it doesn't exist
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

    # Commit and close
    conn.commit()
    conn.close()

    print("Database and table created successfully.")

create_database()
