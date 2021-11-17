let monDiv = document.createElement('div');

document.getElementById('viewport').appendChild(monDiv);

monDiv.innerHTML = 'Ce div a été ajouté en utilisant javascript'

let monDiv2 = document.createElement('div');

monDiv.appendChild(monDiv2);

monDiv2.style.backgroundColor = 'red';
monDiv2.style.height = '100px';
monDiv2.style.width = '100px';

let span = document.getElementById('aSupprimer');

span.remove(span);

