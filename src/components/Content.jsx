import {Routes, Route } from 'react-router-dom'
import Navbar from "../components/Navbar";

import Home from "../views/Home";
import Search from "../views/Search";
import Collection from '../views/Collection';

const Content = () => {
  return (
    <div className="flex-auto">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/collection" element={<Collection/>} />
      </Routes>
    </div>
  );
};

export default Content;
