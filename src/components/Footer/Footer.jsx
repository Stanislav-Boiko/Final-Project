import React from 'react';
import './Footer.scss';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <NavLink to="/menu" className="footer__btn">
          <span>Меню</span>
        </NavLink>
        <NavLink to="/pantry" className="footer__btn">
          <span>Pantry</span>
        </NavLink>
        <NavLink to="/shopping-list" className="footer__btn">
          <span>List</span>
        </NavLink>
        <NavLink to="/news" className="footer__btn">
          <span>News</span>
        </NavLink>
        <NavLink to="/profil" className="footer__btn">
          <span>Профіль</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Footer;