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


// menyisipkan list baru (di tengah")
// menggunakan node.insertBefore

const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('item baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)')

ul.insertBefore(liBaru, li2);



// removeChild
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);