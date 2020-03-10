//Dom Selection
//document.getElementById -> Element
const judul = document.getElementById('judul');
judul.style.color = 'blue';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Hello Dunia';


//document.getElementsByTagName -> HTML Collection
const p = document.getElementsByTagName('p');

for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

//document.getElementsByClassName -> HTML Collection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini diubah dari Javascript';

//document.querySelector() -> element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// document.querySelectorAll()
// const p = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++) {
//     p[1].style.backgroundColor = 'green';
// }