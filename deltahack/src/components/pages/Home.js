import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

function Home() {
  return (
    <>
    <div className='homescreen'>
      <center>
      </center>
      <center>
      <Link to='/login'>
      <button>Login</button>
      </Link>
      <Link to='/register'>
      <button>Register</button>
      </Link>
      </center>
    </div>
    </>
  )
}

export default Home