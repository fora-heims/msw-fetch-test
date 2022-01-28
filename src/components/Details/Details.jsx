import React from 'react';
import './Details.css';

export default function Details({ fox, dog, cat, math, joke, forza, bored }) {
  return (
    <div className="details">
      <a href={fox.link}>
        <h2>Random Fox Image Api</h2>
        <img src={fox.image} />
      </a>
      <a>
        <h2>Random Dog Image API</h2>
        <p>
          some links to random dog pics are video files, which will not load correctly on this
          simple web app
        </p>
        <img src={dog.url} />
      </a>
      <a href="https://aws.random.cat/">
        <h2>Random Cat Image API</h2>
        <img src={cat.file} />
      </a>
      <a href="https://x-math.herokuapp.com/">
        <h2>Random Math API</h2>
        <p>
          {math.first} {math.operation} {math.second} = {math.answer}
        </p>
      </a>
      <a href="https://geek-jokes.sameerkumar.website/">
        <h2>Random Joke API</h2>
        <p>{joke.joke}</p>
      </a>
      <a href="https://docs.forza-api.tk/">
        <h2>Random Forza Image API</h2>
        <img src={forza.image} />
      </a>
      <a href="">
        <h2>Random Bored Acitivity Suggestion API</h2>
        <h3>{bored.activity}</h3>
        <h4>Type: {bored.type}</h4>
        <h5>Participants: {bored.aprticipants}</h5>
        <h6>Price: ${bored.price}</h6>
        <h6>Accessibility: {bored.accessibility}</h6>
      </a>
    </div>
  );
}
