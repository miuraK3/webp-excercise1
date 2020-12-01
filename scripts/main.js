const myHeading = document.querySelector('h1');
myHeading.textContent = 'ページ作り、がんばれ！';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/kirin.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}