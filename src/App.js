import React, { useState } from 'react';
import './styles/App.css';
import Post from './components/Post';

function App() {
    

  return (
    <div className="App">
      <Post post={{id: 1, title: 'Maxim', body: 'Petuch'}} />
      <Post post={{id: 2, title: 'Sasha', body: 'Petuch'}} />
      <Post post={{id: 3, title: 'Maxim', body: 'Petuch'}} />
      <Post post={{id: 4, title: 'Sasha', body: 'Petuch'}} />
      <Post post={{id: 5, title: 'Maxim', body: 'Petuch'}} />
    </div>
  );
}

export default App;
