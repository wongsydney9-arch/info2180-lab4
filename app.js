document.addEventListener("DOMContentLoaded", () => {
    const searchbutton = document.querySelector('#search');
    searchbutton.addEventListener("click", search);
})

function search(){
    const input = document.getElementById('tbox').value.trim();
    const result = document.getElementById('result');
    fetch('superheroes.php?input=' + encodeURIComponent(input))
        .then(response => response.text())
        .then(data => {
            result.innerHTML = data;
        })
        .catch(error => {result.textContent = 'An error has occured.'
            console.error(error);
        });
}