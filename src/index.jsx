import { useState } from 'react'
import './App.css'

function Home() {
	return (
		<>
			<nav className="navbar">
				<div className="container">
					<img className="logo" src="/assets/logo.svg" alt="" srcSet="" />
					<div className="burger-menu">
						<div className="bar" />
						<div className="bar" />
						<div className="bar" />
					</div>
					<ul className="nav-links">
						<li><a href="index.html" className="active">Beranda</a></li>
						<li><a href="artikel.html">Artikel</a></li>
						<li><a href="about.html">About Us</a></li>
						<li><a href="index.html#kontak">Kontak</a></li>
					</ul>
				</div>
			</nav>
			<section className="hero">
				<img src="/assets/1.png" alt="" srcSet="" />
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
							<p>Kenali dasar-dasar kecerdasan buatan dan bagaimana teknologi inimengubah dunia.</p>
							<a href="index_ai.html" className="btn-outline">Baca Selengkapnya</a>
						</div>
					</div>
					<div className="card">
						<img src="/assets/html.jfif" alt="Coding" />
						<div className="card-body">
							<h3>Mengenal HTML</h3>
							<p>Mulai langkah pertama dalam dunia pemrograman web dengan memahami struktur HTML.</p>
							<a href="index_html.html" className="btn-outline">Baca Selengkapnya</a>
						</div>
					</div>
					<div className="card">
						<img src="/assets/internet.jfif" alt="Internet" />
						<div className="card-body">
							<h3>Bagaimana Internet Bekerja?</h3>
							<p>Pelajari perjalanan data dari komputer kamu hingga sampai ke seluruh dunia!</p>
							<a href="index_internet.html" className="btn-outline">Baca Selengkapnya</a>
						</div>
					</div>
					<a href="artikel.html" className="btn-outline" style={{ marginLeft: "auto", display: "block", width: "fit-content" }}>Artikel Lainnya</a>
				</div>
			</section>
			<section id="kontak" className="section">
				<h2>Contact Us</h2>
				<form name="contact-form" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 15}}>
					<div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: 400}}>
						<label htmlFor="name" style={{ fontSize: "1.1rem" }}>Nama Lengkap</label>
						<input type="text" id="name" name="nama" style={{width: 250, padding: "8px 10px", border: "1px solid #ccc", borderRadius: 4, fontSize: "1rem"}}/>
					</div>
					<div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: 400}}>
						<label htmlFor="email" style={{ fontSize: "1.1rem" }}>Email</label>
						<input type="email" id="email" name="email" style={{width: 250, padding: "8px 10px", border: "1px solid #ccc", borderRadius: 4, fontSize: "1rem"}}/>
					</div>
					<div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: 400}}>
						<label htmlFor="pesan" style={{ fontSize: "1.1rem" }}>Pesan</label>
						<textarea id="pesan" name="pesan" rows={3} style={{width: 250, padding: "8px 10px", border: "1px solid #ccc", borderRadius: 4, fontSize: "1rem", resize: "none"}} defaultValue={""}/>
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