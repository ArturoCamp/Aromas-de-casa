import styled from 'styled-components';

export const OrdersContainer = styled.div`

  /* width: 100vw; */
  min-height: 100vh;
  background:#fff;
  padding: 2rem calc((100vw - 1300px) / 2);
  background: #abbaab;
  background: -webkit-linear-gradient(to right, #ABBAAB00, #FFFFFF00);
  background: linear-gradient(to right, #ABBAAB2F, #ffffff);
   color: #000;
`;

export const OrdersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
 

`;

export const OrdersCard = styled.div`
  margin: 0 3rem;
  line-height: 2;
  width: 315px;
  justify-content: center;
  flex-basis: 280px;
  
`;

export const OrdersImg = styled.img`
  height: 325px;
  min-width: 325px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
  border-radius: 20px;
  &:hover {
    filter: saturate(120%);
    transition: 0.2s ease-out;
    cursor: pointer;
    -webkit-transform:scale(1.05);transform:scale(1.05);
  }
`;

export const OrdersHeading = styled.h1`
  
  font-size: clamp(4rem, 3vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #db733e;
  
`;

export const OrdersTitle = styled.h2`
  font-weight: 600;
  font-size: 3rem;
  color: #db733e;
  text-align: center;
  float: left;
`;

export const OrdersInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  
  color: #050505;
`;

export const OrdersDesc = styled.p`
  margin-bottom: 1rem;
  color: #050505;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
 
`;

export const OrdersPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #050505;
  text-align: center;
`;

export const OrdersButton = styled.button`
font-size: 1.2rem;
padding: 1rem 4rem;
border: none;
background: #FC2424;
color: #fff;
border-radius: 20px;
Text-aling: absolute;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
export const OrdersButton1 = styled.button`
  font-size: 1rem;
  padding: 0.5rem 4.35rem;
  border: none;
  background: #00ff6a;
  color: #fff;
  transition: 0.2 ease-out;
  Text-aling: absolute;
  
  .content {
    margin: 0 auto;
    text-align: left;

}
 
 
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

  