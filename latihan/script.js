// setTimeout()
const tes = setTimeout(function () {
  console.log("ok");
}, 5000);

const tombol = document.getElementById("tombol");
tombol.addEventListener("click", function () {
  clearTimeout(tes);
  console.log("selesai");
});

// setInterval
const coba = setInterval(function () {
  console.log("ok");
}, 2000);

const klik = document.getElementById("klik");
klik.addEventListener("click", function () {
  clearInterval(coba);
  console.log("selesai");
});

// Program Hitung Mundur
const tanggalTujuan = new Date("Apr 13, 2020 16:00:00").getTime();
const sekarang = new Date().getTime();
const hitungMundur = setInterval(function () {
  const selisih = tanggalTujuan - sekarang;
  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((selisih % (1000 * 60)) / 1000);

  const teks = document.getElementById("teks");
  teks.innerHTML =
    "Waktu anda tinggal : " +
    hari +
    " hari " +
    jam +
    " jam " +
    menit +
    " menit " +
    detik +
    " detik lagi ";

  if (selisih == 0) {
    clearInterval(hitungMundur);
    teks.innerHTML = "Waktu Habis";
  }
}, 1000);
