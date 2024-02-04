import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import "../../App.css"

function Startup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function registerUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        name, 
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log(data)
    if (data.status =='ok'){
      alert('Registration successful')
    }
    else{
      alert('User already exists')
    }
  }
  return (
    <section>
      <center>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <label>Username: </label>
        <br></br>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <br></br>
        <label>Email: </label>
        <br></br>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <br></br>
        <label>Password: </label>
        <br></br>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <br></br>
        <button className="registerbutton" type="submit" value="Register">Register</button>
        <Link to='/'><button>Home</button></Link>
      </form>
      </center>
    </section>
  );
}

export default Startup;
