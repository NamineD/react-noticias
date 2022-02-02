import React from 'react';
import styles from './Header.module.css'

function Header({titulo}) {
  return <nav className='nav-wrapper light-blue darken-3'>
      <a href="#" className={`${styles.title}`}>{titulo}</a>
  </nav>;
}

export default Header;
