// dom manipulation
// buat element baru

// menyisipkan paragraf baru
// menggunakan appendChild
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');
// simpan tulisan ke dalam paragraf

pBaru.appendChild(teksPBaru);
// simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);