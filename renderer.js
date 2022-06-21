// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const searchInput = document.querySelector(".search-input");
const btnClick = document.querySelector(".btnClick");

searchInput.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
        var value = searchInput.value;
        if(value) {
            window.location.href = "read.html?" + value;
        }
    }
})
searchInput.addEventListener('click', function(e) {
    var value = searchInput.value;
        if(value) {
            window.location.href = "read.html?" + value;
        }
    
})