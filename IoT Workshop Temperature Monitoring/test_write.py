import pandas as pd

# Test writing data to a CSV file
data = {'timestamp': ['2024-11-27 14:30:15', '2024-11-27 14:30:20'],
        'temperature': [25.37, 30.12]}

df = pd.DataFrame(data)

# Write the data to a CSV file
df.to_csv('data/temperature_data.csv', mode='a', header=False, index=False)
