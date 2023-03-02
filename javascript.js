//For Lyte AutoRefresh on Lyte Main Page
function AutoRefresh(t){
    setTimeout("location.reload(true);", t);
}
    function scrollToEnd() {
        window.scrollTo(0, document.body.scrollHeight);
}
    function toggleMenu() {
        var menu = document.getElementById("side-menu");
        const menubutton1 = document.querySelector('#menu-button')
        if (menu.classList.toggle("open")) {
          menubutton1.classList.add('hidden'); 
        }else{
            menubutton1.classList.remove('hidden');
        };
}


//For Lyte Request Page
document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('#search-input');
    const results = document.querySelector('#search-results');
    const button = document.querySelector('#search-button');
    button.disabled = false;
    input.addEventListener('keyup', function() {
    if (input.value.length > 20) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
    });
    
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault(); // add this line
        const li = document.createElement('li');
        li.innerHTML = input.value; // update here
        results.append(li);
        button.disabled = true;
        input.value = '';
        });
    if(localStorage.getItem('searchResults')){ // check if there is anything in localstorage
        results.innerHTML = localStorage.getItem('searchResults'); // if there is, append it to the search results
    }
});
