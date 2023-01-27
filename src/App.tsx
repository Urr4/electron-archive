import React from 'react';
import './App.css';
import {BookPreview} from "./books/book-preview";

function App() {
  return (
      <div className="App">
        <BookPreview name="Name" description="Description"/>
      </div>
  );
}

export default App;
