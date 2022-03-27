import React from 'react';

import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo >Aromas de casa</SocialLogo>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/Aromas-de-Casa-109266271240743' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/aromas_dcasa/?hl=es' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              
              <SocialIconLink
                href='https://api.whatsapp.com/send?phone=50663567570'
                target='_blank'
                aria-label='Whatsapp'
               
              >
                <FaWhatsapp />
              </SocialIconLink>
             
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
