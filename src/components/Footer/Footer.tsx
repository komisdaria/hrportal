import React from 'react';
import './_Footer.scss';
import bem from 'bem-cn';
import { Link } from 'react-router-dom';

const cn = bem('footer');

export function Footer() {


  return (
      <footer>
    <div className={cn('info')}>
      <p className={cn('description')}>
      CRUD Project Daria Komissarova 2022
      </p>
      <br />
      <Link to="https://github.com/komisdaria/">link github</Link>
      </div>
    </footer>
  );
}