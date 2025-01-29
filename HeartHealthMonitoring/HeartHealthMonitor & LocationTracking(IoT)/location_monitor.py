import random
import time

def get_location():
    # Simulate GPS coordinates (latitude and longitude)
    latitude = random.uniform(12.0, 15.0)  # Random latitude between 12 and 15
    longitude = random.uniform(77.0, 80.0)  # Random longitude between 77 and 80
    return latitude, longitude

def display_location(latitude, longitude):
    # Display current location
    print(f"Current Location: Latitude: {latitude}, Longitude: {longitude}")

def send_location_sms(latitude, longitude):
    # Simulating sending location via SMS
    message = f"Current Location: Latitude: {latitude}, Longitude: {longitude}"
    print(f"Simulating sending SMS: {message}")

# Main loop for continuous location tracking
if __name__ == "__main__":
    while True:
        latitude, longitude = get_location()  # Simulate GPS data
        display_location(latitude, longitude)  # Display the coordinates
        send_location_sms(latitude, longitude)  # Simulate sending the location via SMS
        time.sleep(5)  # Simulate location update every 5 seconds
