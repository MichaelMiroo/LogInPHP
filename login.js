let submit = document.getElementById("submit");

//
submit.addEventListener("click",()=>{

let input_username = document.getElementById("username");
let input_password = document.getElementById("password");

let username = input_username.value.trim();
let password = input_password.value.trim();

});

function checkLogin(username, password){

    const REGEX = /^[0-9a-zA-Z_@.]+$/;
    const USERNAME_MIN_LENGTH = 3;
    const USERNAME_MAX_LENGTH = 8;
    const PASSWORD_MIN_LENGTH = 6;
    const PASSWORD_MAX_LENGTH = 30;
    
    if(username === undefined || username === null || username.trim() === ""){
        return [`username id empty, undefined or equal to null`, false];
    }else if(password === undefined || password === null || password.trim() === ""){
        return [`password id empty, undefined or equal to null`, false];
    }else if(!(REGEX.test(username) && REGEX.test(password))){
        return [`username or password contain special characters that are forbiden`, false];
    }else if(username.length < USERNAME_MIN_LENGTH || username.length > USERNAME_MAX_LENGTH){
        return [`username length is not right(min ${USERNAME_MIN_LENGTH} chars, max ${USERNAME_MAX_LENGTH} chars)`, false];
    }else if(password.length < PASSWORD_MIN_LENGTH || password.length > PASSWORD_MAX_LENGTH){
        return [`password length is not right(min ${PASSWORD_MIN_LENGTH} chars, max ${PASSWORD_MAX_LENGTH} chars)`, false];
    }else{
     return[`data correct`, true];
    }
    
    
}

function checkRegister(username, password, passwordRepeat){

    
    const REGEX = /^[0-9a-zA-Z_@.]+$/;
    const USERNAME_MIN_LENGTH = 3;
    const USERNAME_MAX_LENGTH = 8;
    const PASSWORD_MIN_LENGTH = 6;
    const PASSWORD_MAX_LENGTH = 30;

    if(password !== passwordRepeat){
        return [`repeated password doesn't match password you entered`, false];
    }else if(username === undefined || username === null || username.trim() === ""){
        return [`username id empty, undefined or equal to null`, false];
    }else if(password === undefined || password === null || password.trim() === ""){
        return [`password id empty, undefined or equal to null`, false];
    }else if(!(REGEX.test(username) && REGEX.test(password))){
        return [`username or password contain special characters that are forbiden`, false];
    }else if(username.length < USERNAME_MIN_LENGTH || username.length > USERNAME_MAX_LENGTH){
        return [`username length is not right(min ${USERNAME_MIN_LENGTH} chars, max ${USERNAME_MAX_LENGTH} chars)`, false];
    }else if(password.length < PASSWORD_MIN_LENGTH || password.length > PASSWORD_MAX_LENGTH){
        return [`password length is not right(min ${PASSWORD_MIN_LENGTH} chars, max ${PASSWORD_MAX_LENGTH} chars)`, false];
    }else{
     return[`data correct`, true];
    }

}

// let bool = regex.test(str);
let u = "test12";
let p = "test123";

let log = checkLogin(u,p);
if(log[1]){
console.log("log in call");
}else{
  console.log(log[0]);
}