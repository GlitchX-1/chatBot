const form = document.getElementById('form');
const username = document.getElementById('username'); 
const email = document.getElementById('email'); 
const password = document.getElementById('password'); 
const repassword = document.getElementById('repassword'); 

//input
function error(input,message){
    input.className = 'form-control is-invalid'; 
    const div = input.nextElementSibling; 
    div.innerText = message; 
    div.className = 'invalid-feedback'; 
}

//input 
function success(input){
    input.className = 'form-control is-valid' 
}

//mail 
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase()); 
}


function checkLength(input,min,max){
    if(input.value.length < min){ 
        error(input,`${input.id} ${min} Must be a character`);
    }else if(input.value.length > max){
        error(input,`${input.id}  ${max} Must be a character`);
    }else{ 
        success(input);
    }
}

//parola eşleşme kontrolü
function checkPasswords(pass1,pass2){
    if(pass1.value !== pass2.value){
        error(pass2,'Password don not match');
    }else{
        success(pass2);
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    if(username.value === ''){  
        error(username,'The username field cannot be left blank'); 
    }else{ 
        checkLength(username,6,12);   
    }if(email.value === ''){ 
        error(email,'The email field cannot be blank');
    }else if(!validateEmail(email.value)){ 
        error(email,'Enter your email address in the appropriate format');
    }else{
        success(email);
    }if(password.value === ''){ 
       error(password,'The passsword field cannot be left blank');
    }else{
        checkLength(password,6,30);
    }if(repassword.value === ''){ 
        error(repassword,'The password re-enter field cannot be left blank');
    }else{
        checkPasswords(password,repassword);
    }
});