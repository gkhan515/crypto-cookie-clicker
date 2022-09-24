
let cookieNum = 0;

const profile = document.querySelector('.profile');
profile.addEventListener('click', profileFunction); 

const clicker = document.querySelector('.crypto-button');
clicker.addEventListener('click', cookieFunction); 

const login = document.querySelector('.Log-in-section');
login.addEventListener('click', loginFunction); 

const signup = document.querySelector('.Sign-up-section');
signup.addEventListener('click', signUpFunction); 

const displayNum = document.querySelector('.counter');





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
}
function profileFunction() {

    alert("profile function");  
}
function loginFunction() {

    alert("login");  
}
function signUpFunction(){

    alert("Signup");
}

