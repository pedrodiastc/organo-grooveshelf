import Banner from './components/Banner';
import FormClient from './components/FormClient';
import React, { useState } from 'react';
import Team from './components/Team';

function App() {
  const teams = [
    {
      name: 'Rock',
      primaryColor: '#D32F2F',
      secondaryColor: '#B71C1C',
    },
    {
      name: 'Pop',
      primaryColor: '#1976D2',
      secondaryColor: '#0D47A1',
    },
    {
      name: 'Jazz',
      primaryColor: '#FBC02D',
      secondaryColor: '#F57F17',
    },
    {
      name: 'Hip-hop',
      primaryColor: '#7B1FA2',
      secondaryColor: '#4A148C',
    },
    {
      name: 'Indie',
      primaryColor: '#00ACC1',
      secondaryColor: '#006064',
    },
    {
      name: 'Eletronic',
      primaryColor: '#5d3b81',
      secondaryColor: '#7e1047',
    },
    {
      name: 'Reggae',
      primaryColor: '#c8b109',
      secondaryColor: '#55c809',
    },
  ];
  const [showForm, setShowForm] = useState(true);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  const [expositors, setExpositors] = useState([]);
  // Function to handle the addition of a new expositor
  // This function will be passed to the FormClient component
  // and will be called when the form is submitted
  // It will update the state with the new expositor
  // and log the new expositor to the console
  // The expositor object will have the following properties: name, position, image and team
  const toExpoAdd = (expositor) => {
    setExpositors([...expositors, expositor]);
  };

  return (
    <>
      <Banner />

      {showForm && (
        <FormClient
          teams={teams.map((teams) => teams.name)}
          toExpoNewAdd={(expositor) => toExpoAdd(expositor)}
        />
      )}

      <div className="form-toggle">
        <div
          className="icon-button"
          onClick={toggleForm}
          title={showForm ? 'Hide Form' : 'Show Form'}
        >
          {showForm ? (
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-library-plus"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 3m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
              <path d="M4.012 7.26a2.005 2.005 0 0 0 -1.012 1.737v10c0 1.1 .9 2 2 2h10c.75 0 1.158 -.385 1.5 -1" />
              <path d="M11 10h6" />
              <path d="M14 7v6" />
            </svg>
          ) : (
            <svg height="44px" width="44px" viewBox="0 0 24 24">
              <path
                style={{ fill: 'currentColor' }}
                fill="none"
                stroke="none"
                d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25
                  C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M18.78,17.394l-1.388,1.387c-0.254,0.255-0.67,0.255-0.924,0
                  L13,15.313L9.533,18.78c-0.255,0.255-0.67,0.255-0.925-0.002L7.22,17.394c-0.253-0.256-0.253-0.669,0-0.926l3.468-3.467
                  L7.221,9.534c-0.254-0.256-0.254-0.672,0-0.925l1.388-1.388c0.255-0.257,0.671-0.257,0.925,0L13,10.689l3.468-3.468
                  c0.255-0.257,0.671-0.257,0.924,0l1.388,1.386c0.254,0.255,0.254,0.671,0.001,0.927l-3.468,3.467l3.468,3.467
                  C19.033,16.725,19.033,17.138,18.78,17.394z"
              />
            </svg>
          )}
        </div>
      </div>

      {teams.map((team) => (
        <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          expositors={expositors.filter(
            (expositor) => expositor.team === team.name
          )}
        />
      ))}
    </>
  );
}

export default App;
