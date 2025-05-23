import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background: #f5e9da;
  color: #7a5c2e;
  padding: 16px 0;
  text-align: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  max-width: 425px;
  z-index: 1000;
  border-radius: 12px 12px 0 0;
`;

function Header() {
  return (
    <HeaderWrapper>
      <h1>Header</h1>
    </HeaderWrapper>
  );
}

export default Header;