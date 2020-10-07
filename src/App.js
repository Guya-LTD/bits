import React from 'react';

import List from './components/molecules/List';


function App() {

  return (
    <div>
      <List lists={
            [
                { type: 'single', list: 'LOne' },
                { type: 'faciliter', faciliter: { text: 'Collapse', icon: 'I', open: 'O', close: 'C'} },
                { type: 'collapse', collapse: ['C', 'C2'] }
            ]
        }/>
    </div>
  );
}

export default App;
