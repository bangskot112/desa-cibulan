const KATEGORI = [
  { id: "daya-tarik", label: "Daya Tarik" },
  { id: "aktivitas", label: "Aktivitas" },
  { id: "fasilitas", label: "Fasilitas" },
  { id: "kuliner", label: "Kuliner" }
];

const LOKASI = "Desa Maniskidul, Kec. Jalaksana, Kab. Kuningan";
const INFO_UMUM = "Hubungi pengelola untuk jam buka, tarif, dan ketentuan kunjungan terbaru.";

const wisata = [
  {
    id: 1,
    nama: "Kolam Ikan Dewa",
    kategori: "daya-tarik",
    gambar: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=600&q=80",
    ringkas: "Kolam tempat ikan dewa hidup dan bisa dilihat dari dekat.",
    deskripsi: "Ikan dewa adalah ikon Cibulan. Anda melihat ikan dari tepi kolam dan memberi pakan.",
    fasilitas: ["Area tepi kolam", "Pakan ikan", "Spot foto"],
    lokasi: LOKASI,
    info: INFO_UMUM
  },
  {
    id: 2,
    nama: "Situs 7 Sumur",
    kategori: "daya-tarik",
    gambar: "https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=600&q=80",
    ringkas: "Tujuh sumur yang menyimpan cerita dan tradisi setempat.",
    deskripsi: "Anda mengenal sejarah dan kepercayaan warga Cibulan lewat tujuh sumur ini.",
    fasilitas: ["Jalur jalan kaki", "Papan informasi", "Pemandu lokal"],
    lokasi: LOKASI,
    info: INFO_UMUM
  },
  {
    id: 3,
    nama: "Panorama Perbukitan",
    kategori: "daya-tarik",
    gambar: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    ringkas: "Pemandangan bukit hijau untuk santai dan berfoto.",
    deskripsi: "Area terbuka menghadap perbukitan. Anda bisa berjalan santai bersama keluarga.",
    fasilitas: ["Area santai", "Spot foto"],
    lokasi: LOKASI,
    info: INFO_UMUM
  },
  {
    id: 4,
    nama: "Terapi Ikan",
    kategori: "aktivitas",
    gambar: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&q=80",
    ringkas: "Rendam kaki dan biarkan ikan kecil membersihkannya.",
    deskripsi: "Anda merendam kaki di kolam khusus. Anak dan dewasa boleh mencoba.",
    fasilitas: ["Kolam khusus", "Petugas pendamping"],
    lokasi: LOKASI,
    info: INFO_UMUM
  },
  {
    id: 5,
    nama: "Sepeda Gantung (Zip Bike)",
    kategori: "aktivitas",
    gambar: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80",
    ringkas: "Mengayuh sepeda di atas lintasan kabel dengan pemandangan terbuka.",
    deskripsi: "Anda mengayuh sepeda di atas lintasan kabel, tinggi di atas tanah.",
    fasilitas: ["Perlengkapan pengaman", "Petugas pendamping"],
    lokasi: LOKASI,
    info: INFO_UMUM + " Aktivitas ini memiliki batas usia dan berat badan."
  },
  {
    id: 6,
    nama: "Flying Fox Melintas Kolam",
    kategori: "aktivitas",
    gambar: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    ringkas: "Meluncur melintasi kolam dengan tali flying fox.",
    deskripsi: "Anda meluncur di atas kolam dari satu menara ke menara lain.",
    fasilitas: ["Perlengkapan pengaman", "Petugas pendamping"],
    lokasi: LOKASI,
    info: INFO_UMUM + " Aktivitas ini memiliki batas usia dan berat badan."
  },
  {
    id: 7,
    nama: "Sewa Gazebo Keluarga",
    kategori: "fasilitas",
    gambar: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=600&q=80",
    ringkas: "Saung untuk beristirahat dan makan bersama keluarga.",
    deskripsi: "Keluarga menyewa gazebo per saung untuk berkumpul dan makan bersama.",
    fasilitas: ["Saung teduh", "Dekat area kolam"],
    lokasi: LOKASI,
    info: INFO_UMUM
  },
  {
    id: 8,
    nama: "Area Parkir",
    kategori: "fasilitas",
    gambar: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    ringkas: "Parkir untuk motor, mobil, dan bus pariwisata.",
    deskripsi: "Motor, mobil, dan bus rombongan parkir di area ini.",
    fasilitas: ["Parkir motor", "Parkir mobil", "Parkir bus pariwisata"],
    lokasi: LOKASI,
    info: INFO_UMUM
  },
  {
    id: 9,
    nama: "Warung Kuliner Lokal",
    kategori: "kuliner",
    gambar: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
    ringkas: "Makanan dan minuman khas desa untuk mengisi waktu istirahat.",
    deskripsi: "Warga menjual makanan ringan, makanan berat, dan minuman di sekitar area wisata.",
    fasilitas: ["Tempat duduk", "Menu makanan dan minuman"],
    lokasi: LOKASI,
    info: INFO_UMUM
  },
  {
    id: 10,
    nama: "Produk UMKM dan Oleh-oleh",
    kategori: "kuliner",
    gambar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    ringkas: "Kerajinan dan camilan buatan warga untuk dibawa pulang.",
    deskripsi: "Pelaku UMKM desa menjual camilan dan kerajinan untuk dibawa pulang.",
    fasilitas: ["Kios UMKM", "Produk lokal"],
    lokasi: LOKASI,
    info: INFO_UMUM
  }
];

const KUNCI_RENCANA = "cibulan_rencana";
const KUNCI_TEMA = "cibulan_tema";

let kategoriAktif = "semua";
let rencana = [];
let timerToast;

const $ = (id) => document.getElementById(id);

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function bacaPenyimpanan(kunci) {
  try {
    return localStorage.getItem(kunci);
  } catch (e) {
    return null;
  }
}

function tulisPenyimpanan(kunci, nilai) {
  try {
    localStorage.setItem(kunci, nilai);
  } catch (e) {}
}

function labelKategori(id) {
  return KATEGORI.find((k) => k.id === id).label;
}

function cariWisata(id) {
  return wisata.find((w) => w.id === id);
}

function dalamRencana(id) {
  return rencana.includes(id);
}

function tampilkanToast(pesan) {
  const toast = $("toast");
  toast.textContent = pesan;
  toast.classList.add("tampil");
  clearTimeout(timerToast);
  timerToast = setTimeout(() => toast.classList.remove("tampil"), 2500);
}

function aturTombolRencana(tombol) {
  const aktif = dalamRencana(Number(tombol.dataset.id));
  tombol.textContent = aktif ? "\u2713 Dalam Rencana" : "+ Tambah ke Rencana";
  tombol.classList.toggle("aktif", aktif);
}

function perbaruiTombolRencana() {
  document.querySelectorAll('[data-aksi="rencana"]').forEach(aturTombolRencana);
}

function hitungKategori(id) {
  return id === "semua" ? wisata.length : wisata.filter((w) => w.kategori === id).length;
}

function renderFilter() {
  const bar = $("filter-kategori");
  const pilihan = [{ id: "semua", label: "Semua" }, ...KATEGORI];
  bar.replaceChildren();
  pilihan.forEach((p) => {
    const tombol = el("button", "filter-btn", `${p.label} (${hitungKategori(p.id)})`);
    const aktif = p.id === kategoriAktif;
    tombol.type = "button";
    tombol.dataset.kategori = p.id;
    tombol.classList.toggle("aktif", aktif);
    tombol.setAttribute("aria-pressed", String(aktif));
    bar.appendChild(tombol);
  });
}

function buatKartu(w) {
  const kartu = el("article", "wisata-card");
  const gambar = el("img");
  const isi = el("div", "wisata-card-isi");
  const aksi = el("div", "wisata-aksi");
  const detail = el("button", "btn-detail", "Lihat Detail");
  const tombolRencana = el("button", "btn-plan");

  gambar.src = w.gambar;
  gambar.alt = w.nama;
  gambar.loading = "lazy";

  detail.type = "button";
  detail.dataset.aksi = "detail";
  detail.dataset.id = w.id;

  tombolRencana.type = "button";
  tombolRencana.dataset.aksi = "rencana";
  tombolRencana.dataset.id = w.id;
  aturTombolRencana(tombolRencana);

  aksi.append(detail, tombolRencana);
  isi.append(el("span", "badge-kategori", labelKategori(w.kategori)), el("h3", "", w.nama), el("p", "", w.ringkas), aksi);
  kartu.append(gambar, isi);
  return kartu;
}

function renderKartu() {
  const tampil = kategoriAktif === "semua" ? wisata : wisata.filter((w) => w.kategori === kategoriAktif);
  const nama = kategoriAktif === "semua" ? "semua kategori" : `kategori ${labelKategori(kategoriAktif)}`;
  $("daftar-wisata").replaceChildren(...tampil.map(buatKartu));
  $("info-filter").textContent = `Menampilkan ${tampil.length} dari ${wisata.length} wisata (${nama}).`;
}

function bukaModal(id) {
  const w = cariWisata(id);
  const gambar = el("img", "modal-gambar");
  const badan = el("div", "modal-badan");
  const judul = el("h3", "", w.nama);
  const info = el("dl", "modal-info");
  const fasilitas = el("ul", "modal-fasilitas");
  const aksi = el("div", "wisata-aksi");
  const tombolRencana = el("button", "btn-plan");
  const simulasi = el("a", "btn-detail", "Simulasikan Kunjungan");

  gambar.src = w.gambar;
  gambar.alt = w.nama;
  judul.id = "modal-judul";

  info.append(el("dt", "", "Lokasi"), el("dd", "", w.lokasi), el("dt", "", "Informasi kunjungan"), el("dd", "", w.info));
  w.fasilitas.forEach((f) => fasilitas.appendChild(el("li", "", f)));

  tombolRencana.type = "button";
  tombolRencana.dataset.aksi = "rencana";
  tombolRencana.dataset.id = w.id;
  aturTombolRencana(tombolRencana);

  simulasi.href = "#simulasi";
  simulasi.dataset.aksi = "simulasi";
  simulasi.dataset.kategori = w.kategori;

  aksi.append(tombolRencana, simulasi);
  badan.append(
    el("span", "badge-kategori", labelKategori(w.kategori)),
    judul,
    el("p", "", w.deskripsi),
    info,
    el("h4", "", "Fasilitas"),
    fasilitas,
    aksi
  );

  $("modal-isi").replaceChildren(gambar, badan);
  $("modal").hidden = false;
  document.body.classList.add("modal-terbuka");
  $("modal-tutup").focus();
}

function tutupModal() {
  $("modal").hidden = true;
  document.body.classList.remove("modal-terbuka");
}

function simpanRencana() {
  tulisPenyimpanan(KUNCI_RENCANA, JSON.stringify(rencana));
}

function renderRencana() {
  const daftar = $("daftar-rencana");
  const aktivitas = rencana.filter((id) => cariWisata(id).kategori === "aktivitas").length;

  daftar.replaceChildren();
  if (rencana.length === 0) {
    daftar.appendChild(el("li", "rencana-kosong", "Daftar masih kosong. Klik Tambah ke Rencana pada kartu wisata."));
  }
  rencana.forEach((id) => {
    const w = cariWisata(id);
    const item = el("li", "rencana-item");
    const teks = el("div", "rencana-teks");
    const hapus = el("button", "btn-hapus", "Hapus");

    teks.append(el("strong", "", w.nama), el("span", "", labelKategori(w.kategori)));
    hapus.type = "button";
    hapus.dataset.aksi = "hapus";
    hapus.dataset.id = id;
    item.append(teks, hapus);
    daftar.appendChild(item);
  });

  $("jumlah-rencana").textContent = rencana.length;
  $("jumlah-aktivitas").textContent = aktivitas;
  $("badge-rencana").textContent = rencana.length;
  $("kosongkan-rencana").disabled = rencana.length === 0;
}

function perbaruiRencana(pesan) {
  simpanRencana();
  renderRencana();
  perbaruiTombolRencana();
  tampilkanToast(pesan);
}

function ubahRencana(id) {
  const nama = cariWisata(id).nama;
  if (dalamRencana(id)) {
    rencana = rencana.filter((r) => r !== id);
    perbaruiRencana(`${nama} dihapus dari rencana.`);
  } else {
    rencana = [...rencana, id];
    perbaruiRencana(`${nama} ditambahkan ke rencana.`);
  }
}

function hapusDariRencana(id) {
  rencana = rencana.filter((r) => r !== id);
  perbaruiRencana(`${cariWisata(id).nama} dihapus dari rencana.`);
}

function kosongkanRencana() {
  rencana = [];
  perbaruiRencana("Daftar rencana dikosongkan.");
}

function hariIni() {
  const d = new Date();
  const bulan = String(d.getMonth() + 1).padStart(2, "0");
  const hari = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${bulan}-${hari}`;
}

function validasi(data) {
  const galat = {};
  const jumlah = Number(data.jumlah);

  if (!data.nama) galat.nama = "Nama wajib diisi.";
  else if (data.nama.length < 3) galat.nama = "Nama minimal 3 karakter.";
  else if (!/^[\p{L}\s.'-]+$/u.test(data.nama)) galat.nama = "Nama hanya boleh berisi huruf.";

  if (!data.tanggal) galat.tanggal = "Pilih tanggal kunjungan.";
  else if (data.tanggal < hariIni()) galat.tanggal = "Tanggal tidak boleh sudah lewat.";

  if (data.jumlah === "") galat.jumlah = "Jumlah pengunjung wajib diisi.";
  else if (!Number.isInteger(jumlah) || jumlah < 1 || jumlah > 100) galat.jumlah = "Isi bilangan bulat 1 sampai 100.";

  if (!data.kategori) galat.kategori = "Pilih kategori kunjungan.";

  return galat;
}

function tampilkanGalat(galat) {
  ["nama", "tanggal", "jumlah", "kategori"].forEach((f) => {
    const input = $(`sim-${f}`);
    $(`err-${f}`).textContent = galat[f] || "";
    input.classList.toggle("invalid", Boolean(galat[f]));
    input.setAttribute("aria-invalid", String(Boolean(galat[f])));
  });
}

function kosongkanHasil() {
  $("hasil-simulasi").replaceChildren(
    el("h3", "", "Ringkasan Simulasi"),
    el("p", "hasil-kosong", "Isi formulir, lalu klik Kirim Simulasi untuk melihat ringkasan.")
  );
}

function renderHasil(data) {
  const tanggal = new Date(`${data.tanggal}T00:00:00`).toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  const daftarRencana = rencana.length ? rencana.map((id) => cariWisata(id).nama).join(", ") : "Belum ada item";
  const baris = [
    ["Nama", data.nama],
    ["Tanggal", tanggal],
    ["Jumlah", `${data.jumlah} orang`],
    ["Kategori", labelKategori(data.kategori)],
    ["Rencana", daftarRencana]
  ];
  const tabel = el("div", "summary-table");

  baris.forEach(([kunci, nilai]) => {
    const row = el("div");
    row.append(el("span", "", kunci), el("strong", "", nilai));
    tabel.appendChild(row);
  });

  $("hasil-simulasi").replaceChildren(
    el("h3", "", "Ringkasan Simulasi"),
    el("p", "summary-sub", "Data tidak dikirim ke server."),
    tabel,
    el("p", "catatan-simulasi", "Ini simulasi di sisi klien. Tidak ada pemesanan resmi atau pembayaran.")
  );
}

function isiPilihanKategori() {
  const pilihan = $("sim-kategori");
  KATEGORI.forEach((k) => {
    const opsi = el("option", "", k.label);
    opsi.value = k.id;
    pilihan.appendChild(opsi);
  });
}

function aturTema(gelap) {
  const tombol = $("tema");
  document.body.classList.toggle("gelap", gelap);
  tombol.textContent = gelap ? "Mode Terang" : "Mode Gelap";
  tombol.setAttribute("aria-pressed", String(gelap));
  tulisPenyimpanan(KUNCI_TEMA, gelap ? "gelap" : "terang");
}

$("filter-kategori").addEventListener("click", (e) => {
  const tombol = e.target.closest(".filter-btn");
  if (!tombol) return;
  kategoriAktif = tombol.dataset.kategori;
  renderFilter();
  renderKartu();
});

document.addEventListener("click", (e) => {
  const aksi = e.target.closest("[data-aksi]");
  const toggle = e.target.closest("[data-toggle]");

  if (e.target === $("modal") || e.target.closest("#modal-tutup")) tutupModal();

  if (toggle) {
    const panel = $(toggle.dataset.toggle);
    panel.hidden = !panel.hidden;
    toggle.textContent = panel.hidden ? toggle.dataset.buka : toggle.dataset.tutup;
    toggle.setAttribute("aria-expanded", String(!panel.hidden));
  }

  if (!aksi) return;
  const id = Number(aksi.dataset.id);

  if (aksi.dataset.aksi === "detail") bukaModal(id);
  if (aksi.dataset.aksi === "rencana") ubahRencana(id);
  if (aksi.dataset.aksi === "hapus") hapusDariRencana(id);
  if (aksi.dataset.aksi === "kosongkan") kosongkanRencana();
  if (aksi.dataset.aksi === "simulasi") {
    tutupModal();
    $("sim-kategori").value = aksi.dataset.kategori;
    tampilkanGalat({});
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !$("modal").hidden) tutupModal();
});

$("tema").addEventListener("click", () => aturTema(!document.body.classList.contains("gelap")));

$("form-simulasi").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    nama: $("sim-nama").value.trim(),
    tanggal: $("sim-tanggal").value,
    jumlah: $("sim-jumlah").value,
    kategori: $("sim-kategori").value
  };
  const galat = validasi(data);
  const pertama = Object.keys(galat)[0];

  tampilkanGalat(galat);
  if (pertama) {
    $(`sim-${pertama}`).focus();
    tampilkanToast("Periksa kembali isian formulir.");
    return;
  }
  renderHasil(data);
  tampilkanToast("Simulasi kunjungan berhasil dibuat.");
});

$("form-simulasi").addEventListener("input", (e) => {
  const field = e.target.id.replace("sim-", "");
  const pesan = $(`err-${field}`);
  if (!pesan) return;
  pesan.textContent = "";
  e.target.classList.remove("invalid");
  e.target.setAttribute("aria-invalid", "false");
});

$("form-simulasi").addEventListener("reset", () => {
  tampilkanGalat({});
  kosongkanHasil();
});

function muatRencana() {
  try {
    const data = JSON.parse(bacaPenyimpanan(KUNCI_RENCANA));
    return Array.isArray(data) ? data.filter(cariWisata) : [];
  } catch (e) {
    return [];
  }
}

rencana = muatRencana();

isiPilihanKategori();
$("sim-tanggal").min = hariIni();
kosongkanHasil();
renderFilter();
renderKartu();
renderRencana();
aturTema(bacaPenyimpanan(KUNCI_TEMA) === "gelap");
