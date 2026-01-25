import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Artikel() {
  return (
    <>
      <Navbar />

      {/* Section Artikel */}
      <section id="artikel" className="section">
        <h2>Artikel Populer</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '50px', lineHeight: '1.6' }}>
            Temukan berbagai artikel menarik seputar teknologi, pemrograman, dan perkembangan dunia digital. Mulai dari pengenalan Artificial Intelligence hingga panduan belajar bahasa pemrograman populer seperti Python, JavaScript, dan HTML. Cocok untuk kamu yang ingin memperluas wawasan di era digital!
        </p>
        <div className="card-grid">
          <div className="card">
            <img src="assets/ai (2).jfif" alt="Apa Itu Artificial Intelligence?" />
            <div className="card-body">
              <h3>Apa Itu Artificial Intelligence?</h3>
              <p>Kenali dasar-dasar kecerdasan buatan dan bagaimana teknologi ini mengubah dunia.</p>
              <Link to="/ai" className="btn-outline">Baca Selengkapnya</Link>
            </div>
          </div>
          <div className="card">
            <img src="assets/html.jfif" alt="Mengenal HTML" />
            <div className="card-body">
              <h3>Mengenal HTML</h3>
              <p>Mulai langkah pertama dalam dunia pemrograman web dengan memahami struktur HTML.</p>
              <Link to="/html" className="btn-outline">Baca Selengkapnya</Link>
            </div>
          </div>
          <div className="card">
            <img src="assets/internet.jfif" alt="Bagaimana Internet Bekerja?" />
            <div className="card-body">
              <h3>Bagaimana Internet Bekerja?</h3>
              <p>Pelajari perjalanan data dari komputer kamu hingga sampai ke seluruh dunia!</p>
              <Link to="/internet" className="btn-outline">Baca Selengkapnya</Link>
            </div>
          </div>
          <div className="card">
            <img src="assets/py.jfif" alt="Mengenal Python lebih dalam" />
            <div className="card-body">
              <h3>Mengenal Python lebih dalam</h3>
              <p>Mengapa Python menjadi pilihan favorit para pengembang dalam teknologi modern di seluruh dunia.</p>
              <Link to="/notfound" className="btn-outline">Baca Selengkapnya</Link>
            </div>
          </div>
          <div className="card">
            <img src="assets/java.jfif" alt="JavaScript itu apa sih?" />
            <div className="card-body">
              <h3>JavaScript itu apa sih?</h3>
              <p>Kuasai bahasa pemrograman web paling populer untuk membuat halaman kamu menjadi interaktif.</p>
              <Link to="/notfound" className="btn-outline">Baca Selengkapnya</Link>
            </div>
          </div>
          <div className="card">
            <img src="assets/dtsains.jfif" alt="Langkah Awal Belajar Data Science" />
            <div className="card-body">
              <h3>Langkah Awal Belajar Data Science</h3>
              <p>Mengenali keterampilan dasar data science sebelum memulai.</p>
              <Link to="/notfound" className="btn-outline">Baca Selengkapnya</Link>
            </div>
          </div>
          <div className="card">
            <img src="assets/cyberinternet.jfif" alt="Keamanan di Dunia Internet" />
            <div className="card-body">
              <h3>Keamanan di Dunia Internet</h3>
              <p>Menjaga keamanan di dunia internet bukan hanya tanggung jawab perusahaan teknologi tetapi juga setiap user.</p>
              <Link to="/notfound" className="btn-outline">Baca Selengkapnya</Link>
            </div>
          </div>
          <div className="card">
            <img src="assets/algoritma.jfif" alt="Algoritma Dalam Kehidupan Sehari-hari" />
            <div className="card-body">
              <h3>Algoritma Dalam Kehidupan Sehari-hari</h3>
              <p>Setiap kegiatan sehari-hari bisa dilakukan dengan algoritma agar kita bekerja dengan lebih teratur dan efisien.</p>
              <Link to="/notfound" className="btn-outline">Baca Selengkapnya</Link>
            </div>
          </div>
          <div className="card">
            <img src="assets/desain.jfif" alt="Desain Grafis" />
            <div className="card-body">
              <h3>Desain Grafis</h3>
              <p>Seni komunikasi visual yang memadukan teks, gambar, dan warna untuk menyampaikan pesan secara menarik dan efektif.</p>
              <Link to="/notfound" className="btn-outline">Baca Selengkapnya</Link>
            </div>
          </div>
          <div className="card">
            <img src="assets/IOT.jfif" alt="Komponen Utama IoT" />
            <div className="card-body">
              <h3>Komponen Utama Internet of Things (IoT)</h3>
              <p>Pelajari bagian-bagian penting IoT yang membuat perangkat pintar bisa mengumpulkan, memproses, dan bertukar data secara otomatis.</p>
              <Link to="/notfound" className="btn-outline">Baca Selengkapnya</Link>
            </div>
          </div>
          <div className="card">
            <img src="assets/uiux.jfif" alt="Mengenal UI/UX" />
            <div className="card-body">
              <h3>Mengenal Konsep UI/UX untuk Website</h3>
              <p>Menciptakan tampilan menarik, interaktif, dan pengalaman pengguna yang nyaman serta mudah digunakan.</p>
              <Link to="/notfound" className="btn-outline">Baca Selengkapnya</Link>
            </div>
          </div>
          <div className="card">
            <img src="assets/program.jfif" alt="Jenis Bahasa Pemrograman" />
            <div className="card-body">
              <h3>Apa Saja Jenis Bahasa Pemrograman?</h3>
              <p>Pelajari berbagai bahasa pemrograman, serta kelebihan singkat masing-masing untuk memahami kekuatan unik mereka.</p>
              <Link to="/notfound" className="btn-outline">Baca Selengkapnya</Link>
            </div>
          </div>
          <div className="card">
            <img src="assets/web.jfif" alt="Perjalanan Website" />
            <div className="card-body">
              <h3>Perjalanan Awal Mula Website</h3>
              <p>Menelusuri sejarah lahirnya web hingga berkembang menjadi dunia digital luas yang menghubungkan manusia di seluruh dunia.</p>
              <Link to="/notfound" className="btn-outline">Baca Selengkapnya</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Artikel