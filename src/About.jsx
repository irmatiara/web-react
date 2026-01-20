import { Link } from "react-router-dom";
import { useState } from "react";

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <img className="logo" src="assets/logo.svg" alt="ThinkLyttleStars" />

          <div
            className={`burger-menu ${menuOpen ? "toggle" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/#artikel">Artikel</Link></li>
            <li><Link to="/about" className="active">About Us</Link></li>
            <li><Link to="/#kontak">Kontak</Link></li>
          </ul>
        </div>
      </nav>

      {/* Tentang 1 */}
      <div id="tentang" className="light-bg">
        <div className="section-tentang">
          <h2>Tentang ThinkLyttleStars</h2>
          <p>
            Nama <i>ThinkLyttelStars</i> berasal dari kata <i>think</i> (berpikir)
            dan <i>little stars</i> (bintang-bintang kecil).
            Karena kami percaya bahwa setiap pemikiran kecil bisa tumbuh menjadi
            cahaya besar yang menerangi dunia.
            Tempat di mana setiap bintang kecil belajar untuk bersinar lebih terang 🌟.
            <br /><br />
            Mari berjalan bersama kami. Temukan cahaya kecilmu. Belajarlah perlahan,
            dan biarkan dirimu bersinar di langit pengetahuan bersama
            <b> ThinkLyttelStars </b> 🌙💫
          </p>
        </div>
        <img src="assets/2.png" alt="Ilustrasi" />
      </div>

      {/* Tentang 2 */}
      <div
        id="tentang2"
        style={{ padding: "60px 80px", backgroundColor: "#fdfaf6" }}
      >
        <table style={{ width: "100%", marginLeft: "40px" }}>
          <tbody>
            <tr>
              <td style={{ width: "60%", verticalAlign: "top" }}>
                <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>
                  Mengapa harus ThinkLyttelStars?
                </h2>

                <table style={{ width: "100%", borderSpacing: "0 18px" }}>
                  <tbody>
                    {[
                      {
                        icon: "fa-house",
                        title: "Ruang Belajar Menenangkan",
                        desc:
                          "Tempat di mana setiap bintang kecil bisa berhenti sejenak dan belajar.",
                      },
                      {
                        icon: "fa-laptop-code",
                        title: "Edukasi Teknologi Menyenangkan",
                        desc:
                          "Belajar dunia digital dengan cara sederhana.",
                      },
                      {
                        icon: "fa-lightbulb",
                        title: "Menghargai Potensi Unik",
                        desc:
                          "Setiap ide dan proses belajar itu berarti.",
                      },
                      {
                        icon: "fa-person-rays",
                        title: "Bersinar Bersama",
                        desc:
                          "Belajar perlahan dan bertumbuh bersama.",
                      },
                    ].map((item, i) => (
                      <tr key={i}>
                        <td style={{ width: "60px", textAlign: "center" }}>
                          <div
                            style={{
                              backgroundColor: "#F3D58D",
                              color: "#2f4a7d",
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <i className={`fa-solid ${item.icon}`}></i>
                          </div>
                        </td>
                        <td>
                          <p><b>{item.title}</b></p>
                          <p>{item.desc}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>

              <td style={{ textAlign: "center" }}>
                <img src="assets/3.png" alt="Ilustrasi" width="500" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Tentang 3 */}
      <div id="tentang" className="light-bg">
        <div className="section-tentang">
          <p>
            ThinkLyttelStars hadir sebagai ruang kecil yang menenangkan.
            Platform edukasi teknologi yang sederhana, hangat, dan manusiawi.
            <br /><br />
            Kami percaya belajar bukan tekanan, tapi perjalanan lembut menuju
            penemuan diri 💫
          </p>
        </div>
        <img src="assets/4.png" alt="Ilustrasi" />
      </div>

      <Link to="/" className="btnKembali">
        Kembali ke Beranda
      </Link>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 ThinkLyttleStars.</p>
      </footer>
    </>
  );
}