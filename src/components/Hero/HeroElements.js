import styled, { keyframes } from 'styled-components';

import ImgBg from '../../images/portada2.jpeg';

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${ImgBg});

  height: 60vh;
  background-position: center;
  background-size: cover;
  filter: saturate(110%);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  color: #fff;
`;


export const HeroContent = styled.div`
  height: calc(80vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 900px) / 2);
  
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
 
  @media screen and (max-width: 650px) {
    width: 100%;
  };
`;
const textAnimation = keyframes`
  0%{opacity: 0; transform: translate(5%, 10%);}

  100%{opacity: 1;}
`;
export const HeroH1 = styled.h1`
  
  font-size: clamp(2.5rem, 5vw, 3rem);
  margin-bottom: 1rem;
  
  letter-spacing: 3px;
  animation-name: ${textAnimation};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;
const show = keyframes`
  0%{opacity: 0;}
  25%{opacity: 1;}
  75%{opacity: 1;}
  100%{opacity: 1;}
`;
export const HeroP = styled.p`
  display: inline-block;
  opacity: 0;
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
  animation-name: ${show};
  animation-duration: 15s;
  animation-fill-mode: forwards;
  
`;

export const HeroBtn = styled.button`

  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #FC2424;
  color: #fff;
  border-radius: 20px;
  animation-name: ${show};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
    
  }
`;
