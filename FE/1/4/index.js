let cells = document.getElementsByClassName('cell')

for (let cell of cells) {
    cell.addEventListener('click', function () {
        let imgSrc = cell.getElementsByTagName('img')[0].getAttribute('src')
        let title = cell.getElementsByClassName('title')[0].textContent
        let content = cell.getElementsByClassName('content')[0].textContent
        location.href = 'detail.html?'
            + 'imgSrc=' + imgSrc + '&'
            + 'title=' + title + '&'
            + 'content=' + content
    })
}