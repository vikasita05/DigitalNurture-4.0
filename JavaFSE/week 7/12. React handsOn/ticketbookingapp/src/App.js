import './App.css';
import React, { useState } from 'react';
import GuestPage from './guestpage';
import UserPage from './userpage';
import Loginbutton from './Loginbutton';
import Logoutbutton from './Logoutbutton';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="App">
      <h1>Flight Ticket Booking</h1>
      {isLoggedIn ? (
        <>
          <UserPage />
          <Logoutbutton onLogout={handleLogout} />
        </>
      ) : (
        <>
          <GuestPage />
          <Loginbutton onLogin={handleLogin} />
        </>
      )}
    </div>
  );
}

export default App;
