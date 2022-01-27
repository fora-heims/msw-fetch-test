import React from 'react';
import './Home.css';
import Controls from '../../components/Controls/Controls.jsx';
import Details from '../../components/Details/Details.jsx';

export default function Home() {
  return (
    <div>
      <h1>That fetch</h1>
      <Controls />
      <Details />
    </div>
  );
}
