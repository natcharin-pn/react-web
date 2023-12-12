import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './page/home';
import About from './page/about';
import './App.css'
import UserList from './page/ppp';
import AnimalsComponent from './page/xmas';
import Reindeer from './page/Reindeer';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/UserList" element={<UserList />} />
          <Route path="/AnimalsInfo" element={<AnimalsComponent />} />
          <Route path="/Reindeer" element={<Reindeer />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
