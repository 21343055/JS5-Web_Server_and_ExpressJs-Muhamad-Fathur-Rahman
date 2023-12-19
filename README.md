# JS5-Web_Server_and_ExpressJs-Muhamad-Fathur-Rahman

Pengantar Web Server

Sebuah server web adalah entitas berupa komputer fisik atau perangkat lunak yang berfungsi sebagai pusat penyimpanan dan pengiriman data dalam bentuk halaman web kepada pengguna yang meminta akses. Ketika seorang pengguna mengakses suatu situs web, permintaannya diteruskan ke server web yang bersangkutan. Selanjutnya, server web ini mengolah permintaan tersebut dan mengirimkan halaman web yang sesuai ke perangkat pengguna melalui jaringan internet.
Penggunaan Express.js

Express.js adalah framework web yang berjalan di atas bahasa pemrograman JavaScript dan dibangun di atas platform Node.js. Ini memfasilitasi pengembangan aplikasi web di sisi server (server-side) dengan menggunakan bahasa JavaScript.
Instalasi dan Menjalankan Aplikasi

    Buka terminal dan arahkan ke direktori aplikasi.
    Jalankan perintah npm install untuk menginstal dependensi.
    Jalankan aplikasi dengan perintah nodemon app.js -e js,hbs.

Akses Static Assets

Aplikasi ini mendukung akses ke file statis seperti HTML, CSS, dan gambar. Gunakan path module untuk mengelola file statis dalam folder public.
Templating dengan Handlebars.js

Handlebars.js digunakan sebagai mesin templating untuk membuat tampilan aplikasi lebih dinamis. File-file template disimpan dalam folder templates, sedangkan partials seperti header dan footer disimpan dalam folder partials.
Mengatur Tampilan Aplikasi

File CSS, JavaScript, dan gambar disediakan di folder public. Gunakan struktur direktori yang efisien untuk memisahkan file-file statis.
Struktur Direktori

css

├── public
│   ├── css
│   ├── img
│   ├── js
│   └── file_html
├── src
│   ├── app.js
│   └── ...
├── templates
│   ├── views
│   │   ├── index.hbs
│   │   ├── tentang.hbs
│   │   ├── bantuan.hbs
│   │   └── ...
│   └── partials
│       ├── header.hbs
│       └── footer.hbs
├── package.json
└── ...

Menjalankan Aplikasi

    Jalankan perintah nodemon app.js -e js,hbs.
    Buka browser dan akses http://localhost:4000/ untuk melihat aplikasi.

Menjalankan Pengujian

Aplikasi ini dapat diuji dengan mengakses berbagai rute seperti /, /tentang, dan /bantuan. Pastikan untuk memeriksa konsol pada terminal untuk pesan-pesan yang dikeluarkan.
Kontribusi

Kontribusi dan saran pembelajaran selalu dipersilakan. Jika Anda menemui masalah atau ingin berkontribusi, silakan buat issue atau pull request di repositori ini.
