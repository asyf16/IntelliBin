from PIL import Image
import cv2 as cv
import os
#import readdata
# Imports the Google Cloud client library
from google.cloud import vision
from datetime import datetime
recycle = ["Aluminum can", "Plastic bottle", "Bottle", "Can"]
action = ""

def captureimage():
    cam = cv.VideoCapture(1)

    if not cam.isOpened():
        print("Camera not accessible")
        return

    while True:
        # Show the live video stream in a window
        ret, frame = cam.read()
        if not ret:
            print("Failed to grab frame")
            break
        
        cv.imshow('Press the spacebar to take a photo', frame)

        # Wait for a key press for 1 millisecond
        key = cv.waitKey(1)
        if key == ord('q'):  # Press 'q' to quit the program
            print("Exiting...")
            break
        elif key == 32:  
            # Save the image to a file
            filename = "Captured.png"
            # Get the current working directory where the file should be saved
            cwd = os.getcwd()
            taken_filepath = os.path.join(cwd, filename)
            cv.imwrite(taken_filepath, frame)  # This line saves the image
            print(f"Image saved at {taken_filepath}")
            cv.destroyWindow('Press the spacebar to take a photo')
            return (taken_filepath)
    
    # Release the camera resource
    cam.release()
    cv.destroyWindow('Press the spacebar to take a photo')

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
    
    """for object_ in objects:
        if object_.name in dataset.keys():
            upload_timestamp = current_time.strftime("%I:%M %p")
            print(f" The upload time is {upload_timestamp}")
            time_array.append (upload_timestamp)
            list.append(f"{object_.name}")"""

def capture():
    captured_filepath = captureimage()
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

    response = client.label_detection(image=image)
    labels = response.label_annotations
    print("Labels:")

    for label in labels:
        print(label.description)
        if label.description in recycle:
            action = "O"
            break
        else:
            action = "C"
    
    print(action)

    if response.error.message:
        raise Exception(
            "{}\nFor more info on error messages, check: "
            "https://cloud.google.com/apis/design/errors".format(response.error.message)
        )

capture()

    