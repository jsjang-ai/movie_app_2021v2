import React from 'react';

function Food({ love }) {
  return <h1>I like {love}</h1>;
}

function App() {
  return (
    <div>
      <h1>hello!!!</h1>
      <Food love="ramen" />
      <Food love="samgiopsal" />
      <Food love="jjajangmien" />
      <Food love="chicken" />
    </div>
  );
}

export default App;
