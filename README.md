# Cek Saldo BNB dengan RPC Ankr

Script sederhana menggunakan Node.js untuk memeriksa saldo BNB dari beberapa alamat dompet menggunakan RPC dari Ankr.

## Penggunaan

1. Pastikan Anda telah menginstal Node.js di komputer Anda.
2. Clone repositori ini atau unduh kode `index.js`.
3. Pastikan Anda memiliki file teks yang berisi daftar alamat dompet yang ingin Anda periksa saldonya, setiap alamat ditulis dalam baris terpisah.
4. Ganti nama file tersebut menjadi `cek.txt`.
5. Buka terminal atau command prompt, arahkan ke direktori tempat Anda menyimpan file ini.
6. Jalankan perintah berikut untuk menginstal dependensi:

    ```
    npm install axios
    ```
   ```
   npm install fs
    ```

7. Untuk menjalankan script, gunakan perintah:

    ```
    node index.js
    ```

8. Script akan membaca setiap alamat dompet dari file `cek.txt`, melakukan permintaan RPC ke https://rpc.ankr.com/bsc/ dan menampilkan saldo BNB untuk setiap alamat yang diberikan.

Pastikan untuk mengganti alamat wallet atau RPC endpoint jika diperlukan.
