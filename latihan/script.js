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
