import React, { useState } from 'react';
import './login.css'

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted');
    console.log('Username:', username);
    console.log('Password:', password);
    setUsername('');
    setPassword('');
  };

  // Print username and password on console
  console.log('Username:', username);
  console.log('Password:', password);

  return (
    
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Welcome Back,</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
        <p>In case of any issues, contact Tech Central support team for assistance.</p>
        <p>© 1999 - 2023 Wells Fargo. NMLSR ID 399801</p>
      </form>
    
  );
};

export default LoginForm;
