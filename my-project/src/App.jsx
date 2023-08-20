import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Aboutinformation from './Components/AboutInformation';
import Collection from './Components/Collection';
import Blog from './Components/Blog';
import Wholesalers from './Components/Wholesalers';
import Footer from './Components/Footer';
import Routing from './Components/Routing';
import Landingpage from './Components/Landingpage';
import CollectionPage from './Components/Collections/CollectionPage';
import ExpandMenu from './Components/Collection/ExpandMenu/ExpandMenu';
import Products from './Components/Product/Products';
import BagDetails from './Components/My Bag/BagDetails';
import Account from './Components/AccountPage/Account';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/landingpage" element={<Landingpage/>} />
      <Route path="/collectionpage" element={<CollectionPage/>} />
      <Route path="/collectionpage/expandmenu" element={<ExpandMenu/>} />
      <Route path="/collectionpage/expandmenu/products" element={<Products/>} />
      <Route path="/collectionpage/expandmenu/products/bagdetails" element={<BagDetails/>} />
      <Route path="/collectionpage/expandmenu/products/bagdetails/account" element={<Account/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Routing />} />
        <Route path="/aboutinformation" element={<Aboutinformation />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/wholesalers" element={<Wholesalers />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
