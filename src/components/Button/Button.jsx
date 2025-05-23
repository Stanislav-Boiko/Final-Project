import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BtnLink = styled(NavLink)`
  flex: 1 1 0;
  height: 100%;
  background: #f5e9da;
  color: #7a5c2e;
  text-decoration: none;
  border: none;
  font-weight: 600;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px 18px 0 0;
  box-shadow:
    0 2px 12px 0 rgba(210, 180, 140, 0.18),
    inset 2px 2px 8px #e2d2b8,
    inset -2px -2px 8px #fffbe9;
  transition: box-shadow 0.2s, background 0.2s, color 0.2s, transform 0.3s;
  outline: none;
  cursor: pointer;
  position: relative;

  &.active, &:active {
    background: #f3d9b1;
    color: #5c3d13;
    box-shadow:
      0 2px 16px 0 rgba(210, 180, 140, 0.22),
      inset 1px 1px 4px #e2d2b8,
      inset -1px -1px 4px #fffbe9;
    transform: scale(1.18);
    z-index: 1;
  }
`;

const Button = ({ children, ...props }) => (
    <button {...props}>{children}</button>
);

export default Button;