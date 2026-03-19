import React from 'react';

function Bet() {
  return (
    <div style={{padding:'32px'}}>
      <h2>Parier sur un événement</h2>
      <p>Choisissez un marché, mettez de l’ETH, et prédisez le résultat.<br />
      UI type TikTok / swipe : “Yes / No” rapide.</p>
      <button style={{background:'#22c55e',color:'#052e16',border:'none',borderRadius:'8px',padding:'12px 24px',fontWeight:'bold',fontSize:'1rem',cursor:'pointer'}}>Parier maintenant</button>
      <div style={{marginTop:'24px',color:'#9ca3af',fontSize:'1rem'}}>
        <strong>UX simplifiée :</strong> Connexion ultra simple, wallet abstrait, onboarding rapide.
      </div>
    </div>
  );
}

export default Bet;