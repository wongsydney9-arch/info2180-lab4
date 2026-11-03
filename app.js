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
    const popupcontent = document.querySelector('#popup div');
    const popup = document.getElementById('popup');
    fetch('superheroes.php')
        .then(response => response.text())
        .then(data => {
            popupcontent.innerHTML = data;
            popup.showModal();
        })
        .catch(error => console.error('Cannot load file.', error))
}