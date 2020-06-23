import React from 'react';

import Button from './components/atoms/Button';

function App() {
  return (
    <div>
      <Button>Button</Button>
      <Button size='sm'>Small</Button>
      <Button icon={<i>ICON</i>}>Button</Button>
      <Button type='link' href='http://a.com'>A Link</Button>
    </div>
  );
}

export default App;
