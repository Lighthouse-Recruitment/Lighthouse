import React from 'react';

import uuid from 'uuid';
import Notes from './Notes';

const notes = [
  {
    id: uuid.v4(),
    task: 'Dummy Message 1'
  },
  {
    id: uuid.v4(),
    task: 'Dummy message 2'
  }
];

export default () => (
  <div>
    <button onClick={() => console.log('add note')}>+</button>
    <Notes notes={notes} />
  </div>
)
