import React, {useContext} from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import {Context} from '../../Store'
import { Leaderboard } from '../Data';


function Login() {
  function updateBoard(name,score,character){
    let changeprofile= "";
    if (character == "Dino"){
      changeprofile = "https://media.discordapp.net/attachments/955687301822939206/1195919827496345652/Screenshot_84.png?ex=65b5be21&is=65a34921&hm=f2b3e0052e47416584a7d7ba5b6965284ef651baa2f7ab422c8f79a10de5be63&=&format=webp&quality=lossless&width=930&height=930"
    }
    else if (character == "Shiba"){
      changeprofile = "https://media.discordapp.net/attachments/955687301822939206/1195919827978686625/Screenshot_85.png?ex=65b5be22&is=65a34922&hm=7f24d483eec1ef1195304e04240ababc915a8950be365c85d248679bebb70d31&=&format=webp&quality=lossless&width=930&height=930"
    }
    Leaderboard.push({
      name: name,
      location: "Canada",
      score : score,
      img: changeprofile,
      dt: "2022-02-10"
  })
  }
  const [state,setState] = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  async function registerUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        email, 
        password,
      }),
    });
    const data = await response.json();
    if (data.user){
      console.log(data.user.name)
      alert('Login successful')
      setState({username: data.user.name, total: data.user.total, today: data.user.bottles, coins: data.user.coins, capacity: data.user.capacity, character: data.user.character, got: data.user.got})
      updateBoard(data.user.name, data.user.total, data.user.character)
      
    }
    else{
      alert('Please check your login credentials')
    }
  }
  return (
    <section>
      <h1>Login</h1>
      <center>
      <form onSubmit={registerUser}>
        <label>Email:</label>
        <br></br>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <br></br>
        <label>Password:</label>
        <br></br>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <br></br>
        <button className="registerbutton" type="submit" value="Register">Login</button>
        <Link to='/'><button>Home</button></Link>
      </form>
      </center>
    </section>
  );
}

export default Login;
