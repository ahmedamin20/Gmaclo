import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/Navbar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Styles/Theme.css'
import Home from './Components/Home/Home';
import LonginForm from './Components/Login/Loginform';
import Contactus from './Components/Contact-us/Contactus';
import About from './Components/About/About'
import Blog from './Components/Blogs/Blog';
import FAQ from './Components/FAQ/FAQ';
function App() {
  return (
    <MDBContainer fluid>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/loginDriver' element={<LonginForm />} />
          <Route path='/contact-us' element={<Contactus />} />
          <Route path='/about' element={<About />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/faq' element={<FAQ />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </MDBContainer>
  );
}

export default App;
