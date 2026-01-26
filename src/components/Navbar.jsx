import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
	const [menuAktif, setMenuAktif] = useState(false)
	const location = useLocation()
	const notFound = location.pathname === '/notfound'
	const halamanDetail = ['/ai', '/html', '/internet', '/algo']
	const detail = halamanDetail.some(path =>
		location.pathname.startsWith(path)
	)

	return (
		<nav className="navbar">
			<div className="container">
				<img className="logo" src="/assets/logo.svg" alt="" />
				{!detail && (
					<>
						<div className={`burger-menu ${menuAktif ? 'toggle' : ''}`} onClick={() => setMenuAktif(!menuAktif)}>
							<div className="bar" />
							<div className="bar" />
							<div className="bar" />
						</div>

						<ul className={`nav-links ${menuAktif ? 'active' : ''}`}>
							{notFound ? (
								<li><Link to="/artikel" className={location.pathname === '/artikel' ? 'active' : ''}>Artikel</Link></li>
							) : (
								<>
									<li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Beranda</Link></li>
									<li><Link to="/artikel" className={location.pathname === '/artikel' ? 'active' : ''}>Artikel</Link></li>
									<li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
									<li><Link to="/#kontak" className={location.hash === '#kontak' ? 'active' : ''}>Kontak</Link></li>
								</>
							)}
						</ul>
					</>
				)}
			</div>
		</nav>
	)
}

export default Navbar