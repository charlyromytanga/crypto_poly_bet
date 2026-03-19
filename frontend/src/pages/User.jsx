import React from 'react';

function User() {
  return (
    <div style={{padding: '32px'}}>
      <h2>Espace Utilisateur</h2>
      <p>Connectez votre wallet, suivez vos paris, gagnez des badges et grimpez dans le leaderboard !</p>
      <button style={{background:'#22c55e',color:'#052e16',border:'none',borderRadius:'8px',padding:'12px 24px',fontWeight:'bold',fontSize:'1rem',cursor:'pointer'}}>Connecter mon wallet</button>
    </div>
  );
}

export default User;