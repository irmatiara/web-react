import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function Home() {
	const location = useLocation()

	useEffect(() => {
		if (location.hash === '#kontak') {
			document.getElementById('kontak')?.scrollIntoView({
				behavior: 'smooth',
			})
		} else {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
		}
	}, [location])


	return (
		<>
			<nav className="navbar">
				<div className="container">
					<img className="logo" src="/assets/logo.svg" alt="" />
					<div className="burger-menu">
						<div className="bar" />
						<div className="bar" />
						<div className="bar" />
					</div>
					<ul className="nav-links">
						<li><Link to="/" className="active">Beranda</Link></li>
						<li><Link to="/artikel">Artikel</Link></li>
						<li><a href="about.html">About Us</a></li>
						<li><Link to="/#kontak">Kontak</Link></li>
					</ul>
				</div>
			</nav>

			<section className="hero">
				<img src="/assets/1.png" alt="" />
				<div className="hero-content">
					<h1>Belajar Teknologi Jadi Mudah</h1>
					<p>
						ThinkLyttleStars adalah ruang belajar yang sederhana dan ramah, di mana setiap artikel membantu kamu memahami dunia digital dengan cara yang ringan.
						Nggak perlu waktu lama, cukup luangkan beberapa menit untuk membaca dan kamu akan mendapat wawasan baru yang bermanfaat untuk keseharianmu.
					</p>
				</div>
			</section>

			<section id="artikel" className="section">
				<h2 style={{ paddingBottom: 30 }}>Artikel Populer</h2>
				<div className="card-grid">
					<div className="card">
						<img src="/assets/ai (2).jfif" alt="AI" />
						<div className="card-body">
							<h3>Apa Itu Artificial Intelligence?</h3>
							<p>Kenali dasar-dasar kecerdasan buatan dan bagaimana teknologi ini mengubah dunia.</p>
							<Link to="/ai" className="btn-outline">Baca Selengkapnya</Link>
						</div>
					</div>

					<div className="card">
						<img src="/assets/html.jfif" alt="Coding" />
						<div className="card-body">
							<h3>Mengenal HTML</h3>
							<p>Mulai langkah pertama dalam dunia pemrograman web dengan memahami struktur HTML.</p>
							<Link to="/html" className="btn-outline">Baca Selengkapnya</Link>
						</div>
					</div>

					<div className="card">
						<img src="/assets/internet.jfif" alt="Internet" />
						<div className="card-body">
							<h3>Bagaimana Internet Bekerja?</h3>
							<p>Pelajari perjalanan data dari komputer kamu hingga sampai ke seluruh dunia!</p>
							<Link to="/internet" className="btn-outline">Baca Selengkapnya</Link>
						</div>
					</div>
					<a href="artikel.html" className="btn-outline" style={{ marginLeft: 'auto', display: 'block', width: 'fit-content' }}>Artikel Lainnya</a>
				</div>
			</section>

			<section id="kontak" className="section">
				<h2>Contact Us</h2>
				<form name="contact-form" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 15 }}>
					<div style={{ display: 'flex', justifyContent: 'space-between', width: 400 }}>
						<label htmlFor="name">Nama Lengkap</label>
						<input type="text" id="name" name="nama" style={{ width: 250 }} />
					</div>

					<div style={{ display: 'flex', justifyContent: 'space-between', width: 400 }}>
						<label htmlFor="email">Email</label>
						<input type="email" id="email" name="email" style={{ width: 250 }} />
					</div>

					<div style={{ display: 'flex', justifyContent: 'space-between', width: 400 }}>
						<label htmlFor="pesan">Pesan</label>
						<textarea id="pesan" name="pesan" rows={3} style={{ width: 250 }} />
					</div>

					<button type="submit" className="btn-primary">Kirim</button>
				</form>
			</section>

			<footer className="footer">
				<p>© 2025 ThinkLyttleStars.</p>
			</footer>
		</>
	)
}

export default Home