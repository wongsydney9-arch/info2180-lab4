document.addEventListener("DOMContentLoaded", () => {
    const searchbutton = document.querySelector('#search');
    const closebutton = document.querySelector('#close');
    const popup = document.getElementById('popup');
    searchbutton.addEventListener("click", search);
    closebutton.addEventListener("click", () => {
        popup.close();
    });
})

function search(){
    fetch('superheroes.php')
        .then(response => response.text())
        .then(data => {
            window.alert(data);
        })
        .catch(error => window.alert('Cannot load file.', error))
}