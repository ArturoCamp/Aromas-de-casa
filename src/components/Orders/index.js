
import React from 'react';
import Aos from 'aos';


import {
  OrdersContainer,
  OrdersWrapper,
  OrdersHeading,
  OrdersTitle,
  OrdersCard,
  OrdersImg,
  OrdersInfo,
  OrdersDesc,
  OrdersPrice,
  OrdersButton,

 
} from './OrdersElements';

const Orders = ({ heading, data }) => {
  Aos.init();
  return (
    <OrdersContainer>
      <OrdersHeading>{heading}</OrdersHeading>
      <OrdersWrapper>
        
        {data.map((product, index) => {
          return (
            
            <OrdersCard key={index} data-aos="zoom-in" data-aos-duration="500">
              <OrdersImg src={product.img} alt={product.alt} ></OrdersImg>
             
              
               
                
             
            </OrdersCard>
          );
        })}
         {data.map((product, index) => {
          return (
            
            <OrdersCard key={index}>
              
          
              <OrdersInfo>
               <OrdersTitle>{product.name}</OrdersTitle>
                 <OrdersDesc>{product.desc}</OrdersDesc>
                <OrdersPrice>{product.price}</OrdersPrice>
                <OrdersButton data-glf-cuid="acc4654d-611b-471f-8504-f6f442c690ab" data-glf-ruid="63a71757-345b-4830-b2e0-edc6bf22f03d">
                Realizar pedido
                </OrdersButton>
              </OrdersInfo>
            </OrdersCard>
          );
        })}
      </OrdersWrapper>
    </OrdersContainer>
  );
};

export default Orders;
