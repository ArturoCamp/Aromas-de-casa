import React from 'react';
import Aos from 'aos';

import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductDesc,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductPrice,
  ProductTitle
 
} from './ProductsElements';

const Products = ({ heading, data }) => {
  Aos.init({duration: 1000});
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        
        {data.map((product, index) => {
          return (
            
            <ProductCard key={index} data-aos="zoom-in" data-aos-duration="500">
              <ProductImg src={product.img} alt={product.alt}/>
              
              <ProductInfo>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDesc>{product.desc}</ProductDesc>
              <ProductPrice>{product.price}</ProductPrice>
               
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
