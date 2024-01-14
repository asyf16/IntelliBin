import React, {useContext} from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import {Context} from '../../Store'


function Login() {
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
      setState({username: "heyo"})
      alert('Login successful')
      window.location.href = '/profile'
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
