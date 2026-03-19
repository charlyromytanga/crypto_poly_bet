import React from 'react';

function Admin() {
  return (
    <div style={{padding: '32px'}}>
      <h2>Admin</h2>
      <p>Gestion des marchés, validation des résultats, monitoring des oracles.</p>
      <ul>
        <li>Créer/fermer un marché</li>
        <li>Résoudre un pari</li>
        <li>Voir les logs des oracles</li>
      </ul>
    </div>
  );
}

export default Admin;