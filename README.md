#💡 Inspiration 💯

Have you ever faced a trashcan with a seemingly endless number of bins, each one marked with a different type of recycling? Have you ever held some trash in your hand, desperately wondering if it can be recycled? Have you ever been forced to sort your trash in your house, the different bins taking up space and being an eyesore? Inspired by this dilemma, we wanted to create a product that took all of the tedious decision-making out of your hands. Wouldn't it be nice to be able to mindlessly throw your trash in one place, and let AI handle the sorting for you? 

#♻️ What it does 🌱

IntelliBin is an AI trashcan that handles your trash sorting for you! Simply place your trash onto our machine, and watch it be sorted automatically by IntelliBin's servo arm! Track your stats and learn more about recycling on our React.js website. 

#🛠️ How we built it 💬
Arduino/C++ Portion: We used C++ code on the Arduino to control a servo motor and an LED based on serial input commands. Importing the servo library allows us to access functions that control the motor and turn on the LED colors. 

Website Portion: We used React.js to build the front end of the website, including a profile section with user stats, a leaderboard, a shop to customize the user's avatar, and an information section. MongoDB was used to build the user registration and login process, storing usernames, emails, and passwords. 

Google Vision API: 

#🚧 Challenges we ran into ⛔
- Connecting the Arduino to the arm
- Figuring out the optimal way to move the Servo arm, as it could not rotate 360 degrees
- Using global variables on our website
- Configuring MongoDB to store user data
- Figuring out how and when to detect the type of trash on the screen

#🎉 Accomplishments that we're proud of 🏆
In a short span of 24 hours, we are proud to:
- Successfully engineer a servo arm to sort trash into two separate bins
- Connect LED lights that change color based on recyclable or non-recyclable trash
- Utilize Google Cloud Vision API to identify and detect different types of trash and decide if it is recyclable or not
- Develop an intuitive website with React.js that includes login, user profile, and informative capabilities
- Drink a total of 9 cans of Monsters combined (the cans were recycled)

#🧠 What we learned 🤓
- How to control servo arms at certain degrees with an Arduino
- What types of items are recyclable
- How to parse and understand Google Cloud Vision API outputs
- How to connect a MongoDB database to create user authentification
- How to use global state variables in Node.js and React.js

#🔮 What's next for Intellibin⏭️
The next steps for Intellibin include refining the current functionalities of our hack, along with exploring new features. First, we wish to expand the trash detection database, improving capabilities to accurately identify various items being tossed out. Next, we want to add more features such as detecting and warning the user of "unrecyclable" objects. For instance, Intellibin could notice whether the cap is still on a recyclable bottle and remind the user to remove the cap. In addition, the sensors could notice when there is still liquid or food in a recyclable item, and send a warning. Lastly, we would like to deploy our website so more users can use Intellibin and track their recycling statistics!
