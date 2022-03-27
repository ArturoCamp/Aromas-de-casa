import styled, { keyframes } from 'styled-components';
import FeaturePic from '../../images/pati.jpeg';
const textAnimation = keyframes`
  0%{opacity: 0; transform: translate(5%, 10%);}
  25%{opacity: 1;}
  50%{opacity: 1;}
  100%{opacity: 0;}
`;
export const FeatureContainer = styled.div`
background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${FeaturePic});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 2rem;
  border-radius: 10px;
  flex-basis: 280px;
  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
   

  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
    animation-name: ${textAnimation};
  animation-duration: 5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;

  }
`;
export const FeatureButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #ffc500;
  color: #000;
  transition: 0.2s ease-out;
  transform: translate(0%, 70%);
  border-radius: 20px;
  &:hover {
    color: #fff;
    background: #FC2424;;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;

