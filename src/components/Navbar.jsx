import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const location = useLocation();

	return (
		<nav className="navbar">
			<div className="container">
				<img className="logo" src="/assets/logo.svg" alt="" />
				<div
					className={`burger-menu ${menuOpen ? "toggle" : ""}`}
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<div className="bar" />
					<div className="bar" />
					<div className="bar" />
				</div>
				<ul className={`nav-links ${menuOpen ? "active" : ""}`}>
					<li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Beranda</Link></li>
					<li><Link to="/artikel" className={location.pathname === '/artikel' ? 'active' : ''}>Artikel</Link></li>
					<li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
					<li><Link to="/#kontak" className={location.hash === '#kontak' ? 'active' : ''}>Kontak</Link></li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar