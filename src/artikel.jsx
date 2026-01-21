import { Link } from "react-router-dom";
import { useState } from "react"

function Artikel() {
  const [menuAktif, setMenuAktif] = useState(false)

  function toggleMenu() {
    setMenuAktif(!menuAktif)
  }

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <img className="logo" src="assets/logo.svg" alt="logo" />
          <div className="burger-menu" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`nav-links ${menuAktif ? "active" : ""}`}>
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/artikel" className="active">Artikel</Link></li>
            <li><a href="about.html">About Us</a></li>
						<li><Link to="/#kontak">Kontak</Link></li>
          </ul>
        </div>
      </nav>

      {/* Section Artikel */}
      <section id="artikel" className="section">
        <h2>Artikel Populer</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '50px', lineHeight: '1.6' }}>
            Temukan berbagai artikel menarik seputar teknologi, pemrograman, dan perkembangan dunia digital.
            Mulai dari pengenalan Artificial Intelligence hingga panduan belajar bahasa pemrograman populer
            seperti Python, JavaScript, dan HTML. Cocok untuk kamu yang ingin memperluas wawasan di era digital!
        </p>
        <div className="card-grid">
          <div className="card">
            <img src="assets/ai (2).jfif" alt="Apa Itu Artificial Intelligence?" />
            <div className="card-body">
              <h3>Apa Itu Artificial Intelligence?</h3>
              <p>Kenali dasar-dasar kecerdasan buatan dan bagaimana teknologi ini mengubah dunia.</p>
              <Link to="/MateriAi" className="btn-outline">Baca Selengkapnya</Link>
            </div>
          </div>
          <div className="card">
            <img src="assets/html.jfif" alt="Mengenal HTML" />
            <div className="card-body">
              <h3>Mengenal HTML</h3>
              <p>Mulai langkah pertama dalam dunia pemrograman web dengan memahami struktur HTML.</p>
              <Link to="/index_html" className="btn-outline">Baca Selengkapnya</Link>
            </div>
          </div>
          <div className="card">
            <img src="assets/internet.jfif" alt="Bagaimana Internet Bekerja?" />
            <div className="card-body">
              <h3>Bagaimana Internet Bekerja?</h3>
              <p>Pelajari perjalanan data dari komputer kamu hingga sampai ke seluruh dunia!</p>
              <Link to="/index_internet" className="btn-outline">Baca Selengkapnya</Link>
            </div>
          </div>
          <div className="card">
            <img src="assets/py.jfif" alt="Mengenal Python lebih dalam" />
            <div className="card-body">
              <h3>Mengenal Python lebih dalam</h3>
              <p>Mengapa Python menjadi pilihan favorit para pengembang dalam teknologi modern di seluruh dunia.</p>
              <Link to="/index_python" className="btn-outline">Baca Selengkapnya</Link>
            </div>
          </div>
          <div className="card">
            <img src="assets/java.jfif" alt="JavaScript itu apa sih?" />
            <div className="card-body">
              <h3>JavaScript itu apa sih?</h3>
              <p>Kuasai bahasa pemrograman web paling populer untuk membuat halaman kamu menjadi interaktif.</p>
              <Link to="/index_javascript" className="btn-outline">Baca Selengkapnya</Link>
            </div>
          </div>
          <div className="card">
            <img src="assets/dtsains.jfif" alt="Langkah Awal Belajar Data Science" />
            <div className="card-body">
              <h3>Langkah Awal Belajar Data Science</h3>
              <p>Mengenali keterampilan dasar data science sebelum memulai.</p>
              <Link to="/index_data" className="btn-outline">Baca Selengkapnya</Link>
            </div>
          </div>
          <div className="card">
            <img src="assets/cyberinternet.jfif" alt="Keamanan di Dunia Internet" />
            <div className="card-body">
              <h3>Keamanan di Dunia Internet</h3>
              <p>Menjaga keamanan bukan hanya tanggung jawab perusahaan, tapi juga user.</p>
              <Link to="/index_keamanan" className="btn-outline">Baca Selengkapnya</Link>
            </div>
          </div>
          <div className="card">
            <img src="assets/algoritma.jfif" alt="Algoritma Dalam Kehidupan Sehari-hari" />
            <div className="card-body">
              <h3>Algoritma Dalam Kehidupan Sehari-hari</h3>
              <p>Setiap kegiatan bisa dilakukan dengan algoritma.</p>
              <Link to="/index_algoritma" className="btn-outline">Baca Selengkapnya</Link>
            </div>
          </div>
          <div className="card">
            <img src="assets/desain.jfif" alt="Desain Grafis" />
            <div className="card-body">
              <h3>Desain Grafis</h3>
              <p>Seni komunikasi visual yang menarik.</p>
              <Link to="/index_desaingrafis" className="btn-outline">Baca Selengkapnya</Link>
            </div>
          </div>
          <div className="card">
            <img src="assets/IOT.jfif" alt="Komponen Utama IoT" />
            <div className="card-body">
              <h3>Komponen Utama IoT</h3>
              <p>Bagian penting IoT agar perangkat bisa bertukar data.</p>
              <Link to="/index_IOT" className="btn-outline">Baca Selengkapnya</Link>
            </div>
          </div>
          <div className="card">
            <img src="assets/uiux.jfif" alt="Mengenal UI/UX" />
            <div className="card-body">
              <h3>Mengenal UI/UX</h3>
              <p>Menciptakan tampilan menarik & nyaman.</p>
              <Link to="/index_uiux" className="btn-outline">Baca Selengkapnya</Link>
            </div>
          </div>
          <div className="card">
            <img src="assets/program.jfif" alt="Jenis Bahasa Pemrograman" />
            <div className="card-body">
              <h3>Jenis Bahasa Pemrograman</h3>
              <p>Pelajari berbagai bahasa pemrograman.</p>
              <Link to="/index_bprogram" className="btn-outline">Baca Selengkapnya</Link>
            </div>
          </div>
          <div className="card">
            <img src="assets/web.jfif" alt="Perjalanan Website" />
            <div className="card-body">
              <h3>Perjalanan Website</h3>
              <p>Sejarah lahirnya web.</p>
              <Link to="/index_web" className="btn-outline">Baca Selengkapnya</Link>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>© 2025 ThinkLyttleStars.</p>
      </footer>
    </>
  )
}

export default Artikel