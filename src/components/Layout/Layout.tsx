import React from 'react';
import './_Layout.scss';
import bem from 'bem-cn';
import { NavLink, Outlet } from 'react-router-dom';
import { Form, FormControl, Button, Nav } from 'react-bootstrap';
import { Footer } from '../Footer/Footer';
// import MainPage from '../MainPage/MainPage';


const cn = bem('layout');

export function Layout() {


  return (
    <>
    <div>
    <div className={cn('wrapper')}>
    <h1 className={cn('header')}>GreenLand Company Career Portal</h1>
    <div className={cn('toggles')}>
    <header >

    <NavLink
    className={({isActive}) => isActive ? cn('active-link'): ''}
      to='/'>Main page</NavLink>

    <NavLink
    className={({isActive}) => isActive ? cn('active-link'): ''}
     to='/employees'>All employees</NavLink>

    <NavLink
    className={({isActive}) => isActive ? cn('active-link'): ''}
     to='/search'>Search</NavLink>
    

  
    </header>
    </div>
    <hr style={{ marginTop: "20px" }} />
    </div>
    <Outlet />
    </div>
    <Footer />
  
    </>
  );
}