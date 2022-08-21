let titles = document.querySelectorAll('.title');

titles.forEach(elem => {
    elem.onclick = function() {
        alert(elem.textContent);
    }
})