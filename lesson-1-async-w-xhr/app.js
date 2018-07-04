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

    //XHR Request
    const requestObject = new XMLHttpRequest();//instantiate the xhr obj
    requestObject.onload = addImage;//If successfull a response is returned
    requestObject.onerror = function (errorMessage) {
        console.log('Houston we have a problem');
        requestError(errorMessage, 'image');
    };//if not successful this will occur

    requestObject.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedText}`);
    requestObject.setRequestHeader('', '');
    requestAnimationFrame.send();
    const searchedText = 'android';
    requestObject.send();

    function addImage() {
        console.log('Successful retrieval of data');
        let htmlContent = '';
        const data = JSON.parse(this.responseText);
        const firstImage = data.results[0];
        htmlContent = `<figure></figure>`;
        
    }
})();
