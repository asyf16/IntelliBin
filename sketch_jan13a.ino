#include <Servo.h>

Servo myServo;
int servoPin = 3;

void setup() {
  myServo.attach(servoPin);
  Serial.begin(9600); // Start serial communication at 9600 baud rate
}

void loop() {
  if (Serial.available() > 0) { // Check if serial input is available
    char input = Serial.read(); // Read the input

    // Check the input character
    if (input == 'o') { // Let's say 'o' for open or turn
      myServo.write(90); // Turn servo to 90 degrees
      delay(1000); // Delay for demonstration purposes
    } else if (input == 'c') { // 'c' for close or reset
      myServo.write(0); // Reset servo to 0 degrees
      delay(1000); // Delay for demonstration purposes
    }
  }
}