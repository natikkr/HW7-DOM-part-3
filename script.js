let button = document.getElementById('btn')
btn.addEventListener('click', function () {
    let text = document.getElementById('textInput').value
    let newEl = document.createElement('li')
    newEl.innerText = text;
    document.querySelector('ul').append(newEl);
    let button = document.createElement('button');
    button.innerText = 'Click me!';
    newEl.appendChild(button);
   
});
document.getElementById("btn").onclick = function() {
document.getElementById("textInput").value = " ";
};

let ul = document.querySelector('ul');
ul.addEventListener('click', (event) =>{
    if(event.target.tagName === 'LI') {
        event.target.classList.toggle('active');
    }

});

