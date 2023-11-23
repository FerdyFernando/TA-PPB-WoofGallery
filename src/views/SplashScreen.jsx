import React from 'react';
import appLogo from '../profileImage/appLogo.png'

import '../css/SplashScreen.css';

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img
        src= {appLogo}
        alt="App Logo"
        className='logo-image'
      />
      <h1>Welcome</h1>
    </div>
  );
};

export default SplashScreen;
