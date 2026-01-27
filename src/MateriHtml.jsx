import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function MateriHtml() {
  return (
    <>
      <Navbar />

      <section className="bg-[#f5ecde] text-[#2E4365] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <h1 className="text-4xl font-bold">Mengenal HTML</h1>
          <p className="text-lg text-[#2E4365]">
            Membahas Sejarah HTML, Pengertian HTML, Cara Kerja HTML, hingga Fungsi
            HTML
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 space-y-10 text-gray-800">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Sejarah HTML</h2>
          <p className="leading-relaxed">
            HTML pertama kali diciptakan oleh Tim Berners-Lee pada tahun 1991 saat ia
            bekerja di CERN (European Organization for Nuclear Research) di Swiss.
          </p>
        </div>

        <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
          <code className="font-mono text-gray-800">
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

        <ul className="list-disc pl-6 space-y-2">
          <li><b>1993 - HTML 1.0</b> dirilis ke publik</li>
          <li><b>1995 - HTML 2.0</b> menambahkan tag form</li>
          <li><b>1997 - HTML 3.2</b> memperkenalkan tabel dan font</li>
          <li><b>1999 - HTML 4.01</b> jadi standar awal 2000-an</li>
          <li><b>2014 - HTML5</b> membawa video, audio, canvas, dan elemen semantik</li>
        </ul>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Pengertian HTML</h2>
          <p className="leading-relaxed">
            HTML (HyperText Markup Language) adalah bahasa markup standar untuk
            membuat struktur halaman web.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Bagaimana Cara Kerja HTML?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Menulis kode HTML dalam file .html</li>
            <li>Browser membaca kode tersebut</li>
            <li>Browser menampilkan hasilnya ke layar</li>
          </ul>
        </div>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold">Contoh Kode HTML</h3>

          <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
            <code className="font-mono text-gray-800">
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

          <div className="border rounded-md p-4 bg-white">
            <h1 className="text-2xl font-bold mb-2">Halo Dunia!</h1>
            <p>HTML itu mudah dan menyenangkan 💖</p>
          </div>
        </section>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Fungsi Utama HTML</h2>
          <h3 className="font-semibold mb-2">Fungsi-fungsi HTML:</h3>

          <ul className="list-disc pl-6 space-y-2">
            <li><b>Menyusun struktur halaman web</b></li>
            <li><b>Menampilkan konten ke browser</b></li>
            <li><b>Menghubungkan antar halaman</b></li>
            <li><b>Dasar CSS & JavaScript</b></li>
            <li><b>Membantu SEO</b></li>
            <li><b>Fondasi pengembangan web modern</b></li>
          </ul>
        </div>

        <section className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">🌟 Kesimpulan</h2>
          <p>
            <strong>HTML</strong> adalah langkah pertama membuat website.
          </p>
          <p>Tanpa HTML, internet tidak akan ada 🌍💫</p>
        </section>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-2 bg-[#2E4365] text-white rounded hover:bg-[#F3D58D] transition"
        >
          Kembali ke Beranda
        </Link>
      </section>

      <Footer />
    </>
  );
}
