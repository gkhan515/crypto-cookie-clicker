
let cookieNum = 0;

const profile = document.querySelector('.profile');
profile.addEventListener('click', profileFunction); 

const clicker = document.querySelector('.crypto-button');
clicker.addEventListener('mousedown', cookieFunction);
clicker.addEventListener('transitionend', returnToNormal);

const login = document.querySelector('.Log-in-section');
login.addEventListener('click', loginFunction); 

// const signup = document.querySelector('.Sign-up-section');
// signup.addEventListener('click', signUpFunction);

const displayNum = document.querySelector('.counter');

const audio = document.querySelector('audio');









// var username = "Username Not Set";
// var password = "Password Not Set";
// function addUser(){

//     //user input = username;
//     //user input = password;

// }

// function verifyUser(){

//     if ((/*username input*/ == username)&& (/*password input*/ == password)){

//         alert("Login Complete!"); 
//     }
//     else{
//         alert("Login Failed!"); 
//     }
// }




function cookieFunction() {
    cookieNum +=1;
    displayNum.innerHTML = "CryptoCookies: " + cookieNum;
    clicker.src = "images/clicked.png";
    clicker.classList.add("clicked");
    audio.currentTime = 0;
    audio.play();
}

function returnToNormal (e) {
    if (e.propertyName !== 'transform') return;
    clicker.src = "images/default.png";
    this.classList.remove('clicked');
}

function profileFunction() {
    alert("profile function");  
}

function loginFunction() {
    window.location.assign(cryptologin.html);
    window.location.href = "test.html";
    alert("login");  
}


// function signUpFunction(){

//     alert("Signup");
// }
