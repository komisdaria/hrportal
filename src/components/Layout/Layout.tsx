import React from 'react';
import './_Layout.scss';
import bem from 'bem-cn';
import { NavLink, Outlet } from 'react-router-dom';
import { Form, FormControl, Button} from 'react-bootstrap';
import { Footer } from '../Footer/Footer';
// import MainPage from '../MainPage/MainPage';


const cn = bem('layout');

export function Layout() {


  return (
    <>
    <div>
    <div className={cn('wrapper')}>
    <h1 className={cn('header')}>GreenLand Company Career Portal</h1>
    <header className={cn('toggles')}>
    <NavLink
    className={({isActive}) => isActive ? cn('active-link'): ''}
      to='/'>Main page</NavLink>
    <NavLink
    className={({isActive}) => isActive ? cn('active-link'): ''}
     to='/employees'>All employees</NavLink>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Name employee"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </header>
    </div>
    <Outlet />
   
    <main className={cn('container')}>
    main content here
 
    </main>
    </div>
    <Footer />
  
    </>
  );
}