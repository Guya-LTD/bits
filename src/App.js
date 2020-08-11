import React from 'react';

import Navbar from './components/molecules/Navbar';
import Field from './components/molecules/Field';
import Link from './components/atoms/Link';
import FormControl from './components/organisms/FormControl';
import Button from './components/atoms/Button';
import LoginTemplate from './components/templates/landing/Login';
import Card from './components/organisms/Card';


function App() {
  const leftMenus = [
    {menu: 'Home'},
    {menu: 'About'},
    {menu: 'Contact', submenus: [{menu: 'Address'}, {menu: 'Email Address'}]},
  ];
  
  const rightMenus = [
    {menu: 'Help'},
  ];
  
  const menus = {left: leftMenus, right: rightMenus}

  const brand = {small: <p>Small Brand</p>, large: <p>Large Brand</p>}

  const handleSubmit = event => {
    event.preventDefault();
    alert('hello');
  };

  return (
    <div>
      <Navbar brand={brand} menus={menus}/>
      <Field />
      <Link />
      <br />
      <p>Form controller</p>
      <FormControl onSubmit={handleSubmit}>
        <Field />
        <Field />
        <Button type='submit' />
      </FormControl>
      <LoginTemplate>
            <p>Body</p>
          </LoginTemplate>
      <Card>
        <p>Card body</p>
      </Card>
    </div>
  );
}

export default App;
