import random
import time
import pandas as pd
import os

# File to store simulated data
output_file = "data/temperature_data.csv"

# Create the 'data' folder if it doesn't exist
os.makedirs("data", exist_ok=True)

# Data provided (simplified for demonstration)
data = {
    "YEAR": [1901, 1902, 1903, 1904, 1905, 1906],  # Example years
    "JAN": [22.4, 24.93, 23.44, 22.5, 22, 22.28],
    "FEB": [24.14, 26.58, 25.03, 24.73, 22.83, 23.69],
    "MAR": [29.07, 29.77, 27.83, 28.21, 26.68, 27.31],
    "APR": [31.91, 31.78, 31.39, 32.02, 30.01, 31.93],
    "MAY": [33.41, 33.73, 32.91, 32.64, 33.32, 34.11],
    "JUN": [33.18, 32.91, 33, 32.07, 33.25, 32.19],
    "JUL": [31.21, 30.92, 31.34, 30.36, 31.44, 31.01],
    # Add remaining months as needed
}

# Convert the data into a DataFrame
df = pd.DataFrame(data)

# Function to simulate temperature readings based on the dataset
def generate_temperature_data():
    # Pick a random year and month
    year = random.choice(df["YEAR"].values)
    month = random.choice(df.columns[1:])  # Exclude 'YEAR' column
    
    # Get the temperature for the chosen month and year
    temp = df[df["YEAR"] == year][month].values[0]
    
    # Generate a timestamp
    timestamp = pd.Timestamp.now().strftime('%Y-%m-%d %H:%M:%S')
    
    # Return a dictionary with the generated data
    return {"timestamp": timestamp, "year": year, "month": month, "temperature": temp}

# Initialize the CSV file with a header
with open(output_file, "w") as f:
    f.write("timestamp,year,month,temperature\n")  # CSV header

# Generate and save data periodically
while True:
    data = generate_temperature_data()
    print(data)  # Print the generated data for visibility
    with open(output_file, "a") as f:
        f.write(f"{data['timestamp']},{data['year']},{data['month']},{data['temperature']}\n")
    time.sleep(5)  # Pause for 5 seconds between each reading  based on this give 