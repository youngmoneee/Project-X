let titles = document.querySelectorAll('.title');

/*
titles.forEach(elem => {
    elem.onclick = function() {
        alert(elem.textContent);
    }
})
*/

const popup_url = 'popup/popup.html'
titles.forEach(elem => {
    elem.onclick = function () {
        let child = window;
        child.title = elem.id;
        child.text = elem.textContent;
        child.open(popup_url, '', 'width=320, height=320');
    }
})