import React from 'react';
import Course from './components/Course/Course';
import Nav from './components/Nav/Nav';
import SideBar from './components/SideBar/SideBar';
import './styles/style.css';

const App: React.FC = () => {
  const color: string = '';
  const backgroundColor: string = '';

  return (
    <section className="app">
      <Nav color={color} backgroundColor={backgroundColor} />
      <Course />
      <SideBar />
    </section>
  );
};

export default App;
