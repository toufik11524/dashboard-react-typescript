import React from 'react';
import './styles/style.css';
import Course from './components/Course/Course';
import Nav from './components/Nav/Nav';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <section className="app">
      <Nav />
      <Course />
      <SideBar />
    </section>
  );
}

export default App;
