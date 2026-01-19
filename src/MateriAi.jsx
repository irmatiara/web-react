import "./AIPage.css";
import logo from "./assets/logo.svg";

export default function MateriAi() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <a href="/">
            <img className="logo" src={logo} alt="Logo ThinkLyttleStars" />
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Apa Itu Artificial Intelligence?</h1>
          <p>Mengupas sejarah, perkembangan, dan aplikasi AI dalam kehidupan modern.</p>
        </div>
      </section>

      <section className="materi-container">
        <h2>Sejarah Awal AI</h2>
        <p>
          Artificial Intelligence (AI) mulai diperkenalkan pada tahun 1950-an.
          Alan Turing menulis makalah{" "}
          <i>"Computing Machinery and Intelligence"</i> dengan pertanyaan:
        </p>

        <blockquote>"Can machines think?"</blockquote>

        <p>
          Pada dekade ini, para peneliti mulai menciptakan program sederhana yang
          mampu memecahkan masalah logika dan memainkan catur.
        </p>

        <h2>Era Awal dan Sistem Pakar</h2>
        <p>
          Pada tahun 1960–1970-an, muncul bahasa pemrograman AI seperti{" "}
          <b>LISP</b> dan <b>Prolog</b>.
        </p>

        <p>
          Keterbatasan hardware memicu periode stagnasi yang dikenal sebagai{" "}
          <b>AI Winter</b>.
        </p>

        <h2>Perkembangan AI Modern</h2>
        <p>
          Tahun 1997, IBM Deep Blue mengalahkan Garry Kasparov. Sejak itu,
          <b> machine learning</b> dan <b>deep learning</b> berkembang pesat.
        </p>

        <div className="fact-box">
          Fakta Menarik: AI digunakan dalam bidang kesehatan untuk diagnosis penyakit.
        </div>

        <h2>Timeline Sejarah AI</h2>
        <ul className="timeline">
          <li><b>1950-an:</b> Alan Turing</li>
          <li><b>1960-an:</b> LISP & Prolog</li>
          <li><b>1997:</b> Deep Blue vs Kasparov</li>
          <li><b>2000-an:</b> Machine Learning</li>
          <li><b>2020-an:</b> AI di kehidupan sehari-hari</li>
        </ul>

        <h2>Aplikasi AI</h2>
        <ul>
          <li>Asisten virtual</li>
          <li>Rekomendasi konten</li>
          <li>Kendaraan otonom</li>
          <li>Deteksi penipuan</li>
          <li>Robotik industri</li>
        </ul>

        <h2>Tantangan & Etika AI</h2>
        <p>
          Tantangan AI meliputi privasi data, bias algoritma, dan dampak terhadap
          lapangan pekerjaan.
        </p>

        <h2>Masa Depan AI</h2>
        <p>
          AI akan menjadi mitra manusia dalam pendidikan, kesehatan, dan riset.
        </p>

        <a href="/" className="btnKembali">Kembali ke Beranda</a>
      </section>

      <footer className="footer">
        <p>© 2025 ThinkLyttleStars. Semua hak dilindungi.</p>
      </footer>
    </>
  );
}
