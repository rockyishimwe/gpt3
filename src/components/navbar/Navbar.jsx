import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#wgpt3', label: 'What is GPT-3?' },
  { href: '#possibility', label: 'Open AI' },
  { href: '#features', label: 'Case Studies' },
  { href: '#blog', label: 'Library' },
];

const Menu = ({ onNavigate }) => (
  <ul className='gpt3__navbar-links-list'>
    {navLinks.map((link) => (
      <li key={link.href}>
        <a href={link.href} onClick={onNavigate}>
          {link.label}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleNavigate = () => {
    setToggleMenu(false);
  };

  return (
    <nav className='gpt3__navbar' aria-label='Primary'>
      <div className='gpt3__navbar-links'>
        <a className='gpt3__navbar-logo' href='#home' aria-label='Go to home'>
          <img src={logo} alt='GPT-3 logo' />
        </a>
        <div className='gpt3__navbar-links-container'>
          <Menu onNavigate={handleNavigate} />
        </div>
      </div>

      <div className='gpt3__navbar-actions'>
        <button className='gpt3__navbar-signin' type='button'>
          Sign in
        </button>
        <button className='gpt3__navbar-signup' type='button'>
          Sign up
        </button>
      </div>

      <div className='gpt3__navbar-menu'>
        <button
          type='button'
          className='gpt3__navbar-menu-toggle'
          aria-expanded={toggleMenu}
          aria-label={toggleMenu ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setToggleMenu((prevToggleMenu) => !prevToggleMenu)}
        >
          {toggleMenu ? <RiCloseLine color='#fff' size={27} /> : <RiMenu3Line color='#fff' size={27} />}
        </button>

        {toggleMenu && (
          <div className='gpt3__navbar-menu-container scale-up-center'>
            <div className='gpt3__navbar-menu-links'>
              <Menu onNavigate={handleNavigate} />
            </div>
            <div className='gpt3__navbar-menu-actions'>
              <button className='gpt3__navbar-signin' type='button'>
                Sign in
              </button>
              <button className='gpt3__navbar-signup' type='button'>
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
