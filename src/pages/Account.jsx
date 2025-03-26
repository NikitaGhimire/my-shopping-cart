import React, { useState } from 'react';
import '../Account.css';

const Account = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    // Add actual login logic here
    setIsLoggedIn(true);
  };

  return (
    <div className="account-page">
      {!isLoggedIn ? (
        <div className="auth-container">
          <h2>Login</h2>
          <form onSubmit={handleLogin} className="auth-form">
            <input
              type="email"
              placeholder="Email"
              value={loginForm.email}
              onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
            />
            <input
              type="password"
              placeholder="Password"
              value={loginForm.password}
              onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div className="profile-container">
          <h2>My Account</h2>
          <div className="profile-sections">
            <section className="orders">
              <h3>Order History</h3>
              <p>No orders yet</p>
            </section>
            <section className="settings">
              <h3>Account Settings</h3>
              <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;