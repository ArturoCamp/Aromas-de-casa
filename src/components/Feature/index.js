import React, { useEffect } from 'react';
import Aos from "aos";
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  Aos.init();
  return (
    <FeatureContainer >
      <section className="slider">
      <h1 data-aos="fade-up" data-aos-duration="500">Miércoles de promoción </h1>
      <p>Dos bolsas de patí por tan solo ₡1500</p>
      
      <FeatureButton  data-glf-cuid="acc4654d-611b-471f-8504-f6f442c690ab" data-glf-ruid="63a71757-345b-4830-b2e0-edc6bf22f03d">
      Realizar pedido
        </FeatureButton>
        </section>
    </FeatureContainer>
  );
};

export default Feature;
