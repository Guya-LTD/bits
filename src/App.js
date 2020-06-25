import React from 'react';

import Button from './components/atoms/Button';
import Logo from './components/molecules/Logo';
import Blockquote from './components/molecules/Blockquote';
import './components/styles/Flexbox';

function App() {
  return (
    <div>
      <Button>Button</Button>
      <Button size='sm'>Small</Button>
      <Button icon={<i>ICON</i>}>Button</Button>  
      <Button theme='royal-blue'>Royal Blue</Button> 
      <Button type='link' href='http://a.com'>A Link</Button>
      <Button theme='royal-blue' type='link' href='http://a.com'>Royal Blue</Button>
      <Logo />
      <Blockquote 
        header={<h1>Header</h1>}
        body={<p>Body</p>}
        footer={<span>Footer</span>}
      />
      <div class='row col-xs-1'>
        <Button />
      </div>
    </div>
  );
}

export default App;
