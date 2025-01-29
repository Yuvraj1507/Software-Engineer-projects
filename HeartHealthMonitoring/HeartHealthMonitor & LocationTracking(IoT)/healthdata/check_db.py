import sqlite3

# Path to the SQLite database file
db_path = 'health_data.db'

# Connect to the database
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Check if the table exists by querying its schema
cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='health_data';")
table_exists = cursor.fetchone()

if table_exists:
    print("The 'health_data' table exists.")
else:
    print("The 'health_data' table does NOT exist.")

# Query the database to fetch the latest 5 records
cursor.execute('SELECT * FROM health_data ORDER BY timestamp DESC LIMIT 5')
data = cursor.fetchall()

if data:
    print("Latest health data records:")
    for row in data:
        print(row)
else:
    print("No data found in the database.")

# Close the database connection
conn.close()
