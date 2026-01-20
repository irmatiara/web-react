import { Link } from "react-router-dom";

export default function MateriHtml() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link to="/">
            <img
              className="logo"
              src="assets/logo.svg"
              alt="Logo ThinkLyttleStars"
            />
          </Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Mengenal HTML</h1>
          <p>
            Membahas Sejarah HTML, Pengertian HTML, Cara Kerja HTML, hingga Fungsi
            HTML
          </p>
        </div>
      </section>

      <section className="materi-container">
        <h2>Sejarah HTML</h2>
        <p>
          HTML pertama kali diciptakan oleh Tim Berners-Lee pada tahun 1991 saat ia
          bekerja di CERN (European Organization for Nuclear Research) di Swiss.
        </p>

        <pre>
          <code>
{`<html>
<head>
  <title>Contoh Halaman</title>
</head>
<body>
  <p>Halaman web pertama di dunia!</p>
</body>
</html>`}
          </code>
        </pre>

        <ul className="timeline">
          <li><b>1993 - HTML 1.0</b> dirilis ke publik</li>
          <li><b>1995 - HTML 2.0</b> menambahkan tag form</li>
          <li><b>1997 - HTML 3.2</b> memperkenalkan tabel dan font</li>
          <li><b>1999 - HTML 4.01</b> jadi standar awal 2000-an</li>
          <li><b>2014 - HTML5</b> membawa video, audio, canvas, dan elemen semantik</li>
        </ul>

        <h2>Pengertian HTML</h2>
        <p>
          HTML (HyperText Markup Language) adalah bahasa markup standar untuk
          membuat struktur halaman web.
        </p>

        <h2>Bagaimana Cara Kerja HTML?</h2>
        <ul className="timeline">
          <li>Menulis kode HTML dalam file .html</li>
          <li>Browser membaca kode tersebut</li>
          <li>Browser menampilkan hasilnya ke layar</li>
        </ul>

        <section className="contoh-html">
          <h3>Contoh Kode HTML</h3>
          <pre>
            <code>
{`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Belajar HTML</title>
</head>
<body>
  <h1>Halo Dunia!</h1>
  <p>HTML itu mudah dan menyenangkan 💖</p>
</body>
</html>`}
            </code>
          </pre>

          <div className="hasil">
            <h1>Halo Dunia!</h1>
            <p>HTML itu mudah dan menyenangkan 💖</p>
          </div>
        </section>

        <h2>Fungsi Utama HTML</h2>
        <h3>Fungsi-fungsi HTML:</h3>

        <ul className="timeline">
          <li><b>Menyusun struktur halaman web</b></li>
          <li><b>Menampilkan konten ke browser</b></li>
          <li><b>Menghubungkan antar halaman</b></li>
          <li><b>Dasar CSS & JavaScript</b></li>
          <li><b>Membantu SEO</b></li>
          <li><b>Fondasi pengembangan web modern</b></li>
        </ul>

        <section className="kesimpulan">
          <h2>🌟 Kesimpulan</h2>
          <p>
            <strong>HTML</strong> adalah langkah pertama membuat website.
          </p>
          <p>
            Tanpa HTML, internet tidak akan ada 🌍💫
          </p>
        </section>

        <Link to="/" className="btnKembali">
          Kembali ke Beranda
        </Link>
      </section>

      <footer className="footer">
        <p>© 2025 ThinkLyttleStars. Semua hak dilindungi.</p>
      </footer>
    </>
  );
}
