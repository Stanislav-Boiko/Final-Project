import React from 'react';
import styled from 'styled-components';
import { BtnLink } from '../Button/Button';

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  max-width: 425px;
  z-index: 1000;
  border-radius: 0 0 12px 12px;
  background: transparent;
  height: 64px;
  display: flex;
  align-items: stretch;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  width: 100%;
  height: 100%;
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <BtnLink to="/news">Новини</BtnLink>
        <BtnLink to="/menu">Меню</BtnLink>
        <BtnLink to="/pantry">Кладова</BtnLink>
        <BtnLink to="/shopping-list">Список</BtnLink>
      </FooterContainer>
    </FooterWrapper>
  );
}

export default Footer;