/* =========================================
   DATA JIKAN
========================================= */

const jikanHours = [
    { jepang: "いちじ", romaji: "Ichi-ji", arti: "Pukul 1" },
    { jepang: "にじ", romaji: "Ni-ji", arti: "Pukul 2" },
    { jepang: "さんじ", romaji: "San-ji", arti: "Pukul 3" },
    { jepang: "よじ", romaji: "Yo-ji", arti: "Pukul 4" },
    { jepang: "ごじ", romaji: "Go-ji", arti: "Pukul 5" },
    { jepang: "ろくじ", romaji: "Roku-ji", arti: "Pukul 6" },
    { jepang: "しちじ", romaji: "Shichi-ji", arti: "Pukul 7" },
    { jepang: "はちじ", romaji: "Hachi-ji", arti: "Pukul 8" },
    { jepang: "くじ", romaji: "Ku-ji", arti: "Pukul 9" },
    { jepang: "じゅうじ", romaji: "Juu-ji", arti: "Pukul 10" },
    { jepang: "じゅういちじ", romaji: "Juuichi-ji", arti: "Pukul 11" },
    { jepang: "じゅうにじ", romaji: "Juunii-ji", arti: "Pukul 12" }
];

const jikanMinutes = [
    { jepang: "いっぷん", romaji: "Ippun", arti: "1 menit" },
    { jepang: "にふん", romaji: "Ni-fun", arti: "2 menit" },
    { jepang: "さんぷん", romaji: "San-pun", arti: "3 menit" },
    { jepang: "よんぷん", romaji: "Yon-pun", arti: "4 menit" },
    { jepang: "ごふん", romaji: "Go-fun", arti: "5 menit" },
    { jepang: "ろっぷん", romaji: "Roppun", arti: "6 menit" },
    { jepang: "ななふん", romaji: "Nana-fun", arti: "7 menit" },
    { jepang: "はっぷん", romaji: "Happun", arti: "8 menit" },
    { jepang: "きゅうふん", romaji: "Kyuu-fun", arti: "9 menit" },
    { jepang: "じゅっぷん", romaji: "Juppun", arti: "10 menit" },
    { jepang: "じゅうごふん", romaji: "Juu-go-fun", arti: "15 menit" },
    { jepang: "さんじゅっぷん", romaji: "Sanjuppun", arti: "30 menit" },
    { jepang: "よんじゅうごふん", romaji: "Yonjuugo-fun", arti: "45 menit" }
];


/* =========================================
   DATA GOZEN DAN GOGO
========================================= */

const jikanPeriod = [
    {
        jepang: "午前（ごぜん）",
        romaji: "Gozen",
        arti: "AM — Sebelum tengah hari",
        rentang: "00.00 – 11.59",
        keterangan: "Digunakan untuk menunjukkan waktu dari tengah malam sampai sebelum pukul 12 siang.",
        contoh: [
            "午前六時（ごぜんろくじ）= Pukul 06.00 pagi",
            "午前十時（ごぜんじゅうじ）= Pukul 10.00 pagi",
            "午前十一時（ごぜんじゅういちじ）= Pukul 11.00 siang"
        ]
    },
    {
        jepang: "午後（ごご）",
        romaji: "Gogo",
        arti: "PM — Setelah tengah hari",
        rentang: "12.00 – 23.59",
        keterangan: "Digunakan untuk menunjukkan waktu dari pukul 12 siang sampai sebelum tengah malam.",
        contoh: [
            "午後一時（ごごいちじ）= Pukul 13.00",
            "午後三時（ごごさんじ）= Pukul 15.00",
            "午後八時（ごごはちじ）= Pukul 20.00"
        ]
    }
];


/* =========================================
   DATA KOSAKATA PAGI
========================================= */

const materiPagiTambahan = [
    { kanji: "おきます", onyomi: "", kunyomi: "", romaji: "Okimasu", arti: "Bangun tidur", goresan: 0 },
    { kanji: "かおをあらいます", onyomi: "", kunyomi: "", romaji: "Kao o araimasu", arti: "Mencuci muka", goresan: 0 },
    { kanji: "はをみがきます", onyomi: "", kunyomi: "", romaji: "Ha o migakimasu", arti: "Menggosok gigi", goresan: 0 },
    { kanji: "シャワーをあびます", onyomi: "", kunyomi: "", romaji: "Shawaa o abimasu", arti: "Mandi", goresan: 0 },
    { kanji: "あさごはんをたべます", onyomi: "", kunyomi: "", romaji: "Asagohan o tabemasu", arti: "Sarapan", goresan: 0 },
    { kanji: "コーヒーをのみます", onyomi: "", kunyomi: "", romaji: "Koohii o nomimasu", arti: "Minum kopi", goresan: 0 },
    { kanji: "ふくをきます", onyomi: "", kunyomi: "", romaji: "Fuku o kimasu", arti: "Memakai pakaian", goresan: 0 },
    { kanji: "さんぽします", onyomi: "", kunyomi: "", romaji: "Sanpo shimasu", arti: "Berjalan-jalan", goresan: 0 },
    { kanji: "ジョギングします", onyomi: "", kunyomi: "", romaji: "Jogingu shimasu", arti: "Melakukan jogging", goresan: 0 },
    { kanji: "がっこうへいきます", onyomi: "", kunyomi: "", romaji: "Gakkou e ikimasu", arti: "Pergi ke sekolah", goresan: 0 }
];


/* =========================================
   DATA KOSAKATA SIANG
========================================= */

const materiSiangTambahan = [
    { kanji: "ひるごはんをたべます", onyomi: "", kunyomi: "", romaji: "Hirugohan o tabemasu", arti: "Makan siang", goresan: 0 },
    { kanji: "べんきょうします", onyomi: "", kunyomi: "", romaji: "Benkyou shimasu", arti: "Belajar", goresan: 0 },
    { kanji: "はたらきます", onyomi: "", kunyomi: "", romaji: "Hatarakimasu", arti: "Bekerja", goresan: 0 },
    { kanji: "ともだちとはなします", onyomi: "", kunyomi: "", romaji: "Tomodachi to hanashimasu", arti: "Berbicara dengan teman", goresan: 0 },
    { kanji: "ほんをよみます", onyomi: "", kunyomi: "", romaji: "Hon o yomimasu", arti: "Membaca buku", goresan: 0 },
    { kanji: "おちゃをのみます", onyomi: "", kunyomi: "", romaji: "Ocha o nomimasu", arti: "Minum teh", goresan: 0 },
    { kanji: "そうじします", onyomi: "", kunyomi: "", romaji: "Souji shimasu", arti: "Membersihkan", goresan: 0 },
    { kanji: "りょうりします", onyomi: "", kunyomi: "", romaji: "Ryouri shimasu", arti: "Memasak", goresan: 0 },
    { kanji: "テレビをみます", onyomi: "", kunyomi: "", romaji: "Terebi o mimasu", arti: "Menonton televisi", goresan: 0 },
    { kanji: "ひるねします", onyomi: "", kunyomi: "", romaji: "Hirune shimasu", arti: "Tidur siang", goresan: 0 }
];


/* =========================================
   DATA KOSAKATA MALAM
========================================= */

const materiMalamTambahan = [
    { kanji: "ばんごはんをたべます", onyomi: "", kunyomi: "", romaji: "Bangohan o tabemasu", arti: "Makan malam", goresan: 0 },
    { kanji: "テレビをみます", onyomi: "", kunyomi: "", romaji: "Terebi o mimasu", arti: "Menonton televisi", goresan: 0 },
    { kanji: "おふろにはいります", onyomi: "", kunyomi: "", romaji: "Ofuro ni hairimasu", arti: "Mandi berendam", goresan: 0 },
    { kanji: "はをみがきます", onyomi: "", kunyomi: "", romaji: "Ha o migakimasu", arti: "Menggosok gigi", goresan: 0 },
    { kanji: "べんきょうします", onyomi: "", kunyomi: "", romaji: "Benkyou shimasu", arti: "Belajar", goresan: 0 },
    { kanji: "おんがくをききます", onyomi: "", kunyomi: "", romaji: "Ongaku o kikimasu", arti: "Mendengarkan musik", goresan: 0 },
    { kanji: "ほんをよみます", onyomi: "", kunyomi: "", romaji: "Hon o yomimasu", arti: "Membaca buku", goresan: 0 },
    { kanji: "ねます", onyomi: "", kunyomi: "", romaji: "Nemasu", arti: "Tidur", goresan: 0 },
    { kanji: "にっきをかきます", onyomi: "", kunyomi: "", romaji: "Nikki o kakimasu", arti: "Menulis buku harian", goresan: 0 },
    { kanji: "ともだちにでんわします", onyomi: "", kunyomi: "", romaji: "Tomodachi ni denwa shimasu", arti: "Menelepon teman", goresan: 0 }
];


/* =========================================
   MATERI BUNPOU JIKAN
========================================= */

const materiBunpou = [
    {
        judul: "Menyatakan Waktu Melakukan Aktivitas",
        nomor: "01",
        kalimat: "わたしは ろくじに たべます。",
        romaji: "Watashi wa roku-ji ni tabemasu.",
        arti: "Saya makan pada pukul enam.",
        pola: "Subjek + は + Waktu + に + Kata Kerja",
        penjelasan: [
            { bagian: "わたし", romaji: "Watashi", arti: "Saya", warna: "#2563EB" },
            { bagian: "は", romaji: "Wa", arti: "Penanda topik", warna: "#DC2626" },
            { bagian: "ろくじ", romaji: "Roku-ji", arti: "Pukul enam", warna: "#D97706" },
            { bagian: "に", romaji: "Ni", arti: "Partikel penanda waktu", warna: "#DC2626" },
            { bagian: "たべます", romaji: "Tabemasu", arti: "Makan", warna: "#16A34A" }
        ],
        contoh: [
            { kalimat: "わたしは しちじに おきます。", romaji: "Watashi wa shichi-ji ni okimasu.", arti: "Saya bangun pukul tujuh." },
            { kalimat: "わたしは はちじに がっこうへ いきます。", romaji: "Watashi wa hachi-ji ni gakkou e ikimasu.", arti: "Saya pergi ke sekolah pukul delapan." }
        ],
        catatan: "Partikel に digunakan setelah keterangan waktu yang spesifik untuk menunjukkan kapan suatu aktivitas dilakukan."
    },
    {
        judul: "Menanyakan Waktu",
        nomor: "02",
        kalimat: "なんじに おきますか。",
        romaji: "Nanji ni okimasu ka.",
        arti: "Pukul berapa kamu bangun?",
        pola: "なんじ + に + Kata Kerja + か",
        penjelasan: [
            { bagian: "なんじ", romaji: "Nanji", arti: "Pukul berapa", warna: "#2563EB" },
            { bagian: "に", romaji: "Ni", arti: "Partikel penanda waktu", warna: "#DC2626" },
            { bagian: "おきます", romaji: "Okimasu", arti: "Bangun tidur", warna: "#16A34A" },
            { bagian: "か", romaji: "Ka", arti: "Penanda kalimat tanya", warna: "#D97706" }
        ],
        contoh: [
            { kalimat: "なんじに ねますか。", romaji: "Nanji ni nemasu ka.", arti: "Pukul berapa kamu tidur?" },
            { kalimat: "なんじに がっこうへ いきますか。", romaji: "Nanji ni gakkou e ikimasu ka.", arti: "Pukul berapa kamu pergi ke sekolah?" }
        ],
        catatan: "なんじ (Nanji) digunakan untuk menanyakan pukul berapa suatu kegiatan dilakukan."
    },
    {
        judul: "Menyebutkan Jam Sekarang",
        nomor: "03",
        kalimat: "いま ろくじです。",
        romaji: "Ima roku-ji desu.",
        arti: "Sekarang pukul enam.",
        pola: "いま + Keterangan Waktu + です",
        penjelasan: [
            { bagian: "いま", romaji: "Ima", arti: "Sekarang", warna: "#2563EB" },
            { bagian: "ろくじ", romaji: "Roku-ji", arti: "Pukul enam", warna: "#D97706" },
            { bagian: "です", romaji: "Desu", arti: "Kopula / bentuk sopan", warna: "#16A34A" }
        ],
        contoh: [
            { kalimat: "いま しちじです。", romaji: "Ima shichi-ji desu.", arti: "Sekarang pukul tujuh." },
            { kalimat: "いま くじです。", romaji: "Ima ku-ji desu.", arti: "Sekarang pukul sembilan." }
        ],
        catatan: "いま (Ima) berarti sekarang. です (Desu) digunakan untuk mengakhiri kalimat nominal dalam bentuk sopan."
    }
];


/* =========================================
   DATA FOLDER
========================================= */

let categories = [
    {
        nama: "Pagi",
        deskripsi: "Kosakata dan aktivitas pada pagi hari",
        gambar: "pagi.png",
        kosakata: materiPagiTambahan
    },
    {
        nama: "Siang",
        deskripsi: "Kosakata dan aktivitas pada siang hari",
        gambar: "siang.png",
        kosakata: materiSiangTambahan
    },
    {
        nama: "Malam",
        deskripsi: "Kosakata dan aktivitas pada malam hari",
        gambar: "malam.png",
        kosakata: materiMalamTambahan
    },
    {
        nama: "Jikan",
        deskripsi: "Materi pembelajaran bahasa Jepang tentang waktu",
        gambar: "biji.jpg",
        kosakata: []
    },
    {
        nama: "Bunpou Jikan",
        deskripsi: "Materi tata bahasa bahasa Jepang tentang waktu",
        gambar: "berak.jpg",
        kosakata: []
    },
    {
        nama: "Quiz",
        deskripsi: "Uji kemampuan dan pemahaman seluruh materi",
        gambar: "biji.jpg",
        kosakata: []
    }
];


/* =========================================
   PENYIMPANAN DATA LAMA
========================================= */

const savedData = localStorage.getItem("nihongoStudyData");

if (savedData) {
    try {
        const oldCategories = JSON.parse(savedData);

        if (Array.isArray(oldCategories)) {
            categories.forEach(category => {
                const oldCategory = oldCategories.find(
                    old => old.nama === category.nama
                );

                if (oldCategory && Array.isArray(oldCategory.kosakata)) {
                    category.kosakata = oldCategory.kosakata;
                }
            });
        }
    } catch (error) {
        console.error("Gagal membaca data lama:", error);
    }
}


/* =========================================
   TAMBAHKAN MATERI BARU TANPA MENGHAPUS DATA
========================================= */

function tambahkanMateriJikaBelumAda(namaFolder, daftarMateri) {
    const folder = categories.find(
        category => category.nama === namaFolder
    );

    if (!folder) return;

    daftarMateri.forEach(materi => {
        const sudahAda = folder.kosakata.some(
            item => item.kanji === materi.kanji
        );

        if (!sudahAda) {
            folder.kosakata.push(materi);
        }
    });
}

tambahkanMateriJikaBelumAda("Pagi", materiPagiTambahan);
tambahkanMateriJikaBelumAda("Siang", materiSiangTambahan);
tambahkanMateriJikaBelumAda("Malam", materiMalamTambahan);


function simpanData() {
    localStorage.setItem(
        "nihongoStudyData",
        JSON.stringify(categories)
    );
}

simpanData();


/* =========================================
   ELEMENT HTML
========================================= */

const categoryList = document.getElementById("categoryList");
const vocabularySection = document.getElementById("vocabularySection");
const vocabularyList = document.getElementById("vocabularyList");
const backButton = document.getElementById("backButton");
const searchInput = document.getElementById("searchInput");

let currentCategoryIndex = null;
let currentBunpouIndex = 0;


/* =========================================
   ESCAPE HTML
========================================= */

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };

        return entities[char];
    });
}


/* =========================================
   CSS WHITEBOARD BUNPOU
========================================= */

function pasangStyleBunpou() {
    if (document.getElementById("bunpouWhiteboardStyle")) return;

    const style = document.createElement("style");
    style.id = "bunpouWhiteboardStyle";

    style.textContent = `
        .bunpou-container { width:100%; margin:25px auto; }
        .bunpou-heading { text-align:center; margin-bottom:20px; }
        .bunpou-heading h2 { margin-bottom:8px; }
        .whiteboard {
            background:#fff; color:#222; border:2px solid #d1d5db;
            border-radius:12px; padding:35px; min-height:450px;
            box-shadow:5px 5px 0 rgba(0,0,0,0.12);
        }
        .whiteboard-label {
            display:inline-block; background:#f3f4f6; color:#555;
            padding:7px 14px; border-radius:20px; font-size:13px;
            font-weight:bold; margin-bottom:20px;
        }
        .whiteboard-title { text-align:center; font-size:23px; color:#222; margin-bottom:25px; }
        .whiteboard-sentence {
            text-align:center; font-size:clamp(22px,4vw,34px);
            color:#2563eb; font-weight:bold; line-height:1.8;
            margin:25px 0 12px; overflow-wrap:anywhere;
        }
        .whiteboard-romaji { text-align:center; font-size:18px; color:#444; margin-bottom:12px; }
        .whiteboard-meaning { text-align:center; font-size:18px; color:#555; margin-bottom:25px; }
        .whiteboard-divider { border:none; border-top:1px dashed #bbb; margin:25px 0; }
        .whiteboard-section-title { font-size:20px; color:#dc2626; margin-bottom:15px; }
        .whiteboard-pattern {
            background:#fff7ed; border-left:5px solid #dc2626;
            padding:18px; border-radius:6px; text-align:center;
            font-size:clamp(17px,3vw,22px); font-weight:bold;
            line-height:1.7; color:#222;
        }
        .bunpou-explanation {
            display:grid; grid-template-columns:repeat(auto-fit,minmax(150px,1fr)); gap:12px;
        }
        .bunpou-word { background:#f9fafb; border:1px solid #e5e7eb; padding:15px; border-radius:8px; text-align:center; }
        .bunpou-word-jp { font-size:23px; font-weight:bold; margin-bottom:5px; }
        .bunpou-word-romaji { color:#555; font-size:14px; margin-bottom:5px; }
        .bunpou-word-meaning { color:#333; font-size:14px; }
        .bunpou-example { background:#f0fdf4; border-left:4px solid #16a34a; border-radius:6px; padding:15px; margin-bottom:12px; }
        .bunpou-example-jp { color:#166534; font-size:20px; font-weight:bold; margin-bottom:6px; line-height:1.6; }
        .bunpou-example-romaji { color:#444; margin-bottom:5px; }
        .bunpou-example-meaning { color:#555; }
        .bunpou-note { background:#eff6ff; border-left:4px solid #2563eb; padding:15px; border-radius:6px; line-height:1.7; color:#333; }
        .bunpou-navigation { display:flex; justify-content:space-between; align-items:center; gap:12px; margin-top:25px; }
        .bunpou-navigation button {
            background:#222; color:white; border:none; padding:12px 20px;
            border-radius:7px; cursor:pointer; font-family:inherit; font-size:14px;
        }
        .bunpou-navigation button:hover:not(:disabled) { background:#9e1b1b; }
        .bunpou-navigation button:disabled { opacity:0.35; cursor:not-allowed; }
        .bunpou-page-number { font-weight:bold; color:#555; white-space:nowrap; }
        @media(max-width:600px) {
            .whiteboard { padding:20px 15px; min-height:400px; }
            .whiteboard-title { font-size:19px; }
            .bunpou-navigation button { padding:10px 12px; font-size:12px; }
        }
    `;

    document.head.appendChild(style);
}

pasangStyleBunpou();


/* =========================================
   CSS KHUSUS QUIZ
========================================= */

function pasangStyleQuiz() {
    if (document.getElementById("quizStyle")) return;

    const style = document.createElement("style");
    style.id = "quizStyle";

    style.textContent = `
        .quiz-container { width:100%; margin:25px auto; }
        .quiz-heading { text-align:center; margin-bottom:25px; }
        .quiz-heading h2 { margin-bottom:8px; }
        .quiz-settings {
            background:white; padding:22px; border-radius:12px;
            margin-bottom:20px; border:2px solid #222;
        }
        .quiz-settings select {
            width:100%; padding:12px; margin:12px 0;
            border:1px solid #aaa; border-radius:6px; font-family:inherit;
        }
        .quiz-button {
            background:#222; color:white; border:none; padding:12px 20px;
            border-radius:7px; cursor:pointer; font-family:inherit; font-weight:bold;
        }
        .quiz-button:hover { background:#9e1b1b; }
        .quiz-card {
            background:white; padding:25px; border-radius:12px;
            border:2px solid #222; margin-top:20px;
        }
        .quiz-progress { color:#9e1b1b; font-weight:bold; margin-bottom:15px; }
        .quiz-type {
            display:inline-block; background:#f3ead8; color:#555;
            border-radius:20px; padding:6px 12px; font-size:12px;
            margin-bottom:12px; font-weight:bold;
        }
        .quiz-question {
            font-size:27px; text-align:center; margin:25px 0 10px;
            overflow-wrap:anywhere; line-height:1.6;
        }
        .quiz-romaji { text-align:center; color:#666; margin-bottom:25px; }
        .quiz-options { display:grid; grid-template-columns:repeat(2,1fr); gap:12px; }
        .quiz-option {
            padding:16px; border:2px solid #ddd; background:#f9fafb;
            border-radius:8px; cursor:pointer; font-family:inherit; font-size:15px;
        }
        .quiz-option:hover:not(:disabled) { border-color:#9e1b1b; background:#fff7ed; }
        .quiz-option:disabled { cursor:default; opacity:1; }
        .quiz-option.correct { background:#dcfce7; border-color:#16a34a; }
        .quiz-option.wrong { background:#fee2e2; border-color:#dc2626; }
        .quiz-feedback { margin-top:20px; padding:15px; border-radius:8px; text-align:center; font-weight:bold; }
        .quiz-result {
            background:white; border:2px solid #222; border-radius:12px;
            padding:30px 20px; text-align:center;
        }
        .quiz-result h2 { color:#9e1b1b; font-size:28px; }
        .quiz-score { font-size:45px; font-weight:bold; margin:20px 0; }
        .quiz-actions { display:flex; justify-content:center; gap:10px; flex-wrap:wrap; margin-top:20px; }
        @media(max-width:600px) {
            .quiz-options { grid-template-columns:1fr; }
            .quiz-card { padding:18px; }
            .quiz-question { font-size:23px; }
        }
    `;

    document.head.appendChild(style);
}


/* =========================================
   MENAMPILKAN FOLDER
========================================= */

function renderCategories() {
    categoryList.style.display = "grid";
    vocabularySection.style.display = "none";
    categoryList.innerHTML = "";

    categories.forEach((category, index) => {
        const card = document.createElement("div");
        card.className = "category-card";

        let jumlahMateri;

        if (category.nama === "Quiz") {
            jumlahMateri = "Kuis Interaktif";
        } else if (category.nama === "Jikan") {
            jumlahMateri =
                jikanHours.length +
                jikanMinutes.length +
                jikanPeriod.length +
                " Materi";
        } else if (category.nama === "Bunpou Jikan") {
            jumlahMateri = materiBunpou.length + " Materi";
        } else {
            jumlahMateri = category.kosakata.length + " Materi";
        }

        card.innerHTML = `
            <img src="${escapeHTML(category.gambar)}"
                 alt="${escapeHTML(category.nama)}"
                 class="category-image">

            <div class="category-content">
                <h3>${escapeHTML(category.nama)}</h3>
                <p>${escapeHTML(category.deskripsi)}</p>
                <span>${jumlahMateri}</span>
            </div>
        `;

        card.addEventListener("click", () => openCategory(index));
        categoryList.appendChild(card);
    });
}


/* =========================================
   MEMBUKA FOLDER
========================================= */

function openCategory(index) {
    currentCategoryIndex = index;

    const category = categories[index];

    categoryList.style.display = "none";
    vocabularySection.style.display = "block";

    if (searchInput) {
        searchInput.style.display = "none";
    }

    if (category.nama === "Jikan") {
        renderJikanTable();
    } else if (category.nama === "Bunpou Jikan") {
        currentBunpouIndex = 0;
        renderBunpouBoard();
    } else if (category.nama === "Quiz") {
        renderQuiz();
    } else {
        renderVocabulary(category.kosakata);
    }
}


/* =========================================
   TABEL JIKAN
========================================= */

function createJikanTable(title, data) {
    let rows = "";

    data.forEach(item => {
        rows += `
            <tr>
                <td>${escapeHTML(item.jepang)}</td>
                <td>${escapeHTML(item.romaji)}</td>
                <td>${escapeHTML(item.arti)}</td>
            </tr>
        `;
    });

    return `
        <div class="jikan-table-container">
            <h3>${escapeHTML(title)}</h3>
            <table class="jikan-table">
                <thead>
                    <tr>
                        <th>Bahasa Jepang</th>
                        <th>Romaji</th>
                        <th>Arti</th>
                    </tr>
                </thead>
                <tbody>${rows}</tbody>
            </table>
        </div>
    `;
}


/* =========================================
   KARTU GOZEN DAN GOGO
========================================= */

function createJikanPeriodCard(item) {
    const contohHTML = item.contoh.map(contoh => `
        <li>${escapeHTML(contoh)}</li>
    `).join("");

    return `
        <div class="jikan-period-card">
            <h3>${escapeHTML(item.jepang)}</h3>
            <p class="jikan-period-romaji">${escapeHTML(item.romaji)}</p>
            <h2>${escapeHTML(item.rentang)}</h2>
            <p>${escapeHTML(item.arti)}</p>
            <div class="jikan-period-description">
                ${escapeHTML(item.keterangan)}
            </div>
            <h4>Contoh Penggunaan</h4>
            <ul>${contohHTML}</ul>
        </div>
    `;
}


/* =========================================
   MENAMPILKAN MATERI JIKAN
========================================= */

function renderJikanTable() {
    vocabularySection.innerHTML = `
        <button id="backButton">← Kembali ke Folder</button>

        <h2>Jikan (時間)</h2>
        <p>Materi pembelajaran tentang penyebutan waktu dalam bahasa Jepang.</p>

        <div class="jikan-grid">
            ${createJikanTable("Jam (時)", jikanHours)}
            ${createJikanTable("Menit (分)", jikanMinutes)}
        </div>

        <div class="jikan-period-section">
            <h2>午前 (Gozen) dan 午後 (Gogo)</h2>
            <p>Pembagian waktu AM dan PM dalam bahasa Jepang.</p>

            <div class="jikan-period-grid">
                ${jikanPeriod.map(createJikanPeriodCard).join("")}
            </div>

            <div class="jikan-period-note">
                <h3>Catatan Penting</h3>
                <p>正午（しょうご / Shōgo） berarti tepat pukul 12 siang.</p>
                <p>真夜中（まよなか / Mayonaka） berarti tengah malam.</p>
                <p>午前十二時 berarti pukul 00.00 (tengah malam), sedangkan 午後十二時 berarti pukul 12.00 (tengah hari).</p>
            </div>
        </div>
    `;

    document.getElementById("backButton").addEventListener("click", kembaliKeFolder);
}


/* =========================================
   WHITEBOARD BUNPOU JIKAN
========================================= */

function renderBunpouBoard() {
    const materi = materiBunpou[currentBunpouIndex];
    if (!materi) return;

    const penjelasanHTML = materi.penjelasan.map(item => `
        <div class="bunpou-word">
            <div class="bunpou-word-jp" style="color:${escapeHTML(item.warna)}">
                ${escapeHTML(item.bagian)}
            </div>
            <div class="bunpou-word-romaji">${escapeHTML(item.romaji)}</div>
            <div class="bunpou-word-meaning">${escapeHTML(item.arti)}</div>
        </div>
    `).join("");

    const contohHTML = materi.contoh.map(item => `
        <div class="bunpou-example">
            <div class="bunpou-example-jp">${escapeHTML(item.kalimat)}</div>
            <div class="bunpou-example-romaji">${escapeHTML(item.romaji)}</div>
            <div class="bunpou-example-meaning">${escapeHTML(item.arti)}</div>
        </div>
    `).join("");

    vocabularySection.innerHTML = `
        <button id="backButton">← Kembali ke Folder</button>

        <div class="bunpou-container">
            <div class="bunpou-heading">
                <h2>Bunpou Jikan (文法・時間)</h2>
                <p>Materi tata bahasa bahasa Jepang tentang waktu</p>
            </div>

            <div class="whiteboard">
                <div class="whiteboard-label">MATERI ${escapeHTML(materi.nomor)}</div>
                <h3 class="whiteboard-title">${escapeHTML(materi.judul)}</h3>

                <div class="whiteboard-sentence">${escapeHTML(materi.kalimat)}</div>
                <div class="whiteboard-romaji">${escapeHTML(materi.romaji)}</div>
                <div class="whiteboard-meaning">${escapeHTML(materi.arti)}</div>

                <hr class="whiteboard-divider">

                <h3 class="whiteboard-section-title">Pola Kalimat</h3>
                <div class="whiteboard-pattern">${escapeHTML(materi.pola)}</div>

                <hr class="whiteboard-divider">

                <h3 class="whiteboard-section-title" style="color:#16a34a;">
                    Penjelasan Kalimat
                </h3>
                <div class="bunpou-explanation">${penjelasanHTML}</div>

                <hr class="whiteboard-divider">

                <h3 class="whiteboard-section-title" style="color:#16a34a;">
                    Contoh Kalimat
                </h3>
                ${contohHTML}

                <hr class="whiteboard-divider">

                <h3 class="whiteboard-section-title" style="color:#2563eb;">
                    Catatan
                </h3>
                <div class="bunpou-note">${escapeHTML(materi.catatan)}</div>
            </div>

            <div class="bunpou-navigation">
                <button id="previousBunpou" ${currentBunpouIndex === 0 ? "disabled" : ""}>
                    ← Sebelumnya
                </button>

                <span class="bunpou-page-number">
                    ${currentBunpouIndex + 1} / ${materiBunpou.length}
                </span>

                <button id="nextBunpou" ${currentBunpouIndex === materiBunpou.length - 1 ? "disabled" : ""}>
                    Selanjutnya →
                </button>
            </div>
        </div>
    `;

    document.getElementById("backButton").addEventListener("click", kembaliKeFolder);

    document.getElementById("previousBunpou").addEventListener("click", () => {
        if (currentBunpouIndex > 0) {
            currentBunpouIndex--;
            renderBunpouBoard();
        }
    });

    document.getElementById("nextBunpou").addEventListener("click", () => {
        if (currentBunpouIndex < materiBunpou.length - 1) {
            currentBunpouIndex++;
            renderBunpouBoard();
        }
    });
}


/* =========================================
   SISTEM QUIZ
========================================= */

let quizQuestions = [];
let quizPool = [];
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let quizSelectedAnswer = "";
let quizCurrentOptions = [];


/* =========================================
   MENGACAK ARRAY
========================================= */

function acakQuiz(array) {
    const hasil = [...array];

    for (let i = hasil.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [hasil[i], hasil[j]] = [hasil[j], hasil[i]];
    }

    return hasil;
}


/* =========================================
   MEMBUAT BANK SOAL KOSAKATA
========================================= */

function buatSoalKosakata(daftarMateri) {
    const materiUnik = Array.from(
        new Map(
            daftarMateri
                .filter(item => item.kanji && item.arti)
                .map(item => [
                    item.kanji + "|" + item.arti,
                    {
                        kanji: item.kanji,
                        romaji: item.romaji || "",
                        arti: item.arti
                    }
                ])
        ).values()
    );

    const pilihanArti = [...new Set(materiUnik.map(item => item.arti))];

    return materiUnik.map(item => ({
        tipe: "Kosakata",
        pertanyaan: `Apa arti dari kosakata berikut?`,
        tampilan: item.kanji,
        romaji: item.romaji,
        jawaban: item.arti,
        pilihan: pilihanArti
    }));
}


/* =========================================
   MEMBUAT BANK SOAL BUNPOU
========================================= */

function buatSoalBunpou() {
    const soalArtiKalimat = [];
    const soalPola = [];
    const soalUnsur = [];

    materiBunpou.forEach(materi => {
        // Pertanyaan arti kalimat utama
        soalArtiKalimat.push({
            tipe: "Arti Kalimat",
            pertanyaan: "Apa arti dari kalimat bahasa Jepang berikut?",
            tampilan: materi.kalimat,
            romaji: materi.romaji,
            jawaban: materi.arti
        });

        // Pertanyaan arti kalimat contoh
        materi.contoh.forEach(contoh => {
            soalArtiKalimat.push({
                tipe: "Arti Kalimat",
                pertanyaan: "Apa arti dari kalimat bahasa Jepang berikut?",
                tampilan: contoh.kalimat,
                romaji: contoh.romaji,
                jawaban: contoh.arti
            });
        });

        // Pertanyaan pola kalimat
        soalPola.push({
            tipe: "Pola Kalimat",
            pertanyaan: `Manakah pola kalimat untuk materi "${materi.judul}"?`,
            tampilan: materi.judul,
            romaji: "",
            jawaban: materi.pola
        });

        // Pertanyaan fungsi unsur kalimat
        materi.penjelasan.forEach(unsur => {
            soalUnsur.push({
                tipe: "Fungsi Unsur Kalimat",
                pertanyaan: `Apa arti atau fungsi unsur "${unsur.bagian}" dalam kalimat berikut?`,
                tampilan: materi.kalimat,
                romaji: unsur.romaji,
                jawaban: unsur.arti
            });
        });
    });

    const semuaArtiKalimat = soalArtiKalimat.map(item => item.jawaban);
    const semuaPola = soalPola.map(item => item.jawaban);
    const semuaUnsur = soalUnsur.map(item => item.jawaban);

    soalArtiKalimat.forEach(item => {
        item.pilihan = semuaArtiKalimat;
    });

    soalPola.forEach(item => {
        item.pilihan = semuaPola;
    });

    soalUnsur.forEach(item => {
        item.pilihan = semuaUnsur;
    });

    return [
        ...soalArtiKalimat,
        ...soalPola,
        ...soalUnsur
    ];
}


/* =========================================
   MENGAMBIL BANK SOAL SESUAI KATEGORI
========================================= */

function ambilBankQuiz(namaKategori) {
    let daftarKosakata = [];
    let daftarSoal = [];

    const semuaKategori = namaKategori === "Semua Kategori";

    // Kosakata Pagi, Siang, Malam
    if (semuaKategori || ["Pagi", "Siang", "Malam"].includes(namaKategori)) {
        categories
            .filter(category =>
                semuaKategori
                    ? ["Pagi", "Siang", "Malam"].includes(category.nama)
                    : category.nama === namaKategori
            )
            .forEach(category => {
                daftarKosakata.push(...category.kosakata);
            });
    }

    // Materi Jikan
    if (semuaKategori || namaKategori === "Jikan") {
        const materiJikan = [
            ...jikanHours,
            ...jikanMinutes,
            ...jikanPeriod.map(item => ({
                jepang: item.jepang,
                romaji: item.romaji,
                arti: item.arti
            }))
        ];

        materiJikan.forEach(item => {
            daftarKosakata.push({
                kanji: item.jepang,
                romaji: item.romaji,
                arti: item.arti
            });
        });
    }

    // Masukkan soal kosakata
    if (daftarKosakata.length > 0) {
        daftarSoal.push(...buatSoalKosakata(daftarKosakata));
    }

    // Masukkan soal Bunpou Jikan
    if (semuaKategori || namaKategori === "Bunpou Jikan") {
        daftarSoal.push(...buatSoalBunpou());
    }

    // Hilangkan soal duplikat
    const soalUnik = new Map();

    daftarSoal.forEach(soal => {
        const kunci = [
            soal.tipe,
            soal.tampilan,
            soal.jawaban
        ].join("|");

        soalUnik.set(kunci, soal);
    });

    return Array.from(soalUnik.values());
}


/* =========================================
   HALAMAN UTAMA QUIZ
========================================= */

function renderQuiz() {
    pasangStyleQuiz();

    const pilihanKategori = [
        "Pagi",
        "Siang",
        "Malam",
        "Jikan",
        "Bunpou Jikan"
    ].map(nama => `
        <option value="${escapeHTML(nama)}">
            ${escapeHTML(nama)}
        </option>
    `).join("");

    vocabularySection.innerHTML = `
        <button id="backButton">← Kembali ke Folder</button>

        <div class="quiz-container">
            <div class="quiz-heading">
                <h2>Quiz Bahasa Jepang</h2>
                <p>Uji pemahaman kosakata dan tata bahasa Jepangmu!</p>
            </div>

            <div class="quiz-settings">
                <h3>Pengaturan Quiz</h3>

                <label for="quizCategorySelect">
                    Pilih kategori materi:
                </label>

                <select id="quizCategorySelect">
                    <option value="Semua Kategori">Semua Materi</option>
                    ${pilihanKategori}
                </select>

                <p>
                    Pilih satu kategori atau gabungkan seluruh materi
                    untuk mendapatkan soal latihan.
                </p>

                <button id="startQuizButton" class="quiz-button">
                    Mulai Quiz
                </button>
            </div>

            <div id="quizArea"></div>
        </div>
    `;

    document.getElementById("backButton").addEventListener(
        "click",
        kembaliKeFolder
    );

    document.getElementById("startQuizButton").addEventListener(
        "click",
        mulaiQuiz
    );
}


/* =========================================
   MEMULAI QUIZ
========================================= */

function mulaiQuiz() {
    const kategori = document.getElementById("quizCategorySelect").value;

    quizPool = ambilBankQuiz(kategori);

    if (quizPool.length === 0) {
        document.getElementById("quizArea").innerHTML = `
            <p>Materi belum tersedia untuk kategori ini.</p>
        `;
        return;
    }

    quizQuestions = acakQuiz(quizPool).slice(0, 5);

    quizIndex = 0;
    quizScore = 0;
    quizAnswered = false;
    quizSelectedAnswer = "";
    quizCurrentOptions = [];

    renderQuizQuestion();
}


/* =========================================
   MEMBUAT PILIHAN JAWABAN
========================================= */

function buatPilihanQuiz(soal) {
    const pilihanLain = [...new Set(
        soal.pilihan.filter(pilihan =>
            pilihan && pilihan !== soal.jawaban
        )
    )];

    const jumlahPilihan = Math.min(3, pilihanLain.length);

    const pilihanAcak = acakQuiz(pilihanLain).slice(0, jumlahPilihan);

    return acakQuiz([
        soal.jawaban,
        ...pilihanAcak
    ]);
}


/* =========================================
   MENAMPILKAN PERTANYAAN
========================================= */

function renderQuizQuestion() {
    const area = document.getElementById("quizArea");

    if (quizIndex >= quizQuestions.length) {
        renderQuizResult();
        return;
    }

    const soal = quizQuestions[quizIndex];

    if (!quizCurrentOptions.length) {
        quizCurrentOptions = buatPilihanQuiz(soal);
    }

    const pilihanHTML = quizCurrentOptions.map((pilihan, index) => {
        let className = "quiz-option";

        if (quizAnswered && pilihan === soal.jawaban) {
            className += " correct";
        } else if (
            quizAnswered &&
            pilihan === quizSelectedAnswer &&
            pilihan !== soal.jawaban
        ) {
            className += " wrong";
        }

        return `
            <button
                class="${className}"
                data-quiz-option="${index}"
                ${quizAnswered ? "disabled" : ""}
            >
                ${escapeHTML(pilihan)}
            </button>
        `;
    }).join("");

    area.innerHTML = `
        <div class="quiz-card">
            <div class="quiz-progress">
                Soal ${quizIndex + 1} dari ${quizQuestions.length}
            </div>

            <div class="quiz-type">
                ${escapeHTML(soal.tipe)}
            </div>

            <h3>${escapeHTML(soal.pertanyaan)}</h3>

            <div class="quiz-question">
                ${escapeHTML(soal.tampilan)}
            </div>

            ${soal.romaji ? `
                <div class="quiz-romaji">
                    ${escapeHTML(soal.romaji)}
                </div>
            ` : ""}

            <div class="quiz-options">
                ${pilihanHTML}
            </div>

            ${quizAnswered ? `
                <div class="quiz-feedback"
                    style="background:${
                        quizSelectedAnswer === soal.jawaban
                            ? "#dcfce7"
                            : "#fee2e2"
                    }">
                    ${
                        quizSelectedAnswer === soal.jawaban
                            ? "Benar! 🎉"
                            : "Belum tepat! Jawaban yang benar: " +
                                escapeHTML(soal.jawaban)
                    }
                </div>

                <button id="nextQuizButton"
                    class="quiz-button"
                    style="margin-top:20px;">
                    ${quizIndex === quizQuestions.length - 1
                        ? "Lihat Hasil"
                        : "Soal Selanjutnya →"}
                </button>
            ` : ""}
        </div>
    `;

    if (!quizAnswered) {
        document.querySelectorAll("[data-quiz-option]").forEach(button => {
            button.addEventListener("click", () => {
                jawabQuiz(Number(button.dataset.quizOption));
            });
        });
    }

    if (quizAnswered) {
        document.getElementById("nextQuizButton").addEventListener("click", () => {
            quizIndex++;
            quizAnswered = false;
            quizSelectedAnswer = "";
            quizCurrentOptions = [];

            renderQuizQuestion();
        });
    }
}


/* =========================================
   MEMERIKSA JAWABAN
========================================= */

function jawabQuiz(index) {
    if (quizAnswered) return;

    const soal = quizQuestions[quizIndex];

    quizSelectedAnswer = quizCurrentOptions[index];

    if (quizSelectedAnswer === soal.jawaban) {
        quizScore++;
    }

    quizAnswered = true;
    renderQuizQuestion();
}


/* =========================================
   HASIL QUIZ
========================================= */

function renderQuizResult() {
    const area = document.getElementById("quizArea");
    const total = quizQuestions.length;

    const nilai = Math.round((quizScore / total) * 100);
    const salah = total - quizScore;

    area.innerHTML = `
        <div class="quiz-result">
            <h2>Quiz Selesai!</h2>

            <p>Hasil latihan bahasa Jepangmu:</p>

            <div class="quiz-score">${nilai}</div>

            <h3>${quizScore} Benar dari ${total} Soal</h3>

            <p>Jawaban benar: ${quizScore}</p>
            <p>Jawaban salah: ${salah}</p>

            <p>
                ${
                    nilai === 100
                        ? "Luar biasa! Semua jawaban benar! 🎉"
                        : nilai >= 60
                            ? "Bagus! Terus tingkatkan kemampuanmu!"
                            : "Tetap semangat! Coba pelajari materinya lagi."
                }
            </p>

            <div class="quiz-actions">
                <button id="retryQuizButton" class="quiz-button">
                    Ulangi Quiz
                </button>

                <button id="backQuizMenuButton" class="quiz-button">
                    Kembali ke Menu Quiz
                </button>
            </div>
        </div>
    `;

    document.getElementById("retryQuizButton").addEventListener(
        "click",
        mulaiQuiz
    );

    document.getElementById("backQuizMenuButton").addEventListener(
        "click",
        renderQuiz
    );
}


/* =========================================
   MENAMPILKAN KOSAKATA
========================================= */

function renderVocabulary(vocabulary) {
    vocabularySection.innerHTML = `
        <button id="backButton">← Kembali ke Folder</button>
        <h2>${escapeHTML(categories[currentCategoryIndex].nama)}</h2>
        <div id="vocabularyList"></div>
    `;

    const list = document.getElementById("vocabularyList");

    document.getElementById("backButton").addEventListener(
        "click",
        kembaliKeFolder
    );

    if (!vocabulary || vocabulary.length === 0) {
        list.innerHTML = `<p>Belum ada materi dalam folder ini.</p>`;
        return;
    }

    vocabulary.forEach(item => {
        const card = document.createElement("div");
        card.className = "vocabulary-card";

        card.innerHTML = `
            <h3>${escapeHTML(item.kanji)}</h3>

            <p><strong>Onyomi:</strong> ${escapeHTML(item.onyomi || "-")}</p>
            <p><strong>Kunyomi:</strong> ${escapeHTML(item.kunyomi || "-")}</p>
            <p><strong>Romaji:</strong> ${escapeHTML(item.romaji || "-")}</p>
            <p><strong>Arti:</strong> ${escapeHTML(item.arti || "-")}</p>
            <p><strong>Jumlah goresan:</strong> ${escapeHTML(item.goresan ?? "-")}</p>
        `;

        list.appendChild(card);
    });
}


/* =========================================
   KEMBALI KE DAFTAR FOLDER
========================================= */

function kembaliKeFolder() {
    vocabularySection.style.display = "none";
    categoryList.style.display = "grid";

    if (searchInput) {
        searchInput.style.display = "block";
        searchInput.value = "";
    }

    currentCategoryIndex = null;
    renderCategories();
}


/* =========================================
   PENCARIAN KOSAKATA
========================================= */

function searchVocabulary(keyword) {
    const query = keyword.toLowerCase().trim();

    if (query === "") {
        renderCategories();
        return;
    }

    categoryList.style.display = "none";
    vocabularySection.style.display = "block";

    let hasil = [];

    categories.forEach(category => {
        if (
            category.nama === "Jikan" ||
            category.nama === "Bunpou Jikan" ||
            category.nama === "Quiz"
        ) {
            return;
        }

        category.kosakata.forEach(item => {
            const teks = [
                item.kanji,
                item.onyomi,
                item.kunyomi,
                item.romaji,
                item.arti
            ].join(" ").toLowerCase();

            if (teks.includes(query)) {
                hasil.push({
                    ...item,
                    folder: category.nama
                });
            }
        });
    });

    const materiJikan = [
        ...jikanHours,
        ...jikanMinutes,
        ...jikanPeriod.map(item => ({
            jepang: item.jepang,
            romaji: item.romaji,
            arti: item.arti
        }))
    ];

    materiJikan.forEach(item => {
        const teks = [
            item.jepang,
            item.romaji,
            item.arti
        ].join(" ").toLowerCase();

        if (teks.includes(query)) {
            hasil.push({
                kanji: item.jepang,
                romaji: item.romaji,
                arti: item.arti,
                folder: "Jikan"
            });
        }
    });

    vocabularySection.innerHTML = `
        <button id="backButton">← Kembali ke Folder</button>
        <h2>Hasil Pencarian</h2>
        <div id="vocabularyList"></div>
    `;

    const list = document.getElementById("vocabularyList");

    document.getElementById("backButton").addEventListener(
        "click",
        kembaliKeFolder
    );

    if (hasil.length === 0) {
        list.innerHTML = `<p>Tidak ditemukan kosakata yang sesuai.</p>`;
    } else {
        hasil.forEach(item => {
            const card = document.createElement("div");
            card.className = "vocabulary-card";

            card.innerHTML = `
                <small>${escapeHTML(item.folder)}</small>
                <h3>${escapeHTML(item.kanji)}</h3>
                <p><strong>Romaji:</strong> ${escapeHTML(item.romaji)}</p>
                <p><strong>Arti:</strong> ${escapeHTML(item.arti)}</p>
            `;

            list.appendChild(card);
        });
    }
}


/* =========================================
   EVENT LISTENER
========================================= */

if (searchInput) {
    searchInput.addEventListener("input", function () {
        searchVocabulary(this.value);
    });
}

if (backButton) {
    backButton.addEventListener("click", kembaliKeFolder);
}


/* =========================================
   TAMPILKAN FOLDER SAAT WEBSITE DIBUKA
========================================= */

renderCategories();
