import React from 'react';
import './Controls.css';

export default function Controls({
  handleFox,
  handleDog,
  handleCat,
  handleMath,
  handleJoke,
  handleForza,
  handleBored,
}) {
  return (
    <div>
      <button onClick={handleFox}>Fetch a new Fox</button>
      <button onClick={handleDog}>Fetch a new Dog</button>
      <button onClick={handleCat}>Fetch a new Cat</button>
      <button onClick={handleMath}>Fetch a new Math Equation</button>
      <button onClick={handleJoke}>Fetch a new Joke</button>
      <button onClick={handleForza}>Fetch a new Forza</button>
      <button onClick={handleBored}>Fetch a new Bored Activity Suggestion</button>
    </div>
  );
}
