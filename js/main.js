const items = ['uova', 'latte', 'pane', 'pasta', 'soia'];

let listaDom = document.getElementById('list');

let i = 0;

while (i <= items.length - 1) {

    listaDom.innerHTML += `<li>${items[i]}</li>`

    i++;
}