from PIL import Image
import cv2 as cv
import os
import serial
import time
#import readdata
# Imports the Google Cloud client library
from google.cloud import vision
from google.cloud import firestore
from firebase_admin import db
import firebase_admin
from firebase_admin import credentials
from datetime import datetime
import pyqrcode
from pyzbar.pyzbar import decode
import numpy as np
recycle = ["Aluminum can", "Plastic bottle", "Bottle", "Can", "Beverage Can", "Tin can", "Juicebox", "Carton", "Paper product", "Aluminium"]
action = ""

os.environ["GOOGLE_APPLICATION_CREDENTIALS"]="/Users/thedanieljiang/Downloads/intellibin-b6d70-firebase-adminsdk-pj5ya-13980ea562.json"

# Initialize Firebase Admin SDK
cred = credentials.Certificate("/Users/thedanieljiang/Downloads/intellibin-b6d70-firebase-adminsdk-pj5ya-13980ea562.json")
firebase_admin.initialize_app(cred)

# Initialize Firestore client
db = firestore.Client()

# Your Firebase configuration
firebase_config = {
    "apiKey": "AIzaSyBKbImImyLNwjIDbvyG4KNJ6Ri_xwMw5XY",
    "authDomain": "intellibin-b6d70.firebaseapp.com",
    "projectId": "intellibin-b6d70",
    "storageBucket": "intellibin-b6d70.appspot.com",
    "messagingSenderId": "828733685184",
    "appId": "1:828733685184:web:52a1f09fbc62a3c7d8dc25"
}

# Use the configuration as needed in your code
print(f"Project ID: {firebase_config['projectId']}")

def capture_qr_code():
    print("Running QR CODER")
    # Open the default camera (camera index 0)
    cap = cv.VideoCapture(1)

    while True:
        # Capture a single frame
        ret, frame = cap.read()

        # Decode QR codes from the frame
        decoded_objects = decode(frame)

        # Draw rectangles around the QR codes
        for obj in decoded_objects:
            # Extracting the rectangle coordinates
            rect_points = obj.polygon if len(obj.polygon) == 4 else obj.rect

            # Convert the points to integers
            rect_points = [(int(point.x), int(point.y)) for point in rect_points]

            # Draw the rectangle
            cv.polylines(frame, [np.array(rect_points)], True, (0, 255, 0), 2)

            # Return the QR code information
            return obj.data.decode('utf-8')

        # Display the frame
        cv.imshow('QR Code Scanner', frame)

        # Break the loop if 'q' key is pressed
        if cv.waitKey(1) & 0xFF == ord('q'):
            break

    # Release the camera
    cap.release()
    cv.destroyAllWindows()

# Specify the collection name and document ID
collection_name = "users"
document_id = capture_qr_code()  # Replace with the actual document ID
print("Document ID is:", document_id)
# Get a reference to the document
doc_ref = db.collection(collection_name).document(document_id)

# Get the current document data
current_data = doc_ref.get().to_dict()


def captured_localobjects(path):
    current_time = datetime.now()
    """Localize objects in the local image.

    Args:
    path: The path to the local file.
    """
    from google.cloud import vision

    list = []

    client = vision.ImageAnnotatorClient()

    with open(path, "rb") as image_file:
        content = image_file.read()
    image = vision.Image(content=content)

    objects = client.object_localization(image=image).localized_object_annotations


def capture_image():
    cam = cv.VideoCapture(0)

    if not cam.isOpened():
        print("Camera not accessible")
        return None

    print("Press 'q' to quit within 5 seconds...")
    time.sleep(3)
    # Allow the camera to warm up
        # Show the live video stream in a window
    ret, frame = cam.read()
    if not ret:
        print("Failed to grab frame")
        return None
        
    cv.imshow('Analyzing photo...', frame)

    # Check for 'q' key press to quit during the 5-second delay
    key = cv.waitKey(3)
    if key == ord('q'):
        print("Exiting...")
        cv.destroyAllWindows()
        cam.release()
        return None

    # Save the image to a file
    filename = "Captured.png"
    # Get the current working directory where the file should be saved
    cwd = os.getcwd()
    taken_filepath = os.path.join(cwd, filename)
    cv.imwrite(taken_filepath, frame)  # This line saves the image
    print(f"Image saved at {taken_filepath}")

    # Release the camera resource
    cam.release()
    cv.destroyAllWindows()

    return taken_filepath

def captured_localobjects(path):
    current_time = datetime.now()
    """Localize objects in the local image.

    Args:
    path: The path to the local file.
    """
    from google.cloud import vision

    list = []

    client = vision.ImageAnnotatorClient()

    with open(path, "rb") as image_file:
        content = image_file.read()
    image = vision.Image(content=content)

    objects = client.object_localization(image=image).localized_object_annotations

def capture():
    captured_filepath = capture_image()
    detect_labels(captured_filepath)

def partial_words(output, recycle):
    for word in recycle:
        if any(part in output for part in word.split()):
            return True
    return False

def detect_labels(taken_filepath):
    client = vision.ImageAnnotatorClient()

    with open(taken_filepath, "rb") as image_file:
        content = image_file.read()

    image = vision.Image(content=content)

    response = client.label_detection(image=image,max_results=20)
    labels = response.label_annotations
    print("Labels:")
    #action = None
    for label in labels:
        print(label.description)
        if label.description in recycle:
            action = "O"
            # Check if the document exists
            if current_data:

                # *** CAPCACITY ***
                capacity_string = current_data.get("capacity", "0")

                # Convert string to integer
                capacity_int = int(capacity_string)

                # Update the numeric value
                updated_capacity = capacity_int + 2

                # Convert back to string if needed
                updated_capacity_string = str(updated_capacity)
                    # Update specific fields in the document data
                    # Update the document data

                # *** COINS ***
                # Assuming "coins" is a string representing an integer
                coins_string = current_data.get("coins", "0")

                # Convert string to integer
                coins_int = int(coins_string)

                # Update the numeric value
                updated_coins = coins_int + 10

                # Convert back to string if needed
                updated_coins_string = str(updated_coins)
                    # Update specific fields in the document data
                    # Update the document data
                
                # *** TODAY ***
                # Assuming "coins" is a string representing an integer
                today_string = current_data.get("today", "0")

                # Convert string to integer
                today_int = int(today_string)

                # Update the numeric value
                updated_today = today_int + 1

                # Convert back to string if needed
                updated_today_string = str(updated_today)
                    # Update specific fields in the document data
                    # Update the document data
                
                # *** TOTAL ***
                # Assuming "coins" is a string representing an integer
                total_string = current_data.get("total", "0")

                # Convert string to integer
                total_int = int(total_string)

                # Update the numeric value
                updated_total = total_int + 1

                # Convert back to string if needed
                updated_total_string = str(updated_total)
                    # Update specific fields in the document data
                    # Update the document data

                update_data = {
                    "capacity": updated_capacity_string,
                    "coins": updated_coins_string,
                    "today": updated_today_string,
                    "total": updated_total_string
                    # Add more fields to update as needed
                }

                # Update the document in Firestore
                doc_ref.update(update_data)

                print(f"Values updated for document {document_id}")
            else:
                print(f"Document with ID {document_id} not found")
            break
        else:
            action = "C"
    
    print(action)

    if response.error.message:
        raise Exception(
            "{}\nFor more info on error messages, check: "
            "https://cloud.google.com/apis/design/errors".format(response.error.message)
        )

    # Serial communication
    ser = serial.Serial('/dev/cu.usbmodem21201', 9600, timeout=1)  # Change 'COM3' to your Arduino's port
    time.sleep(2)  # Wait for connection to establish

    if action == "O":
        ser.write(b'O')  # Send byte 'O' to Arduino
    elif action == "C":
        ser.write(b'C')  # Send byte 'C' to Arduino
    ser.close()  # Close the serial connection

# MOTION SENSOR:
# Open video capture object
cap = cv.VideoCapture(0)  # Use camera index 0, adjust as needed

# Read the first frame
ret, prev_frame = cap.read()

# Flag to control the motion detection loop
motion_detected_flag = False

while not motion_detected_flag:
    # Read the next frame
    ret, frame = cap.read()

    # Convert frames to grayscale
    gray_prev = cv.cvtColor(prev_frame, cv.COLOR_BGR2GRAY)
    gray_frame = cv.cvtColor(frame, cv.COLOR_BGR2GRAY)

    # Calculate absolute difference between consecutive frames
    diff = cv.absdiff(gray_prev, gray_frame)

    # Apply a threshold to detect significant changes
    _, threshold = cv.threshold(diff, 150, 255, cv.THRESH_BINARY)

    # Find contours in the thresholded image
    contours, _ = cv.findContours(threshold, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE)

    # Check if motion is detected
    motion_detected = any(cv.contourArea(contour) > 1000 for contour in contours)

    # Call capture() function if motion is detected
    if motion_detected:
        #read_qr_code()
        #read_qr_code_from_webcam()
        #captureqr()
        #capture_qr_code()
        capture()
        motion_detected_flag = True  # Set the flag to stop further iterations

    # Draw rectangles around detected motion
    for contour in contours:
        x, y, w, h = cv.boundingRect(contour)
        cv.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

    # Display the frame with motion detection
    cv.imshow('Motion Detection', frame)

    # Update the previous frame
    prev_frame = frame.copy()

    # Break the loop if 'q' key is pressed
    if cv.waitKey(1) & 0xFF == ord('q'):
        break

# Release the video capture object and close OpenCV window
cap.release()
cv.destroyAllWindows()