import React, { useEffect, useState } from 'react';
import './Home.css';
import Controls from '../../components/Controls/Controls.jsx';
import Details from '../../components/Details/Details.jsx';

export default function Home() {
  const [fox, setFox] = useState({});
  const [dog, setDog] = useState({});
  const [cat, setCat] = useState({});
  const [math, setMath] = useState({});
  const [forza, setForza] = useState({});
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

      const mathData = await fetch('https://x-math.herokuapp.com/api/random');
      const mathDataJSON = await mathData.json();
      setMath(mathDataJSON);

      const forzaData = await fetch('https://forza-api.tk/');
      const forzaDataJSON = await forzaData.json();
      setForza(forzaDataJSON);

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

  const handleMath = async () => {
    const mathData = await fetch('https://x-math.herokuapp.com/api/random');
    const mathDataJSON = await mathData.json();
    setMath(mathDataJSON);
  };

  const handleForza = async () => {
    const forzaData = await fetch('https://forza-api.tk/');
    const forzaDataJSON = await forzaData.json();
    setForza(forzaDataJSON);
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
          handleMath,
          handleForza,
          handleBored,
        }}
      />
      <Details {...{ fox, dog, cat, math, forza, bored }} />
    </div>
  );
}
