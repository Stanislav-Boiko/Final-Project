import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderWrapper = styled.header`
  background: #f5e9da;
  color: #7a5c2e;
  height: 64px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  max-width: 425px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  flex: 1;
  margin: 0;
  font-size: 1.5rem;
  text-align: center;
`;

const ProfileBtn = styled(NavLink)`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #ffffff;
  color: #7a5c2e;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 2px 8px 0 rgba(181, 158, 127, 0.12),
    0 0 0 4px rgba(0,0,0,0.01);
  cursor: pointer;
  text-decoration: none;
  transition: box-shadow 0.2s, background 0.2s;

  &:active, &.active {
    background: #7a5c2e;
    box-shadow:
      0 2px 12px 0 rgba(210, 180, 140, 0.18),
      0 0 0 6px rgba(0,0,0,0.03);
  }

  &:active span, &.active span {
    color: #fff;
  }
`;

const Icon = styled.span`
  font-size: 1.7rem;
  font-weight: 600;
  color: #7a5c2e;
  user-select: none;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Title>Header</Title>
      <ProfileBtn to="/profil" aria-label="Профіль">
        <Icon>?</Icon>
      </ProfileBtn>
    </HeaderWrapper>
  );
}

export default Header;