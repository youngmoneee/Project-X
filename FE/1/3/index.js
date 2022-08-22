let titles = document.querySelectorAll('.title');

function alert_pop(elem) {
    elem.onclick = function () {
        alert(elem.textContent);
    }
}

function window_pop(elem) {
    const popup_url = 'popup/popup.html'
    elem.onclick = function () {
        let child = window;
        child.title = elem.id;
        child.text = elem.textContent;
        child.open(popup_url, '', 'width=320, height=320');
    }
}

titles.forEach(window_pop)