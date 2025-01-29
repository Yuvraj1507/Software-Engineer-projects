let heartRateData = [];
let temperatureData = [];
let timeData = [];

// Function to fetch the latest health data from the Flask API
function fetchHealthData() {
    fetch('/health_data')
        .then(response => response.json())
        .then(data => {
            const heartRate = data.heart_rate;
            const temperature = data.body_temperature;
            const latitude = data.latitude.toFixed(4);
            const longitude = data.longitude.toFixed(4);

            // Update location display
            document.getElementById('location').textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;

            // Add new data points to the arrays
            const currentTime = new Date().toLocaleTimeString();
            timeData.push(currentTime);
            heartRateData.push(heartRate);
            temperatureData.push(temperature);

            // Limit the data arrays to the latest 20 data points
            if (heartRateData.length > 20) {
                heartRateData.shift();
                temperatureData.shift();
                timeData.shift();
            }

            // Update the Heart Rate graph
            Plotly.newPlot('heart-rate-graph', [{
                x: timeData,
                y: heartRateData,
                type: 'scatter',
                mode: 'lines+markers',
                marker: { color: 'blue' },
                name: 'Heart Rate'
            }]);

            // Update the Body Temperature graph
            Plotly.newPlot('temperature-graph', [{
                x: timeData,
                y: temperatureData,
                type: 'scatter',
                mode: 'lines+markers',
                marker: { color: 'red' },
                name: 'Body Temperature'
            }]);
        });
}

// Fetch data every 5 seconds
setInterval(fetchHealthData, 5000);
