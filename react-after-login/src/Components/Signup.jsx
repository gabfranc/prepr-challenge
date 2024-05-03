// DONE: Import React and useState from react
import React, { useState } from 'react';

//DONE: Create a function for the signup page
function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(''); 

  const handleSubmit = (e) => {//This will prevent the form from submitting automatically.
    e.preventDefault();
    console.log('Sign up with', email, password);
  }

  return (
    //DONE: Create form for the Sign up authentication
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      {/***DONE: Add Email input  ***/}
      <div className="email-input">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      {/***DONE: Add Password input  ***/}
      <div className="password-input">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">SUBMIT</button>
    </form>
  );
}

export default Signup;