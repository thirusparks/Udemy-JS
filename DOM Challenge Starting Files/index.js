document.firstElementChild.lastElementChild.getElementsByClassName('list')[2].innerText = "thirumoorthy";   
document.querySelector('.list a').style.color = "red";
document.querySelector('button').style.backgroundColor = "purple";

// setInterval(() => {
//     document.querySelector('h1').classList.toggle('huge');
// }, 1000);

document.querySelector('h1').innerHTML = "<em>Hello</em>";

document.querySelector('.list a').setAttribute('href', 'https://www.youtube.com/');