import styled, {
  keyframes
} from 'styled-components';


export const ProductsContainer = styled.div `
  /* width: 100vw; */
  min-height: 100vh;
  padding: 1rem calc((100vw - 1200px) / 2);
  background: #fff;
 
  color: #000;
  background: #abbaab;
  background: -webkit-linear-gradient(to right, #ABBAAB00, #FFFFFF00);
  background: linear-gradient(to right, #ABBAAB2F, #ffffff);
`;
const textAnimation = keyframes `
  0%{opacity: 0; transform: translate(5%, 5%);}

  100%{opacity: 1;}
`;
export const ProductWrapper = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  flex-basis: 280px;

`;

export const ProductCard = styled.div `
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
  flex-basis: 280px;
  margin-bottom: 4rem;
 
  position:relative;
  display:flex;
  
 
  
  &:hover {
    filter: saturate(120%);
    transition: 0.2s ease-out;
    cursor: pointer;
    -webkit-transform:scale(1.1);transform:scale(1.1);
  }
`;

export const ProductImg = styled.img `
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
  border-radius: 20px;
  
  flex-basis: 280px;
  
 
`;

export const ProductsHeading = styled.h1 `
  
  font-size: clamp(3rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #db733e;
  
`;



export const ProductInfo = styled.div `
opacity:0;
  background: rgb(0,103,123,0.7);
  flex-direction: column;
  border-radius: 20px;
  height: 300px;
  width: 300px;
  padding: 2rem;
  position:absolute;
  color: #FFF;
 
  &:hover {
    opacity:1;
    visibility: visible;
    transition-dalay: 0.5s;
    transform: scale(1);
    animation-name: ${textAnimation};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  }
`;
export const ProductTitle = styled.p `
  margin-bottom: 0 rem;
  font-size: 1.5rem;
  color: #FFF;
  text-align: center;

`;
export const ProductDesc = styled.p `
  
margin-bottom: 0rem;
font-size: 1rem;
color: #FFF;
text-align: center;
flex-basis: 280px;
`;

export const ProductPrice = styled.p `
  margin-bottom: 0rem;
  font-size: 2rem;
  color: #FFF;
  text-align: center;
  flex-basis: 280px;
`;