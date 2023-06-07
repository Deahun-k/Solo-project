const searchIcon = document.querySelector('#search-icon');
const searchInput = document.querySelector('#search-input');

window.onload = function(){
    searchIcon.addEventListener('click', function() {
        const searchValue = searchInput.value;
        if (searchValue.trim() !== '') {
            fetch(`/api?query=${searchValue}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
    });
}