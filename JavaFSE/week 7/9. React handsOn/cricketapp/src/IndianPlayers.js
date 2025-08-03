// src/IndianPlayers.js
import React from 'react';

// Declaring arrays
const T20Players = ['Sachin1', 'Dhoni2', 'Virat3'];
const RanjiTrophyPlayers = ['Rohit4', 'Yuvaraj5', 'Raina6'];
const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

// Component to display Odd Team Players using array destructuring
export function OddPlayers([first, , third, , fifth]) {
  return (
    <div>
      <ul>
        <li>First: {first}</li>
        <li>Third: {third}</li>
        <li>Fifth: {fifth}</li>
      </ul>
    </div>
  );
}

// Component to display Even Team Players using array destructuring
export function EvenPlayers([, second, , fourth, , sixth]) {
  return (
    <div>
      <ul>
        <li>Second: {second}</li>
        <li>Fourth: {fourth}</li>
        <li>Sixth: {sixth}</li>
      </ul>
    </div>
  );
}

// Main export to display merged players and odd/even players
export default function IndianPlayersComponent() {
  return (
    <div>
      <h2>Merged Indian Players</h2>
      <ul>
        {IndianPlayers.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>
      <h3>Odd Team Players</h3>
      <OddPlayers {...[IndianPlayers]} />
      <h3>Even Team Players</h3>
      <EvenPlayers {...[IndianPlayers]} />
    </div>
  );
}
