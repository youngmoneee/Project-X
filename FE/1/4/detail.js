let data = new URL(location.href).searchParams
let content = document.getElementsByClassName("content")[0]

document.title = data.get('title')
content.querySelector("img").src = data.get('imgSrc')
content.querySelector(".title").innerHTML = data.get('title')
content.querySelector('.detail').textContent = data.get('content')