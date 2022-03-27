import React, { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productData2,productData3 } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Orders from './components/Orders';
import Sale from './components/Sale';

Aos.init({duration: 2000});

function App() {
 
  return (
    <Router>
      <GlobalStyle />
      <Hero />  
      <Orders heading='Bienvenidos' data={productData3} />
      <Products heading='Todos los días' data={productData} />
      <Feature data-aos="fade-up" /> 
      <Products heading='Fines de Semana' data={productData2} />
      <Sale/>
      <Footer />
    </Router>
  );
}

export default App;
