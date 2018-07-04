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
    const unsplashRequest = new XMLHttpRequest();

    unsplashRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
    unsplashRequest.onload = addImage;
    unsplashRequest.setRequestHeader('Authorization', 'Client-ID 09adddb5121f6e55b243bd1c8ed8c849b7e2b14ffc4289a20cee193023f9e108');
    unsplashRequest.send();

    function addImage() {
        const data = JSON.parse(this.responseText); //convert response from json into a Javascript object and format the data
        let htmlContent = '';

        if (data && data.results && data.results[0]) {//add the first image to the page 
            const firstImage = data.results[0];
            htmlContent = `<figure>
                <img src="${firstImage.urls.regular}" alt="${searchedForText}">
                <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
                <figure>`;
        } else {
            htmlContent = '<div class="error-no-image">No images available</div>';
        }
        responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
    }

    const articleRequest = new XMLHttpRequest();
    articleRequest.onload = addArticles;
    articleRequest.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=22ffa90da46b4516a1db2eea01c7bcf6`);
    articleRequest.send();
    function addArticles() {
        let htmlContent = '';
        const data = JSON.parse(this.responseText);

        if (data.response && data.response.docs && data.response.docs.length > 1) {
            htmlContent = '<ul>' + data.response.docs.map(article => `<li class="article">
            <h2><a href="${article.web_url}">${article.headline.main}</a></h2>
            <p>"${article.snippet}"</p></li>`).join('') +'</ul>';
        } else {
            htmlContent = '<div class="error-no-image">No information available</div>';
        }
        responseContainer.insertAdjacentHTML('beforeend', htmlContent);
    }
})();
