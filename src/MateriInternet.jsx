import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function MateriInternet() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <h1>Bagaimana Internet Bekerja?</h1>
          <p>Memahami perjalanan data dari perangkatmu hingga ke seluruh dunia.</p>
        </div>
      </section>

      <section className="materi-container">
        <h2>Pengenalan Internet</h2>
        <p>
          Internet adalah jaringan global yang menghubungkan jutaan komputer, server, dan perangkat lainnya di seluruh dunia.
          Dengan internet, kita dapat mengirim informasi, berkomunikasi, mengakses layanan digital, dan mendapatkan informasi dalam hitungan detik.
        </p>
        <p>
          Internet menggunakan serangkaian protokol komunikasi standar yang memungkinkan perangkat dengan sistem berbeda untuk saling terhubung dan bertukar data.
        </p>

        <h2>Sejarah dan Perkembangan Internet</h2>
        <p>
          Internet lahir dari proyek ARPANET pada tahun 1969 di Amerika Serikat. Tujuan awalnya adalah menghubungkan komputer penelitian agar dapat berbagi informasi.
          Awal 1980-an, TCP/IP menjadi standar komunikasi, memungkinkan pertumbuhan jaringan global.
          Tahun 1990-an, World Wide Web (WWW) diperkenalkan oleh Tim Berners-Lee, membuat internet lebih mudah diakses oleh masyarakat luas.
        </p>
        <div className="fact-box">
          Fakta Menarik: Pada 1993, browser pertama yang populer, Mosaic, membuat internet mulai dikenal oleh masyarakat umum.
        </div>

        <h2>Cara Kerja Internet</h2>
        <p>
          Internet bekerja seperti jaringan surat elektronik. Ketika kamu mengakses website atau mengirim data, informasi dipecah menjadi paket data dan dikirim melalui jaringan hingga tujuan.
        </p>
        <ul>
          <li><b>Perangkat Pengguna:</b> Komputer, smartphone, tablet mengirim permintaan data.</li>
          <li><b>Router dan ISP:</b> Paket data melewati router dan penyedia layanan internet (ISP) menuju server tujuan.</li>
          <li><b>Server:</b> Server web menerima permintaan, memproses, dan mengirim kembali paket data ke pengguna.</li>
          <li><b>Paket Data:</b> Data dipecah menjadi paket kecil, masing-masing paket bisa melalui jalur berbeda, dan kemudian dirangkai kembali di tujuan.</li>
        </ul>

        <h2>Protokol, IP, dan DNS</h2>
        <p>
          <b>Protokol</b> adalah aturan komunikasi antar perangkat. Contoh: HTTP/HTTPS untuk website, SMTP untuk email.
        </p>
        <p>
          Setiap perangkat memiliki <b>IP address</b> unik, seperti alamat rumah, agar data dapat dikirim ke tempat yang tepat.
          <b>DNS (Domain Name System)</b> berfungsi mengubah nama domain (misal thinklyttlestars.id) menjadi IP address.
        </p>

        <h2>Routing dan Jaringan</h2>
        <p>
          Paket data tidak selalu melewati jalur yang sama. <b>Router</b> menentukan jalur tercepat dan teraman menuju tujuan.
          Internet backbone adalah jaringan utama dengan kapasitas tinggi yang menghubungkan berbagai negara dan benua.
        </p>

        <h2>Aplikasi Internet dalam Kehidupan Sehari-hari</h2>
        <ul>
          <li>Email dan komunikasi instan: Gmail, WhatsApp, Telegram</li>
          <li>Pencarian informasi: Google, Wikipedia</li>
          <li>Streaming media: YouTube, Spotify, Netflix</li>
          <li>Belanja online: Tokopedia, Shopee, Amazon</li>
          <li>IoT (Internet of Things): Smart home, wearable devices</li>
          <li>Pembelajaran daring: E-learning, webinar, kursus online</li>
        </ul>

        <h2>Tantangan dan Keamanan Internet</h2>
        <p>
          Meskipun internet mempermudah hidup, ada risiko seperti hacking, malware, phising, dan pencurian data pribadi.
          Penggunaan firewall, antivirus, dan praktik keamanan digital sangat penting untuk melindungi data.
        </p>

        <h2>Masa Depan Internet</h2>
        <p>
          Internet terus berkembang dengan teknologi 5G, satelit, dan jaringan fiber optik.
          Masa depan internet meliputi akses lebih cepat, koneksi global lebih merata, dan integrasi AI untuk meningkatkan pengalaman pengguna.
        </p>

        <Link to="/"
          className="btnKembali">
          Kembali ke Beranda
        </Link>
      </section>

      <Footer />
    </>
  );
}
