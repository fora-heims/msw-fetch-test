import React, { useEffect, useState } from 'react';
import './Home.css';
import Controls from '../../components/Controls/Controls.jsx';
import Details from '../../components/Details/Details.jsx';

export default function Home() {
  const [fox, setFox] = useState({});
  const [dog, setDog] = useState({});
  const [cat, setCat] = useState({});
  const [duck, setDuck] = useState({});
  const [math, setMath] = useState({});
  const [joke, setJoke] = useState({});
  const [forza, setForza] = useState({});
  const [food, setFood] = useState({});
  const [coffee, setCoffee] = useState({});
  const [bored, setBored] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const foxData = await fetch('https://randomfox.ca/floof/');
      const foxDataJSON = await foxData.json();
      setFox(foxDataJSON);

      const dogData = await fetch('https://random.dog/woof.json');
      const dogDataJSON = await dogData.json();
      setDog(dogDataJSON);

      const catData = await fetch('https://aws.random.cat/meow');
      const catDataJSON = await catData.json();
      setCat(catDataJSON);

      // const duckData = await fetch('https://random-d.uk/api/quack');
      // const duckDataJSON = await duckData.json();
      // setDuck(duckDataJSON);

      const mathData = await fetch('https://x-math.herokuapp.com/api/random');
      const mathDataJSON = await mathData.json();
      setMath(mathDataJSON);

      const jokeData = await fetch('https://geek-jokes.sameerkumar.website/api?format=json');
      const jokeDataJSON = await jokeData.json();
      setJoke(jokeDataJSON);

      const forzaData = await fetch('https://forza-api.tk/');
      const forzaDataJSON = await forzaData.json();
      setForza(forzaDataJSON);

      // const foodData = await fetch('https://foodish-api.herokuapp.com/api/');
      // const foodDataJSON = await foodData.json();
      // setFood(foodDataJSON);

      // const coffeeData = await fetch('https://coffee.alexflipnote.dev/random.json');
      // const coffeeDataJSON = await coffeeData.json();
      // setCoffee(coffeeDataJSON);

      const boredData = await fetch('http://www.boredapi.com/api/activity/');
      const boredDataJSON = await boredData.json();
      setBored(boredDataJSON);

      setLoading(false);
    };
    fetchData();
  }, []);

  const handleFox = async () => {
    const foxData = await fetch('https://randomfox.ca/floof/');
    const foxDataJSON = await foxData.json();
    setFox(foxDataJSON);
  };

  const handleDog = async () => {
    const dogData = await fetch('https://random.dog/woof.json');
    const dogDataJSON = await dogData.json();
    setDog(dogDataJSON);
  };

  const handleCat = async () => {
    const catData = await fetch('https://aws.random.cat/meow');
    const catDataJSON = await catData.json();
    setCat(catDataJSON);
  };

  const handleDuck = async () => {
    const duckData = await fetch('https://random-d.uk/api/quack');
    const duckDataJSON = await duckData.json();
    setDuck(duckDataJSON);
  };

  const handleMath = async () => {
    const mathData = await fetch('https://x-math.herokuapp.com/api/random');
    const mathDataJSON = await mathData.json();
    setMath(mathDataJSON);
  };

  const handleJoke = async () => {
    const jokeData = await fetch('https://geek-jokes.sameerkumar.website/api?format=json');
    const jokeDataJSON = await jokeData.json();
    setJoke(jokeDataJSON);
  };

  const handleForza = async () => {
    const forzaData = await fetch('https://forza-api.tk/');
    const forzaDataJSON = await forzaData.json();
    setForza(forzaDataJSON);
  };

  const handleFood = async () => {
    const foodData = await fetch('https://foodish-api.herokuapp.com/api/');
    const foodDataJSON = await foodData.json();
    setFood(foodDataJSON);
  };

  const handleCoffee = async () => {
    const coffeeData = await fetch('https://coffee.alexflipnote.dev/random.json');
    const coffeeDataJSON = await coffeeData.json();
    setCoffee(coffeeDataJSON);
  };

  const handleBored = async () => {
    const boredData = await fetch('http://www.boredapi.com/api/activity/');
    const boredDataJSON = await boredData.json();
    setBored(boredDataJSON);
  };

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1>That&apos;s so fetch</h1>
      <Controls
        {...{
          handleFox,
          handleDog,
          handleCat,
          handleDuck,
          handleMath,
          handleJoke,
          handleForza,
          handleFood,
          handleCoffee,
          handleBored,
        }}
      />
      <Details {...{ fox, dog, cat, duck, math, joke, forza, food, coffee, bored }} />
    </div>
  );
}
