import random
import time

def get_heart_rate():
    # Simulate heart rate (in beats per minute)
    return random.randint(60, 150)  # Random heart rate between 60 and 150 bpm

def display_heart_rate(heart_rate):
    # Display the current heart rate
    print(f"Current Heart Rate: {heart_rate} bpm")

def check_heart_rate(heart_rate):
    # Set thresholds for critical heart rate (low and high)
    lower_threshold = 60
    upper_threshold = 120

    if heart_rate < lower_threshold:
        alert("Low heart rate detected!")
    elif heart_rate > upper_threshold:
        alert("High heart rate detected!")

def alert(message):
    # Alert function that triggers when abnormal heart rate is detected
    print(f"ALERT: {message}")
    send_sms(message)

def send_sms(message):
    # Simulating sending an SMS (You can use the Twilio API for real SMS)
    print(f"Simulating sending SMS with message: {message}")

# Main loop for continuous monitoring
if __name__ == "__main__":
    while True:
        heart_rate = get_heart_rate()  # Simulate heart rate
        display_heart_rate(heart_rate)  # Display heart rate on console
        check_heart_rate(heart_rate)  # Check if heart rate is normal or not
        time.sleep(2)  # Simulate monitoring every 2 seconds
