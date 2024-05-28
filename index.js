const button = document.getElementById('button');
const text = document.getElementById('text');
const h4 = document.getElementById('h4');

button.addEventListener('click', function() {
    h4.textContent = text.value;
    
})