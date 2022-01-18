import logo from './logo.svg';
import React from 'react';

import './App.css';
import Section from './components/sectionone';
import Navigation from './components/nevigation';
import About from './components/About';
import Services from './components/Service';

import Contact from './components/contact';
import Skill from './components/Skill';
import Resume from './components/Resume';
import Footer from './components/footer';
import { Routes, Route, NavLink } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Navigation />
      <Section />
      <About />
      <Services />
      <Skill />
      {/* update the service section in the desktop port also */}
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}
export default App;
