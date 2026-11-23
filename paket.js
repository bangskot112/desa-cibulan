const KUNCI_PAKET = "cibulan_paket_wisata";

let daftarPermintaan = [];

function ambilElemen(id) {
  return document.getElementById(id);
}

function bacaDataPaket() {
  try {
    const raw = localStorage.getItem(KUNCI_PAKET);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

function simpanDataPaket() {
  try {
    localStorage.setItem(KUNCI_PAKET, JSON.stringify(daftarPermintaan));
    return true;
  } catch (e) {
    return false;
  }
}

function ambilNilaiFormulir() {
  const paketTerpilih = document.querySelector('input[name="jenis_paket"]:checked');
  const layananTerpilih = Array.from(document.querySelectorAll('input[name="layanan[]"]:checked')).map(
    (cb) => cb.value
  );

  return {
    id: Date.now() + Math.floor(Math.random() * 1000),
    nama: ambilElemen("nama").value.trim(),
    email: ambilElemen("email").value.trim(),
    telepon: ambilElemen("telepon").value.trim(),
    instansi: ambilElemen("instansi").value.trim() || "-",
    jenis_pemesan: ambilElemen("jenis_pemesan").value || "-",
    kota: ambilElemen("kota").value.trim() || "-",
    jenis_paket: paketTerpilih ? paketTerpilih.value : "Belum dipilih",
    destinasi_utama: ambilElemen("destinasi_utama").value || "-",
    jumlah_peserta: Number(ambilElemen("jumlah_peserta").value) || 0,
    tanggal_kunjungan: ambilElemen("tanggal_kunjungan").value || "",
    waktu_tiba: ambilElemen("waktu_tiba").value || "-",
    tanggal_alternatif: ambilElemen("tanggal_alternatif").value || "-",
    durasi: ambilElemen("durasi").value || "-",
    layanan: layananTerpilih.length ? layananTerpilih.join(", ") : "-",
    transportasi: ambilElemen("transportasi").value || "-",
    anggaran: ambilElemen("anggaran").value || "Belum dipilih",
    preferensi: `${ambilElemen("preferensi").value} / 5`,
    warna_kelompok: ambilElemen("warna_kelompok").value,
    bahasa: ambilElemen("bahasa").value || "-",
    catatan: ambilElemen("catatan").value.trim() || "-",
    sumber_info: ambilElemen("sumber_info").value || "-",
    kode_referensi: ambilElemen("kode_referensi").value.trim() || "-",
    cara_dihubungi: ambilElemen("cara_dihubungi").value || "WhatsApp",
    kode_promo: ambilElemen("kode_promo").value.trim() || "-",
    setuju_promo: ambilElemen("setuju_promo").checked ? "Ya" : "Tidak"
  };
}

function perbaruiRingkasan() {
  const data = ambilNilaiFormulir();
  ambilElemen("sum-paket").textContent = data.jenis_paket;
  ambilElemen("sum-peserta").textContent = `${data.jumlah_peserta} orang`;
  ambilElemen("sum-tanggal").textContent = data.tanggal_kunjungan || "Belum dipilih";
  ambilElemen("sum-anggaran").textContent = data.anggaran;
  ambilElemen("sum-kontak").textContent = data.cara_dihubungi;
  ambilElemen("nilai-preferensi").textContent = `${ambilElemen("preferensi").value} / 5`;
}

function tampilkanPesanKonfirmasi(nama) {
  const box = ambilElemen("pesan-konfirmasi");
  box.replaceChildren();

  const p = document.createElement("p");
  p.append(
    document.createTextNode(`Terima kasih, ${nama}. Data berhasil disimpan di browser. Buka halaman `),
    (() => {
      const link = document.createElement("a");
      link.href = "#daftar-paket-section";
      link.id = "link-ke-data-paket";
      link.textContent = "Data Paket Wisata";
      link.addEventListener("click", () => {
        renderTabelDanStatistik();
      });
      return link;
    })(),
    document.createTextNode(" untuk melihat isian.")
  );

  box.appendChild(p);
  box.hidden = false;
}

function hitungPaketPopuler(items) {
  if (!items.length) return "-";
  const hitungan = {};
  items.forEach((item) => {
    const namaPaket = item.jenis_paket || "Belum dipilih";
    hitungan[namaPaket] = (hitungan[namaPaket] || 0) + 1;
  });

  let populer = "-";
  let tertinggi = 0;
  Object.entries(hitungan).forEach(([paket, jumlah]) => {
    if (jumlah > tertinggi) {
      tertinggi = jumlah;
      populer = paket;
    }
  });
  return populer;
}

function renderTabelDanStatistik() {
  const kataKunci = ambilElemen("cari-permintaan").value.trim().toLowerCase();
  const tersaring = daftarPermintaan.filter((item) => {
    return [
      item.nama,
      item.email,
      item.jenis_paket,
      item.tanggal_kunjungan,
      item.kota,
      item.instansi
    ].some((nilai) => String(nilai || "").toLowerCase().includes(kataKunci));
  });

  const totalPeserta = daftarPermintaan.reduce(
    (total, item) => total + (Number(item.jumlah_peserta) || 0),
    0
  );

  ambilElemen("stat-total").textContent = String(daftarPermintaan.length);
  ambilElemen("stat-peserta").textContent = String(totalPeserta);
  ambilElemen("stat-paket-populer").textContent = hitungPaketPopuler(daftarPermintaan);

  const tbody = ambilElemen("tbody-permintaan");
  tbody.replaceChildren();

  if (tersaring.length === 0) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 7;
    td.className = "tabel-kosong";
    td.textContent =
      daftarPermintaan.length === 0
        ? "Belum ada data permintaan paket wisata tersimpan."
        : "Data permintaan tidak ditemukan.";
    tr.appendChild(td);
    tbody.appendChild(tr);
    return;
  }

  tersaring.forEach((item, index) => {
    const tr = document.createElement("tr");

    const tdNo = document.createElement("td");
    tdNo.textContent = String(index + 1);

    const tdPemesan = document.createElement("td");
    const strongNama = document.createElement("strong");
    strongNama.textContent = item.nama;
    const spanInstansi = document.createElement("small");
    spanInstansi.textContent = item.instansi;
    tdPemesan.append(strongNama, spanInstansi);

    const tdPaket = document.createElement("td");
    const badgePaket = document.createElement("span");
    badgePaket.className = "badge-paket-tabel";
    badgePaket.textContent = item.jenis_paket;
    const spanDestinasi = document.createElement("small");
    spanDestinasi.textContent = item.destinasi_utama;
    tdPaket.append(badgePaket, spanDestinasi);

    const tdTanggal = document.createElement("td");
    const spanTgl = document.createElement("strong");
    spanTgl.textContent = item.tanggal_kunjungan || "-";
    const spanWaktu = document.createElement("small");
    spanWaktu.textContent = item.waktu_tiba || "-";
    tdTanggal.append(spanTgl, spanWaktu);

    const tdPeserta = document.createElement("td");
    tdPeserta.textContent = `${item.jumlah_peserta} orang`;

    const tdKontak = document.createElement("td");
    const spanTelp = document.createElement("strong");
    spanTelp.textContent = item.telepon;
    const spanEmail = document.createElement("small");
    spanEmail.textContent = item.email;
    tdKontak.append(spanTelp, spanEmail);

    const tdAksi = document.createElement("td");
    tdAksi.className = "aksi-cell";

    const btnDetail = document.createElement("button");
    btnDetail.type = "button";
    btnDetail.className = "btn-aksi-detail";
    btnDetail.textContent = "Detail";
    btnDetail.dataset.id = String(item.id);
    btnDetail.dataset.aksi = "detail";

    const btnHapus = document.createElement("button");
    btnHapus.type = "button";
    btnHapus.className = "btn-aksi-hapus";
    btnHapus.textContent = "Hapus";
    btnHapus.dataset.id = String(item.id);
    btnHapus.dataset.aksi = "hapus";

    tdAksi.append(btnDetail, btnHapus);
    tr.append(tdNo, tdPemesan, tdPaket, tdTanggal, tdPeserta, tdKontak, tdAksi);
    tbody.appendChild(tr);
  });
}

function bukaDetailPermintaan(id) {
  const item = daftarPermintaan.find((data) => String(data.id) === String(id));
  if (!item) return;

  const rincian = [
    ["Nama pemesan", item.nama],
    ["Email", item.email],
    ["Telepon / WhatsApp", item.telepon],
    ["Instansi / komunitas", item.instansi],
    ["Jenis pemesan", item.jenis_pemesan],
    ["Kota asal", item.kota],
    ["Paket wisata", item.jenis_paket],
    ["Destinasi", item.destinasi_utama],
    ["Jumlah peserta", `${item.jumlah_peserta} orang`],
    ["Tanggal kunjungan", item.tanggal_kunjungan || "-"],
    ["Waktu tiba", item.waktu_tiba],
    ["Tanggal alternatif", item.tanggal_alternatif],
    ["Durasi kunjungan", item.durasi],
    ["Anggaran", item.anggaran],
    ["Layanan tambahan", item.layanan],
    ["Transportasi", item.transportasi],
    ["Cara dihubungi", item.cara_dihubungi],
    ["Catatan", item.catatan]
  ];

  const grid = ambilElemen("isi-modal-detail");
  grid.replaceChildren();

  rincian.forEach(([label, nilai]) => {
    const kotak = document.createElement("div");
    kotak.className = "detail-field-box";

    const spanLabel = document.createElement("span");
    spanLabel.textContent = label;

    const strongVal = document.createElement("strong");
    strongVal.textContent = nilai;

    kotak.append(spanLabel, strongVal);
    grid.appendChild(kotak);
  });

  ambilElemen("modal-detail").hidden = false;
  document.body.classList.add("modal-terbuka");
}

function tutupDetailPermintaan() {
  ambilElemen("modal-detail").hidden = true;
  document.body.classList.remove("modal-terbuka");
}

function hapusPermintaan(id) {
  daftarPermintaan = daftarPermintaan.filter((data) => String(data.id) !== String(id));
  simpanDataPaket();
  renderTabelDanStatistik();
  ambilElemen("status-data-paket").textContent = "Data pesanan berhasil dihapus dari localStorage.";
}

ambilElemen("form-paket-wisata").addEventListener("submit", (e) => {
  e.preventDefault();
  const dataBaru = ambilNilaiFormulir();
  daftarPermintaan.unshift(dataBaru);
  simpanDataPaket();
  perbaruiRingkasan();
  renderTabelDanStatistik();
  tampilkanPesanKonfirmasi(dataBaru.nama);
  ambilElemen("status-data-paket").textContent = "Data berhasil dimuat melalui localStorage browser.";
});

ambilElemen("btn-pratinjau").addEventListener("click", () => {
  perbaruiRingkasan();
  ambilElemen("card-ringkasan").scrollIntoView({ behavior: "smooth", block: "nearest" });
});

ambilElemen("form-paket-wisata").addEventListener("input", perbaruiRingkasan);
ambilElemen("form-paket-wisata").addEventListener("change", perbaruiRingkasan);

ambilElemen("form-paket-wisata").addEventListener("reset", () => {
  setTimeout(() => {
    perbaruiRingkasan();
  }, 0);
});

ambilElemen("cari-permintaan").addEventListener("input", renderTabelDanStatistik);

ambilElemen("btn-muat-ulang").addEventListener("click", () => {
  daftarPermintaan = bacaDataPaket();
  renderTabelDanStatistik();
  ambilElemen("status-data-paket").textContent = "Data berhasil dimuat ulang melalui localStorage browser.";
});

ambilElemen("btn-hapus-semua").addEventListener("click", () => {
  if (!daftarPermintaan.length) return;
  if (!confirm("Hapus seluruh data permintaan paket wisata?")) return;
  daftarPermintaan = [];
  simpanDataPaket();
  renderTabelDanStatistik();
  ambilElemen("status-data-paket").textContent = "Semua data permintaan telah dihapus.";
});

ambilElemen("tbody-permintaan").addEventListener("click", (e) => {
  const tombol = e.target.closest("button[data-aksi]");
  if (!tombol) return;
  const id = tombol.dataset.id;
  if (tombol.dataset.aksi === "detail") {
    bukaDetailPermintaan(id);
  } else if (tombol.dataset.aksi === "hapus") {
    hapusPermintaan(id);
  }
});

ambilElemen("tutup-modal-detail").addEventListener("click", tutupDetailPermintaan);

ambilElemen("modal-detail").addEventListener("click", (e) => {
  if (e.target === ambilElemen("modal-detail")) {
    tutupDetailPermintaan();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !ambilElemen("modal-detail").hidden) {
    tutupDetailPermintaan();
  }
});

daftarPermintaan = bacaDataPaket();
perbaruiRingkasan();
renderTabelDanStatistik();