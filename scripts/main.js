let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/qwe.jpg'){
        myImage.setAttribute('src', 'images/asd.jpg');
    }
    else{
        myImage.setAttribute('src', 'images/qwe.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector("h1");

function setUserName(){
    let myname = prompt('请输入你的名字：');
    if(!myname){
        setUserName();
    }else{
    localStorage.setItem('name', myname);
    myHeading.textContent = 'warmly welcome!' + myname;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storeName = localStorage.getItem('name');
    myHeading.textContent = 'warmly welcome!' + myname;
}

myButton.onclick = function(){
    setUserName();
}