from flask import Flask, render_template
import pandas as pd
import plotly.express as px
import os

app = Flask(__name__)

@app.route('/')
def home():
    # Define the path to the temperature data CSV file
    data_file = "data/temperature_data.csv"

    # Check if the file exists
    if not os.path.exists(data_file):
        return "<h1>Error: Data file not found!</h1>"

    # Read the temperature data
    df = pd.read_csv(data_file)

    # Create a visualization using Plotly
    fig = px.line(
        df, 
        x='timestamp', 
        y='temperature', 
        title='Temperature Monitoring',
        labels={'timestamp': 'Timestamp', 'temperature': 'Temperature (°C)'},
        color_discrete_sequence=["#FF5733"]  # Optional: Customize line color
    )

    # Add additional information (Year and Month) as hover data
    fig.update_traces(hovertemplate="<b>Timestamp:</b> %{x}<br>"
                                    "<b>Temperature:</b> %{y}°C<br>"
                                    "<b>Year:</b> %{customdata[0]}<br>"
                                    "<b>Month:</b> %{customdata[1]}")
    fig.for_each_trace(lambda trace: trace.update(customdata=df[['year', 'month']].values))

    # Render the graph as HTML
    graph_html = fig.to_html(full_html=False)
    return render_template('index.html', graph_html=graph_html)

if __name__ == '__main__':
    app.run(debug=True)
