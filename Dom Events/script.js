// mengubah warna background dg events
// Event Handler
const p3 = document.querySelector(".p3");

function ubahWarnaP2() {
    p2.style.backgroundColor = "lightblue";
}

function ubahWarnaP3() {
    p3.style.backgroundColor = "lightblue";
}

const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnaP2;