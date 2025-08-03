import React from 'react';

const players = [
  { name: 'Virat', score: 100 },
  { name: 'Rohit', score: 85 },
  { name: 'Rahul', score: 55 },
  { name: 'Hardik', score: 74 },
  { name: 'Rishabh', score: 88 },
  { name: 'Shami', score: 40 },
  { name: 'Bumrah', score: 65 },
  { name: 'Ashwin', score: 50 },
  { name: 'Surya', score: 91 },
  { name: 'Ishan', score: 59 },
  { name: 'Gill', score: 45 }
];

export default function ListofPlayers() {
  // 1. Display all players
  const allPlayers = players.map((item, idx) => (
    <li key={idx}>
      Mr. {item.name}: <span>{item.score}</span>
    </li>
  ));

  // 2. Display players with score <= 70
  const filteredPlayers = players
    .filter(item => item.score <= 70)
    .map((item, idx) => (
      <li key={idx}>
        Mr. {item.name}: <span>{item.score}</span>
      </li>
    ));

  return (
    <div>
      <h2>All Players</h2>
      <ul>{allPlayers}</ul>
      <h2>List of Players having Scores less than 70</h2>
      <ul>{filteredPlayers}</ul>
    </div>
  );
}
