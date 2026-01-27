import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function MateriAi() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-[#f5ecde] text-[#2E4365] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <h1 className="text-4xl font-bold">Apa Itu Artificial Intelligence?</h1>
          <p className="text-lg">
            Mengupas sejarah, perkembangan, dan aplikasi AI dalam kehidupan modern.
          </p>
        </div>
      </section>

      {/* MATERI */}
      <section className="max-w-4xl mx-auto px-6 py-12 space-y-10 text-gray-800">

        <div>
          <h2 className="text-2xl font-semibold mb-3">Sejarah Awal AI</h2>
          <p className="leading-relaxed mb-4">
            Artificial Intelligence (AI) mulai diperkenalkan pada tahun 1950-an. Alan
            Turing, seorang matematikawan dan ilmuwan komputer Inggris, menulis
            makalah legendaris bertajuk{" "}
            <i>"Computing Machinery and Intelligence"</i>{" "}
            yang mengajukan pertanyaan:
          </p>

          <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-600 mb-4">
            "Can machines think?"
          </blockquote>

          <p className="leading-relaxed">
            Pada dekade ini, para peneliti mulai menciptakan program sederhana yang
            mampu memecahkan masalah logika, memainkan catur, dan meniru beberapa
            kemampuan manusia. Konsep dasar AI pada masa ini masih bersifat teoretis,
            dan kemampuan komputer sangat terbatas.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Era Awal dan Sistem Pakar
          </h2>
          <p className="leading-relaxed mb-4">
            Pada tahun 1960-an hingga 1970-an, muncul penelitian AI yang lebih
            spesifik, termasuk bahasa pemrograman AI seperti LISP dan Prolog. Para
            peneliti mulai membuat <b>sistem pakar (expert systems)</b> untuk membantu
            pengambilan keputusan dalam bidang medis dan bisnis. Sistem ini
            menggunakan aturan logika untuk meniru cara berpikir manusia.
          </p>
          <p className="leading-relaxed">
            Meskipun memiliki potensi besar, keterbatasan hardware dan ekspektasi yang
            terlalu tinggi menimbulkan periode stagnasi yang dikenal sebagai{" "}
            <b>AI Winter</b>. Pada era ini, pendanaan berkurang dan banyak proyek AI
            terhenti karena hasilnya tidak sesuai harapan.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Perkembangan AI Modern
          </h2>
          <p className="leading-relaxed mb-4">
            Tahun 1980-an hingga 1990-an menandai kebangkitan AI berkat komputer yang
            lebih cepat dan algoritma yang lebih canggih. IBM Deep Blue mengalahkan
            juara catur dunia Garry Kasparov pada tahun 1997, menjadi simbol kemampuan
            AI yang nyata. Mulai muncul juga <b>machine learning</b>, di mana komputer
            dapat belajar dari data daripada hanya mengikuti aturan yang sudah
            ditulis.
          </p>
          <p className="leading-relaxed">
            Di awal abad ke-21, <b>deep learning</b> dan <b>neural networks</b>{" "}
            membuat AI semakin kuat dalam pengenalan gambar, suara, dan bahasa.
            Internet dan ketersediaan data besar mempercepat kemajuan AI, memungkinkan
            sistem untuk memprediksi perilaku, menganalisis tren, dan membuat
            rekomendasi.
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
          <b>Fakta Menarik:</b> AI kini digunakan dalam bidang kesehatan untuk
          mendiagnosis penyakit lebih cepat dan akurat!
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Timeline Sejarah AI</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><b>1950-an:</b> Alan Turing memperkenalkan pertanyaan "Can machines think?"</li>
            <li><b>1960-an:</b> LISP dan Prolog mulai digunakan untuk penelitian AI.</li>
            <li><b>1970-1980:</b> AI Winter, fokus pada sistem pakar.</li>
            <li><b>1997:</b> IBM Deep Blue kalahkan Garry Kasparov.</li>
            <li><b>2000-an:</b> Machine Learning dan Deep Learning mulai populer.</li>
            <li><b>2010-an:</b> AI digunakan dalam asisten virtual, kendaraan otonom, analisis data besar.</li>
            <li><b>2020-an:</b> AI semakin cerdas, adaptif, dan menjadi bagian dari kehidupan sehari-hari.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Aplikasi AI di Kehidupan Sehari-hari
          </h2>
          <p className="leading-relaxed mb-4">
            AI kini tidak lagi terbatas pada laboratorium. Penggunaan AI telah
            merambah ke banyak aspek kehidupan manusia:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Asisten digital: Siri, Google Assistant, Alexa, membantu aktivitas sehari-hari.</li>
            <li>Rekomendasi konten: Netflix, YouTube, Spotify menyarankan film, video, dan musik sesuai preferensi.</li>
            <li>Kendaraan otonom dan sistem navigasi pintar: mobil self-driving dan GPS lebih efisien.</li>
            <li>Pendeteksi penipuan dalam transaksi perbankan: AI mengenali pola transaksi mencurigakan.</li>
            <li>Robotik dan otomatisasi industri: meningkatkan efisiensi dan keamanan dipabrik.</li>
            <li>Penerjemah bahasa otomatis: Google Translate memudahkan komunikasi lintas bahasa.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Tantangan dan Etika AI</h2>
          <p className="leading-relaxed">
            Seiring berkembangnya AI, muncul tantangan baru seperti keamanan data,
            privasi, bias algoritma, dan penggantian pekerjaan manusia. Pengembangan
            AI harus memperhatikan <b>AI ethics</b>, memastikan teknologi digunakan
            secara aman, adil, dan transparan.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Masa Depan AI</h2>
          <p className="leading-relaxed">
            AI diprediksi akan semakin adaptif, mampu mempelajari lingkungan, dan
            bekerja sama dengan manusia. Dalam 10-20 tahun ke depan, AI akan menjadi
            bagian penting dari pendidikan, kesehatan, transportasi, seni, dan
            penelitian ilmiah. Kolaborasi antara manusia dan AI diharapkan menciptakan
            dunia yang lebih efisien, kreatif, dan inklusif.
          </p>
        </div>

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
