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


function layer_pop(elem) {
    elem.onclick = function () {
        let layer = document.getElementById("layer-pop");
        document.getElementById('layer-content').textContent = elem.textContent;
        layer.style.display = "flex";
        console.log('asd')
        document.getElementById('layer-close').onclick = function () {
            layer.style.display = "none";
        }
    };
}
titles.forEach(window_pop)