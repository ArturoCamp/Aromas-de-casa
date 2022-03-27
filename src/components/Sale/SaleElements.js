import styled, { keyframes } from 'styled-components';
import FeaturePic from '../../images/pati3.jpeg';
const textAnimation = keyframes`
0%{opacity: 1; transform: translate(5%, 5%);}
25%{opacity: 1;}
50%{opacity: 1;}
75%{opacity: 1;}
100%{opacity: 0;}


`;

export const FeatureContainer = styled.div`
background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${FeaturePic});
  height: 100vh;
  
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex-basis: 280px;
  align-items: center;
  color: #FFF;
  text-align: center;
  padding: 0 1rem;
  font-size: 3rem;
  font-weight: 550;

  
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  
  h1 {
    font-size: 3rem;
    flex-basis: 280px;
    color: #FFF;
  
  }

  
`;
export const FeatureContainerText = styled.div`
flex-basis: 280px;
margin-bottom: 0.5rem;
font-size: 1rem;
color: #FFF;

  
`;
export const OrdersText = styled.p`
flex-basis: 280px;
margin-bottom: 0.5rem;
font-size: 1rem;
color: #FFF;


`;

export const OrdersHeading = styled.h1`
  
  font-size: clamp(4rem, 3vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #db733e;
  
`;
