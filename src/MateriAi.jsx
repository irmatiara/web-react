import { Link } from "react-router-dom";
import { useState } from "react";

export default function MateriAi() {
	return (
		<>
			<nav className="navbar">
				<div className="container">
					<Link to="/">
						<img className="logo" src="/assets/logo.svg" alt="" srcSet="" />
					</Link>
				</div>
			</nav>
			<section className="hero">
				<div className="hero-content">
					<h1>Apa Itu Artificial Intelligence?</h1>
					<p>
						Mengupas sejarah, perkembangan, dan aplikasi AI dalam kehidupan modern.
					</p>
				</div>
			</section>
			<section className="materi-container">
				<h2>Sejarah Awal AI</h2>
				<p>
					Artificial Intelligence (AI) mulai diperkenalkan pada tahun 1950-an. Alan
					Turing, seorang matematikawan dan ilmuwan komputer Inggris, menulis
					makalah legendaris bertajuk <i>"Computing Machinery and Intelligence"</i>{" "}
					yang mengajukan pertanyaan:
				</p>
				<blockquote>"Can machines think?"</blockquote>
				<p>
					Pada dekade ini, para peneliti mulai menciptakan program sederhana yang
					mampu memecahkan masalah logika, memainkan catur, dan meniru beberapa
					kemampuan manusia. Konsep dasar AI pada masa ini masih bersifat teoretis,
					dan kemampuan komputer sangat terbatas.
				</p>
				<h2>Era Awal dan Sistem Pakar</h2>
				<p>
					Pada tahun 1960-an hingga 1970-an, muncul penelitian AI yang lebih
					spesifik, termasuk bahasa pemrograman AI seperti LISP dan Prolog. Para
					peneliti mulai membuat <b>sistem pakar (expert systems)</b> untuk membantu
					pengambilan keputusan dalam bidang medis dan bisnis. Sistem ini
					menggunakan aturan logika untuk meniru cara berpikir manusia.
				</p>
				<p>
					Meskipun memiliki potensi besar, keterbatasan hardware dan ekspektasi yang
					terlalu tinggi menimbulkan periode stagnasi yang dikenal sebagai{" "}
					<b>AI Winter</b>. Pada era ini, pendanaan berkurang dan banyak proyek AI
					terhenti karena hasilnya tidak sesuai harapan.
				</p>
				<h2>Perkembangan AI Modern</h2>
				<p>
					Tahun 1980-an hingga 1990-an menandai kebangkitan AI berkat komputer yang
					lebih cepat dan algoritma yang lebih canggih. IBM Deep Blue mengalahkan
					juara catur dunia Garry Kasparov pada tahun 1997, menjadi simbol kemampuan
					AI yang nyata. Mulai muncul juga <b>machine learning</b>, di mana komputer
					dapat belajar dari data daripada hanya mengikuti aturan yang sudah
					ditulis.
				</p>
				<p>
					Di awal abad ke-21, <b>deep learning</b> dan <b>neural networks</b>{" "}
					membuat AI semakin kuat dalam pengenalan gambar, suara, dan bahasa.
					Internet dan ketersediaan data besar mempercepat kemajuan AI, memungkinkan
					sistem untuk memprediksi perilaku, menganalisis tren, dan membuat
					rekomendasi.
				</p>
				<div className="fact-box">
					Fakta Menarik: AI kini digunakan dalam bidang kesehatan untuk mendiagnosis
					penyakit lebih cepat dan akurat!
				</div>
				<h2>Timeline Sejarah AI</h2>
				<ul className="timeline">
					<li>
						<b>1950-an:</b> Alan Turing memperkenalkan pertanyaan "Can machines
						think?"
					</li>
					<li>
						<b>1960-an:</b> LISP dan Prolog mulai digunakan untuk penelitian AI.
					</li>
					<li>
						<b>1970-1980:</b> AI Winter, fokus pada sistem pakar.
					</li>
					<li>
						<b>1997:</b> IBM Deep Blue kalahkan Garry Kasparov.
					</li>
					<li>
						<b>2000-an:</b> Machine Learning dan Deep Learning mulai populer.
					</li>
					<li>
						<b>2010-an:</b> AI digunakan dalam asisten virtual, kendaraan otonom,
						analisis data besar.
					</li>
					<li>
						<b>2020-an:</b> AI semakin cerdas, adaptif, dan menjadi bagian dari
						kehidupan sehari-hari.
					</li>
				</ul>
				<h2>Aplikasi AI di Kehidupan Sehari-hari</h2>
				<p>
					AI kini tidak lagi terbatas pada laboratorium. Penggunaan AI telah
					merambah ke banyak aspek kehidupan manusia:
				</p>
				<ul>
					<li>
						Asisten digital: Siri, Google Assistant, Alexa, membantu aktivitas
						sehari-hari.
					</li>
					<li>
						Rekomendasi konten: Netflix, YouTube, Spotify menyarankan film, video,
						dan musik sesuai preferensi.
					</li>
					<li>
						Kendaraan otonom dan sistem navigasi pintar: mobil self-driving dan GPS
						lebih efisien.
					</li>
					<li>
						Pendeteksi penipuan dalam transaksi perbankan: AI mengenali pola
						transaksi mencurigakan.
					</li>
					<li>
						Robotik dan otomatisasi industri: meningkatkan efisiensi dan keamanan di
						pabrik.
					</li>
					<li>
						Penerjemah bahasa otomatis: Google Translate memudahkan komunikasi
						lintas bahasa.
					</li>
				</ul>
				<h2>Tantangan dan Etika AI</h2>
				<p>
					Seiring berkembangnya AI, muncul tantangan baru seperti keamanan data,
					privasi, bias algoritma, dan penggantian pekerjaan manusia. Pengembangan
					AI harus memperhatikan <b>AI ethics</b>, memastikan teknologi digunakan
					secara aman, adil, dan transparan.
				</p>
				<h2>Masa Depan AI</h2>
				<p>
					AI diprediksi akan semakin adaptif, mampu mempelajari lingkungan, dan
					bekerja sama dengan manusia. Dalam 10-20 tahun ke depan, AI akan menjadi
					bagian penting dari pendidikan, kesehatan, transportasi, seni, dan
					penelitian ilmiah. Kolaborasi antara manusia dan AI diharapkan menciptakan
					dunia yang lebih efisien, kreatif, dan inklusif.
				</p>
				<Link to="/" className="btnKembali">Kembali ke Beranda</Link>
			</section>
			<footer className="footer">
				<p>© 2025 ThinkLyttleStars. Semua hak dilindungi.</p>
			</footer>
		</>
	);
}
