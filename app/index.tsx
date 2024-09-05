import React from 'react';
import Login from './components/Login/Login';
import Home from './components/Home(tabs)/Home/Home';
import ClientGrid from './components/Home(tabs)/Clientes/Clientes'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './User.contex';



const App = () => {
  return (

    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Financial" element={<Home />} />
          <Route path="/Services" element={<ClientGrid />} />
          <Route path="/Clientes" element={<ClientGrid />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
