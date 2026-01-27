import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function MateriInternet() {
  return (
    <>
      <Navbar />
      <section className="bg-[#f5ecde] text-[#2E4365] py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-[#2E4365] mb-4">
            Bagaimana Internet Bekerja?
          </h1>
          <p className="text-lg text-[#2E4365]">
            Memahami perjalanan data dari perangkatmu hingga ke seluruh dunia.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 space-y-10 text-gray-700">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Pengenalan Internet</h2>
          <p className="mb-3">
            Internet adalah jaringan global yang menghubungkan jutaan komputer,
            server, dan perangkat lainnya di seluruh dunia. Dengan internet, kita
            dapat mengirim informasi, berkomunikasi, mengakses layanan digital,
            dan mendapatkan informasi dalam hitungan detik.
          </p>
          <p>
            Internet menggunakan serangkaian protokol komunikasi standar yang
            memungkinkan perangkat dengan sistem berbeda untuk saling terhubung
            dan bertukar data.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Sejarah dan Perkembangan Internet
          </h2>
          <p>
            Internet lahir dari proyek ARPANET pada tahun 1969 di Amerika Serikat.
            Tujuan awalnya adalah menghubungkan komputer penelitian agar dapat
            berbagi informasi. Awal 1980-an, TCP/IP menjadi standar komunikasi,
            memungkinkan pertumbuhan jaringan global. Tahun 1990-an, World Wide
            Web (WWW) diperkenalkan oleh Tim Berners-Lee, membuat internet lebih
            mudah diakses oleh masyarakat luas.
          </p>

          <div className="mt-4 p-4 bg-yellow-100 border-l-4 border-yellow-400 rounded">
            Fakta Menarik: Pada 1993, browser pertama yang populer, Mosaic,
            membuat internet mulai dikenal oleh masyarakat umum.
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Cara Kerja Internet</h2>
          <p className="mb-4">
            Internet bekerja seperti jaringan surat elektronik. Ketika kamu
            mengakses website atau mengirim data, informasi dipecah menjadi paket
            data dan dikirim melalui jaringan hingga tujuan.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <b>Perangkat Pengguna:</b> Komputer, smartphone, tablet mengirim
              permintaan data.
            </li>
            <li>
              <b>Router dan ISP:</b> Paket data melewati router dan penyedia
              layanan internet (ISP) menuju server tujuan.
            </li>
            <li>
              <b>Server:</b> Server web menerima permintaan, memproses, dan
              mengirim kembali paket data ke pengguna.
            </li>
            <li>
              <b>Paket Data:</b> Data dipecah menjadi paket kecil, masing-masing
              paket bisa melalui jalur berbeda, dan kemudian dirangkai kembali di
              tujuan.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Protokol, IP, dan DNS</h2>
          <p className="mb-2">
            <b>Protokol</b> adalah aturan komunikasi antar perangkat. Contoh:
            HTTP/HTTPS untuk website, SMTP untuk email.
          </p>
          <p>
            Setiap perangkat memiliki <b>IP address</b> unik, seperti alamat
            rumah, agar data dapat dikirim ke tempat yang tepat. <b>DNS</b>{" "}
            berfungsi mengubah nama domain menjadi IP address.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Routing dan Jaringan</h2>
          <p>
            Paket data tidak selalu melewati jalur yang sama. <b>Router</b>{" "}
            menentukan jalur tercepat dan teraman menuju tujuan. Internet
            backbone adalah jaringan utama dengan kapasitas tinggi yang
            menghubungkan berbagai negara dan benua.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Aplikasi Internet dalam Kehidupan Sehari-hari
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Email dan komunikasi instan</li>
            <li>Pencarian informasi</li>
            <li>Streaming media</li>
            <li>Belanja online</li>
            <li>IoT (Internet of Things)</li>
            <li>Pembelajaran daring</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Tantangan dan Keamanan Internet
          </h2>
          <p>
            Meskipun internet mempermudah hidup, ada risiko seperti hacking,
            malware, phising, dan pencurian data pribadi. Penggunaan firewall,
            antivirus, dan praktik keamanan digital sangat penting.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Masa Depan Internet</h2>
          <p>
            Internet terus berkembang dengan teknologi 5G, satelit, dan jaringan
            fiber optik. Masa depan internet meliputi akses lebih cepat dan
            koneksi global yang lebih merata.
          </p>
        </div>

        <div className="pt-6">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-[#2E4365] text-white rounded hover:bg-[#F3D58D] transition"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
