import React from 'react';
import { FeatureContainer,OrdersText,FeatureContainerText  } from './SaleElements';
import Aos from 'aos';

const Feature =  () => {
  Aos.init();
  return (
    
    <FeatureContainer>
     
      <h1>Puntos de venta</h1>
      
    
      <OrdersText >Minisuper y licorera Pelón -Calle el pastor </OrdersText>
      <OrdersText>Abastecedor Zuñiga -Barrio Recope</OrdersText>
      <OrdersText>Abastecedor Los Castillos -Cedros</OrdersText>
      <OrdersText>Abastecedor Chaverrí -Cedros</OrdersText>
      <OrdersText>Abastecedor La Violeta -Repasto</OrdersText>
      <OrdersText>Licorera La 18 -Barrio Don Tomas</OrdersText>
      <OrdersText>Abastecedor Botecito -Barrio Botecito</OrdersText>
      <OrdersText>Heladería Los Once -Centro comercial Rojas Cortez</OrdersText>
 
     
    </FeatureContainer>
  );
};

export default Feature;
