import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Markets from './pages/Markets';
import Bet from './pages/Bet';
import DemoLanding from './pages/DemoLanding';

const styles = {
	root: {
		minHeight: '100vh',
		display: 'grid',
		placeItems: 'center',
		background: 'linear-gradient(180deg, #0b1220 0%, #0f172a 100%)',
		color: '#e5e7eb',
		fontFamily: 'system-ui, sans-serif',
		margin: 0,
		padding: 'max(16px, env(safe-area-inset-top)) 16px max(16px, env(safe-area-inset-bottom))',
	},
	main: {
		width: 'min(100%, 480px)',
		background: '#111827',
		border: '1px solid rgba(255,255,255,0.08)',
		borderRadius: '18px',
		padding: '32px 24px',
		boxShadow: '0 8px 32px rgba(34,197,94,0.08)',
		textAlign: 'center',
	},
	h1: {
		margin: '0 0 16px',
		fontSize: 'clamp(1.7rem, 5vw, 2.2rem)',
		lineHeight: 1.2,
		letterSpacing: '0.02em',
		color: '#22c55e',
	},
	p: {
		margin: '0 0 24px',
		color: '#9ca3af',
		fontSize: '1.12rem',
		lineHeight: 1.55,
	},
	pitch: {
		margin: '0 0 24px',
		color: '#e5e7eb',
		fontWeight: 600,
		fontSize: '1.18rem',
		lineHeight: 1.4,
	},
	features: {
		margin: '0 0 24px',
		padding: 0,
		listStyle: 'none',
		color: '#9ca3af',
		fontSize: '1rem',
		textAlign: 'left',
	},
	featureItem: {
		marginBottom: '8px',
		paddingLeft: '16px',
		position: 'relative',
	},
	cta: {
		display: 'inline-flex',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '56px',
		border: 0,
		borderRadius: '14px',
		background: '#22c55e',
		color: '#052e16',
		fontWeight: 700,
		fontSize: '1.12rem',
		textDecoration: 'none',
		transition: 'background 0.2s ease',
		cursor: 'pointer',
		boxShadow: '0 2px 8px rgba(34,197,94,0.12)',
	},
	nav: {
		margin: '0 0 24px',
		display: 'flex',
		gap: '12px',
		justifyContent: 'center',
	},
	navLink: {
		color: '#22c55e',
		fontWeight: 600,
		textDecoration: 'none',
		fontSize: '1.05rem',
		padding: '6px 12px',
		borderRadius: '8px',
		background: 'rgba(34,197,94,0.08)',
		transition: 'background 0.2s',
	},
};

function Landing() {
	return (
		<main style={styles.main}>
			<h1 style={styles.h1}>POLY BET</h1>
			<div style={styles.pitch}>
				La plateforme où l’info devient un jeu.<br />
				Prédisez le futur, gagnez de l’ETH, et prouvez que vous avez raison.<br />
				<span style={{color:'#16a34a'}}>Tu penses avoir raison ? Mets de l’ETH dessus.</span>
			</div>
			<ul style={styles.features}>
				<li style={styles.featureItem}>🎮 Gamification hardcore : niveaux, badges, streaks</li>
				<li style={styles.featureItem}>🧑‍🤝‍🧑 Social : profils publics, leaderboard, partage</li>
				<li style={styles.featureItem}>🎲 Marchés funs : pop culture, trends, sport, politique</li>
				<li style={styles.featureItem}>⚡ Résolution ultra fiable : oracles, vote, API</li>
				<li style={styles.featureItem}>📱 UX simplifiée : onboarding rapide, wallet abstrait</li>
			</ul>
			<p style={styles.p}>Lancez la démo sur mobile ou desktop, sans installation.</p>
			<Link style={styles.cta} to="/markets">Découvrir les marchés</Link>
		</main>
	);
}

export default function App() {
	return (
		<BrowserRouter>
			<div style={styles.root}>
				<nav style={styles.nav}>
					<Link style={styles.navLink} to="/">Accueil</Link>
					<Link style={styles.navLink} to="/markets">Marchés</Link>
					<Link style={styles.navLink} to="/bet">Paris</Link>
				</nav>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/markets" element={<Markets />} />
					<Route path="/bet" element={<Bet />} />
					<Route path="/demo" element={<DemoLanding />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}
