// src/components/Home.js
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import CalendarComponent from '../Calendar/Calendar';
import * as C from './styles';


const Home = () => {
  return (
    <C.HomeContainer>
      <Sidebar />
      <C.MainContent>
        <CalendarComponent />
      </C.MainContent>
    </C.HomeContainer>
  );
};

export default Home;
