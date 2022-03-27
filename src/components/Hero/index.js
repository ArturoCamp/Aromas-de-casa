import React, { useState,useEffect } from 'react';
import Aos from "aos";

import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = () => {
  useEffect(() => {
    Aos.init({duration: 100});
    
  
  }, );
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
    
  
      <HeroContent>
        <HeroItems>
        <HeroH1>La mejor opción para buenos momentos</HeroH1>
          <HeroP>Con aroma de casa</HeroP>
          <HeroBtn>
            <span  data-glf-cuid="acc4654d-611b-471f-8504-f6f442c690ab" data-glf-ruid="63a71757-345b-4830-b2e0-edc6bf22f03d" > Realizar Pedido</span>
          </HeroBtn>
          
        </HeroItems>
        
      </HeroContent>
      
    </HeroContainer>
  );
};

export default Hero;
