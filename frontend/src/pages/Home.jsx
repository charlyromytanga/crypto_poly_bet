import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h1>POLY BET</h1>
      <div className="pitch">
        La plateforme où l’info devient un jeu.<br />
        Prédisez le futur, gagnez de l’ETH, et prouvez que vous avez raison.<br />
        <span style={{color:'#16a34a'}}>Tu penses avoir raison ? Mets de l’ETH dessus.</span>
      </div>
      <ul className="features">
        <li>🎮 Gamification hardcore : niveaux, badges, streaks</li>
        <li>🧑‍🤝‍🧑 Social : profils publics, leaderboard, partage</li>
        <li>🎲 Marchés funs : pop culture, trends, sport, politique</li>
        <li>⚡ Résultats fiables et transparents</li>
        <li>📱 Inscription ultra rapide, sans prise de tête</li>
      </ul>
      <div className="muted">Lancez la démo sur mobile ou desktop, sans installation.</div>
      <Link className="cta" to="/markets">Découvrir les marchés</Link>
    </div>
  );
}

export default Home;