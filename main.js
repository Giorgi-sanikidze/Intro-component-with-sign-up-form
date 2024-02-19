let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let button = document.querySelector("#button");


let fnameImg = document.querySelector(".fname-img");
let lnameImg = document.querySelector(".lname-img");
let emailImg = document.querySelector(".email-img");
let passwordImg = document.querySelector(".password-img");




let fnameLabel = document.querySelector(".fname-label");
let lnameLabel = document.querySelector(".lname-label");
let emailLabel = document.querySelector(".email-label");
let passwordLabel = document.querySelector(".password-label");


let fnameValue = fname.value;
let lnameValue = lname.value;
let emailValue;
let passwordValue = password.value;


const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;



fname.addEventListener("input", (e) =>{
    fnameValue = fname.value; 
    fnameImg.style.display = "none";
    fnameLabel.style.display = "none";
})

lname.addEventListener("input", (e) =>{
    lnameValue = lname.value;  
    lnameImg.style.display = "none";
    lnameLabel.style.display = "none";
    
})

email.addEventListener("input", (e) =>{
    emailValue = email.value;
    if (emailPattern.test(emailValue)) {
        emailImg.style.display = "none"
        emailLabel.style.display = "none"
    }
})

password.addEventListener("input", (e) =>{
    passwordValue = password.value;
    passwordImg.style.display = "none";
    passwordLabel.style.display = "none";
})
button.addEventListener("click", () => {
    
    console.log(fnameValue)

    if(fnameValue.length == 0){
        fnameImg.style.display = "block";
        fnameLabel.style.display = "flex";
    }else{
        fnameImg.style.display = "none";
        fnameLabel.style.display = "none";
    }

    if(lnameValue.length == 0){
        lnameImg.style.display = "block";
        lnameLabel.style.display = "flex";
    }else{
        lnameImg.style.display = "none";
        lnameLabel.style.display = "none";
    }

    if(!emailPattern.test(emailValue)){
        emailImg.style.display = "block"
        emailLabel.style.display = "flex"
        email.placeholder = "email@example/com"
    }else{
        emailImg.style.display = "none"
        emailLabel.style.display = "none"
    }

    if(passwordValue.length == 0){
        passwordImg.style.display = "block";
        passwordLabel.style.display = "flex";
    }else{
        passwordImg.style.display = "none";
        passwordLabel.style.display = "none";
    }



})




