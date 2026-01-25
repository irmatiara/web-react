import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      {/* Tentang 1 */}
      <div id="tentang" className="light-bg">
        <div className="section-tentang">
          <h2>Tentang ThinkLyttleStars</h2>
          <p>
            Nama <i>ThinkLyttelStars</i> berasal dari kata <i>think</i> (berpikir)
            dan <i>little stars</i> (bintang-bintang kecil).
            Karena kami percaya bahwa setiap pemikiran kecil bisa tumbuh menjadi
            cahaya besar yang menerangi dunia.
            Tempat di mana setiap bintang kecil belajar untuk bersinar lebih terang. Disini, setiap ide kecil dihargai, setiap langkah belajar dirayakan, 
            dan setiap bintang seperti kamu dipandu untuk menemukan cahaya terbaik 🌟.
            Mari berjalan bersama kami. Temukan cahaya kecilmu. Belajarlah perlahan, dengan hati yang terbuka,
            dan biarkan dirimu bersinar di langit yang luas pengetahuan bersama kami di
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
                          "ThinkLyttelStars adalah tempat di mana setiap bintang kecil bisa berhenti sejenak, berpikir dan belajar.",
                      },
                      {
                        icon: "fa-laptop-code",
                        title: "Edukasi Teknologi Sederhana & Menyenangkan",
                        desc:
                          "Membantu siapapun memahami dunia digital dengan cara yang mudah dipahami.",
                      },
                      {
                        icon: "fa-lightbulb",
                        title: "Menghargai Potensi Unik",
                        desc:
                          "Setiap ide dan langkah belajar dihargai, menumbuhkan kreativitas, empati dan kepekaan",
                      },
                      {
                        icon: "fa-person-rays",
                        title: "Bersinar Bersama",
                        desc:
                          "Mari belajar perlahan, temukan cahaya kecilmu, dan bersinar di langit pengetahuan bersama ThinkLyttelStars.",
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
      <Footer />
    </>
  );
}