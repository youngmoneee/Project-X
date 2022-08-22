self.addEventListener('load', function () {
    document.title = opener.title;
    document.getElementById('content').innerText = opener.text;
});