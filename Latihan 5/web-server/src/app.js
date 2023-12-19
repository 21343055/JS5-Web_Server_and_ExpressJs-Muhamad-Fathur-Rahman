const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()

// Mendefinisikan jalur/path untuk konfigurasi Express 
const direktoriPublic = path.join(__dirname, '../public')
const direktoriViews = path.join(__dirname, '../templates/views')
const direktoriPartials = path.join(__dirname, '../templates/partials')

// Setup handlebars engine dan lokasi folder views
app.set('view engine', 'hbs')
app.set('views', direktoriViews)
hbs.registerPartials(direktoriPartials)

// Setup direktori statis
app.use(express.static(direktoriPublic))

//ini halaman/page utama
app.get('', (req, res) => {
    res.render('index', {
     judul: 'Aplikasi Cek Cuaca',
     nama: 'Muhamad Fathur Rahman'
     })
    })

//ini halaman bantuan/FAQ (Frequently Asked Questions)
app.get('/bantuan', (req, res) => {
    res.render('bantuan', {
     teksBantuan: 'ini adalah teks bantuan',
     })
    })

//ini halaman infoCuaca
app.get('/infoCuaca', (req, res) => {
    if (!req.query.address) {
        return res.send({
        error: ' Kamu harus memasukan lokasi yang ingin dicari'
        })
    }
    
    res.send([{
     prediksiCuaca: 'cuaca sedang hujan',
     lokasi: 'Padang',
     address : req.query.address
     }])
})

//ini halaman tentang
app.get('/tentang', (req, res) => {
    res.render('tentang', {
     judul: 'Tentang Saya',
     nama: 'Muhamad Fathur Rahman'
     })
    })

app.get('/bantuan/*', (req, res) => {
    res.render('404', {
        judul: '404',
        nama : 'Muhamad Fathur Rahman',
        pesanKesalahan: 'Artikel yang dicari tidak ditemukan.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        judul: '404',
        nama : 'Muhamad Fathur Rahman',
        pesanKesalahan: 'Halaman tidak ditemukan.'
    })
})

app.listen(4000, () => {
console.log('Server berjalan pada port 4000.')
})
