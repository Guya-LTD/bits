import React from 'react';

import Navbar from './components/molecules/Navbar';
import Field from './components/molecules/Field';

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

  return (
    <div>
      <Navbar brand={brand} menus={menus}/>
      <Field />
    </div>
  );
}

export default App;
