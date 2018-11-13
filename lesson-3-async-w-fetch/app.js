(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;
    });


    fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
        headers: {
            Authorization: 'Client-ID 09adddb5121f6e55b243bd1c8ed8c849b7e2b14ffc4289a20cee193023f9e108'
        }
    }).then(function(response) {
        console.log(response.json().then(addImage));
        function addImag // work with the returned response
    });    
})();

