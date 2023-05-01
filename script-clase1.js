const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'Patito <br> Feo';
h1.innerText = 'Patito <br> Feo';

// h1.setAttribute('class', 'rojo'); //cambio la class

h1.classList.add('rojo'); //agrega una clase
h1.classList.remove('verde'); //borra una clase
// h1.classList.toggle('verde'); // si tiene saca, si no tiene pone
// h1.classList.contains('verde'); // devuelve true o false si esta

const img = document.createElement('img');
img.setAttribute('src', 'https://i.pinimg.com/564x/9e/1c/4a/9e1c4a56869d0f0c2d4f3f017bf4df79.jpg');

pid.append(img);