import React from 'react';
import Contact from './Page/Contact/Contact';
import Intro from './Page/Intro/Intro';
import Portfilio from './Page/Portfilio/Portfilio';
import Testimonia from './Page/Testimonias/Testimonia';
import Topbar from './Page/TobBar/Topbar';
import Works from './Page/Works/Works';
import './App.scss'

const App = () => {
  return ( <div className='app'>
  <Topbar/>
  <div className="sections">
  bruhssssssssssss
    <Intro/>
    <Portfilio/>
    <Works/>
    <Testimonia/>
    <Contact/>
  </div>
  </div> );
}
 
export default App;