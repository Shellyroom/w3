// Image switcher code

let myImage = document.querySelector('img');
//documentは組み込みのオブジェクト。
//ブラウザが表示しているページ。DOMとも呼ぶ。Document Object Modelの略。
//query Selectorはページの一部（HTML要素）を選ぶ関数。


myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/firefox2.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  //promptは組み込みの関数。Prompt(pop-up)Windowを表示して、ユーザ入力をさせる。
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    //入力データを、特別な場所（変数ではない、ファイルなどに相当）に保存する。
    myHeading.innerHTML = 'Hello, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'See you again, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
