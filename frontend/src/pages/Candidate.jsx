import React from 'react';

function Candidate() {
  return (
    <div style={{padding:'32px'}}>
      <h2>Proposer un marché</h2>
      <p>Proposez un événement fun ou sérieux : pop culture, politique, sport, tech.<br />
      Les propositions sont validées par la communauté et les oracles.</p>
      <button style={{background:'#22c55e',color:'#052e16',border:'none',borderRadius:'8px',padding:'12px 24px',fontWeight:'bold',fontSize:'1rem',cursor:'pointer'}}>Proposer un marché</button>
    </div>
  );
}

export default Candidate;