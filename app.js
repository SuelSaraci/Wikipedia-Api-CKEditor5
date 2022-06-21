const description_elem = document.querySelector(".contentDetails");
var myClassicEditor;
var search = window.location.search.substr(1);

if(search) {
    var api ="https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro&explaintext&redirects=1&titles=" + search

    fetch(api)
    .then(response => response.json())
    .then(response => {
        response = response.query.pages;
        var pageid = Object.keys(response)[0];
        var extract = response[pageid].extract;

        ClassicEditor.create(description_elem)
                    .then(editor => {myClassicEditor = editor})
                    .catch(error => {console.error(error)})
        description_elem.innerHTML = extract;
    })
}