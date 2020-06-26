import React from 'react';

import Button from './components/atoms/Button';
import Logo from './components/molecules/Logo';
import Blockquote from './components/molecules/Blockquote';
import LoginTemplate from './components/templates/landing/Login';
import Card from './components/organisms/Card';

function App() {
  return (
    <div>
      <Button>Button</Button>
      <Button block>Block</Button>
      <Button size='sm' variant='primary'>Primary</Button>
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
      <div>
        <LoginTemplate
          header={<h1>Header</h1>}
          body={<p>Body</p>}
          footer={{right: <p>Right</p>, left: <p>Left</p>}}
        />
      </div>
      <div>
        <Card
          float
          block
          image={<p>Image</p>}
          header={<h1>Header</h1>}
          body={<p>Body</p>}
          footer={<p>Footer</p>}
        />
      </div>
    </div>
  );
}

export default App;
