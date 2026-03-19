import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{padding: '32px'}}>
      <h2>POLY BET</h2>
      <p>Bienvenue sur la plateforme où l’info devient un jeu.<br />
      Prédisez le futur, gagnez de l’ETH, et prouvez que vous avez raison.</p>
      <ul>
        <li>Marchés variés : sport, politique, pop culture, tech</li>
        <li>Gamification : niveaux, badges, streaks</li>
        <li>Leaderboards publics</li>
        <li>Profils utilisateurs</li>
        <li>Partage social natif</li>
      </ul>
      <Link className="cta" to="/markets">Découvrir les marchés</Link>
    </div>
  );
}

export default Home;