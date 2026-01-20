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

          {/* TOMBOL KEMBALI */}
          <Link to="/" className="btnKembali">
            Kembali ke Beranda
          </Link>
        </div>
      </nav>

      {/* Section Artikel */}
      <section id="artikel" className="section">
        <h2>Artikel Populer</h2>

        <div className="card-grid">
          {dataArtikel.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.gambar} alt={item.judul} />

              <div className="card-body">
                <h3>{item.judul}</h3>
                <p>{item.deskripsi}</p>

                {/* LINK ROUTER */}
                <Link to={item.link} className="btn-outline">
                  Baca Selengkapnya
                </Link>

              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 ThinkLyttleStars.</p>
      </footer>
    </>
  )
}

export default Artikel

const dataArtikel = [
  {
    judul: "Apa Itu Artificial Intelligence?",
    deskripsi: "Kenali dasar-dasar kecerdasan buatan dan bagaimana teknologi ini mengubah dunia.",
    gambar: "assets/ai (2).jfif",
    link: "/index_ai"
  },
  {
    judul: "Mengenal HTML",
    deskripsi: "Mulai langkah pertama dalam dunia pemrograman web dengan memahami struktur HTML.",
    gambar: "assets/html.jfif",
    link: "/index_html"
  },
  {
    judul: "Bagaimana Internet Bekerja?",
    deskripsi: "Pelajari perjalanan data dari komputer kamu hingga sampai ke seluruh dunia!",
    gambar: "assets/internet.jfif",
    link: "/index_internet"
  },
  {
    judul: "Mengenal Python lebih dalam",
    deskripsi: "Mengapa Python menjadi pilihan favorit para pengembang dalam teknologi modern di seluruh dunia.",
    gambar: "assets/py.jfif",
    link: "/index_python"
  },
  {
    judul: "JavaScript itu apa sih?",
    deskripsi: "Kuasai bahasa pemrograman web paling populer untuk membuat halaman kamu menjadi interaktif.",
    gambar: "assets/java.jfif",
    link: "/index_javascript"
  },
  {
    judul: "Langkah Awal Belajar Data Science",
    deskripsi: "Mengenali keterampilan dasar data science sebelum memulai.",
    gambar: "assets/dtsains.jfif",
    link: "/index_data"
  },
  {
    judul: "Keamanan di Dunia Internet",
    deskripsi: "Menjaga keamanan bukan hanya tanggung jawab perusahaan, tapi juga user.",
    gambar: "assets/cyberinternet.jfif",
    link: "/index_keamanan"
  },
  {
    judul: "Algoritma Dalam Kehidupan Sehari-hari",
    deskripsi: "Setiap kegiatan bisa dilakukan dengan algoritma.",
    gambar: "assets/algoritma.jfif",
    link: "/index_algoritma"
  },
  {
    judul: "Desain Grafis",
    deskripsi: "Seni komunikasi visual yang menarik.",
    gambar: "assets/desain.jfif",
    link: "/index_desaingrafis"
  },
  {
    judul: "Komponen Utama IoT",
    deskripsi: "Bagian penting IoT agar perangkat bisa bertukar data.",
    gambar: "assets/IOT.jfif",
    link: "/index_IOT"
  },
  {
    judul: "Mengenal UI/UX",
    deskripsi: "Menciptakan tampilan menarik & nyaman.",
    gambar: "assets/uiux.jfif",
    link: "/index_uiux"
  },
  {
    judul: "Jenis Bahasa Pemrograman",
    deskripsi: "Pelajari berbagai bahasa pemrograman.",
    gambar: "assets/program.jfif",
    link: "/index_bprogram"
  },
  {
    judul: "Perjalanan Website",
    deskripsi: "Sejarah lahirnya web.",
    gambar: "assets/web.jfif",
    link: "/index_web"
  }
]

