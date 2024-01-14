
![IntelliBin](https://github.com/asyf16/IntelliBin/assets/144833617/e4462c99-c087-4af3-85c7-6b278d50a97d)
# 💡 Inspiration 💯

Have you ever faced a trashcan with a seemingly endless number of bins, each one marked with a different type of recycling? Have you ever held some trash in your hand, desperately wondering if it can be recycled? Have you ever been forced to sort your trash in your house, the different bins taking up space and being an eyesore? Inspired by this dilemma, we wanted to create a product that took all of the tedious decision-making out of your hands. Wouldn't it be nice to be able to mindlessly throw your trash in one place, and let AI handle the sorting for you? 

# 📷 Video Demo 🎥
https://www.youtube.com/watch?v=fziGIb2MTAk&t=7s

![Demo](https://github.com/asyf16/IntelliBin/assets/144833617/ff9ceff2-b96d-4d62-b697-ba84d9ada3f7)

# ♻️ What it does 🌱

IntelliBin is an AI trashcan that handles your trash sorting for you! Simply place your trash onto our machine, and watch it be sorted automatically by IntelliBin's servo arm! Track your stats and learn more about recycling on our React.js website. 

# 🛠️ How we built it 💬
Arduino/C++ Portion: We used C++ code on the Arduino to control a servo motor and an LED based on serial input commands. Importing the servo library allows us to access functions that control the motor and turn on the LED colors. 

Website Portion: We used React.js to build the front end of the website, including a profile section with user stats, a leaderboard, a shop to customize the user's avatar, and an information section. MongoDB was used to build the user registration and login process, storing usernames, emails, and passwords. 

Google Vision API: 

# 🌐 Website Features 💻
![Registration](https://github.com/asyf16/IntelliBin/assets/144833617/1bf42431-06a6-43a4-9668-d115c0ea5636)

User registration with MongoDB

![Login](https://github.com/asyf16/IntelliBin/assets/144833617/532673c8-0506-406e-86aa-1c27ae63c753)

User login with MongoDB

![User](https://github.com/asyf16/IntelliBin/assets/144833617/3aec997f-8f89-40c9-82c6-5d282057315f)

User profile, leaderboard, and avatar shop.

![Information](https://github.com/asyf16/IntelliBin/assets/144833617/afd22bbe-cffe-4412-95e4-19313ce49a97)

Informative section about what items are recyclable. 

# 🚧 Challenges we ran into ⛔
- Connecting the Arduino to the arm
- Figuring out the optimal way to move the Servo arm, as it could not rotate 360 degrees
- Using global variables on our website
- Configuring MongoDB to store user data
- Figuring out how and when to detect the type of trash on the screen

# 🎉 Accomplishments that we're proud of 🏆
In a short span of 24 hours, we are proud to:
- Successfully engineer a servo arm to sort trash into two separate bins
- Connect LED lights that change color based on recyclable or non-recyclable trash
- Utilize Google Cloud Vision API to identify and detect different types of trash and decide if it is recyclable or not
- Develop an intuitive website with React.js that includes login, user profile, and informative capabilities
- Drink a total of 9 cans of Monsters combined (the cans were recycled)

# 🧠 What we learned 🤓
- How to control servo arms at certain degrees with an Arduino
- What types of items are recyclable
- How to parse and understand Google Cloud Vision API outputs
- How to connect a MongoDB database to create user authentification
- How to use global state variables in Node.js and React.js


# 🌳 Importance of Recycling 🍀
- Conserves natural resources by reusing materials
- Requires less energy compared to using virgin materials, decreasing greenhouse gas emissions
- Reduces the amount of waste sent to landfills,
- Decreasesdisruption to ecosystems and habitats

# 👍How Intellibin helps 👌
**Efficient Sorting:** Intellibin utilizes AI technology to efficiently sort recyclables from non-recyclables. This ensures that the right materials go to the appropriate recycling streams.

**Increased Recycling Rates:** With Intellibin making recycling more user-friendly and efficient, it has the potential to increase recycling rates. 

**User Convenience:** By automating the sorting process, Intellibin eliminates the need for users to spend time sorting their waste manually. This convenience encourages more people to participate in recycling efforts. 

**In summary:** Recycling is crucial for environmental sustainability, and Intellibin contributes by making the recycling process more accessible, convenient, and effective through AI-powered sorting technology.


# 🔮 What's next for Intellibin⏭️
The next steps for Intellibin include refining the current functionalities of our hack, along with exploring new features. First, we wish to expand the trash detection database, improving capabilities to accurately identify various items being tossed out. Next, we want to add more features such as detecting and warning the user of "unrecyclable" objects. For instance, Intellibin could notice whether the cap is still on a recyclable bottle and remind the user to remove the cap. In addition, the sensors could notice when there is still liquid or food in a recyclable item, and send a warning. Lastly, we would like to deploy our website so more users can use Intellibin and track their recycling statistics!
