import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './css/App.css'
import Navbar from './nav'
import AboutUs_con1 from './as-con-1';
import AboutUs_con2 from './as-con-2';
import AboutUs_con3 from './as-con-3';
import AboutUs_con4 from './as-con-4';
import Footerr from './footer';

export default function App() {

  return (
    <div>
      <Navbar />
      
      <AboutUs_con1 />

      <AboutUs_con2/>

      <AboutUs_con3/>

      <AboutUs_con4/>

      <Footerr/>
    </div>
  )
}

