# Prasyarat (Wajib Dijalankan)

sebelum menjalankan project ini, pastikan **Node.js** sudah terinstall di laptop.
cara ceknya, buka terminal dan ketik:
```bash
node -v
```
jika muncul angka/versi maka sudah terinstall, jika belum silahkan instal terlebih dahulu melalui link dibawah ini
[nodejs.org](https://nodejs.org/)

1. clone repo ini, buka terminal dan jalankan code ini
   ```bash
    git clone https://github.com/irmatiara/web-react.git
   ```
2. setelah itu masuk ke directory project
    ```bash
    cd web-react
    ```
3. **WAJIB** install dependencies dengan (pada repo ini node_modules tidak ada dikarenakan ukuran file terlalu besar)
   ```bash
   npm install
   ```
4. jalankan server
   ```bash
   npm run dev
   ```
   lalu buka project melalui link hasil dari npm run dev


# Struktur Folder
src/: Tempat kita ngoding (App.jsx, App.css, Components).
public/assets/: Tempat menyimpan gambar (Logo, Foto artikel, dll).
index.html: File utama HTML (jangan diubah-ubah isinya kecuali nambah link font/icon).

# Note
Jika layar blank, coba cek Terminal atau Console di browser (Klik Kanan > Inspect > Console), disitu bakal di kasih tau errornya ada dimana, dan kenapa.
