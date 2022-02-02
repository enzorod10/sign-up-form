const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')
const form = document.querySelector('form')
const errorMessage = document.querySelector('.errorMessage')

form.addEventListener('submit',(e) =>{
    let messages = [];
    password.style.borderColor = "#0000004b";
    confirmPassword.style.borderColor = "#0000004b";
    if (password.value != confirmPassword.value){
        messages.push("* Passwords do not match");
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
    }

    if (messages.length > 0){
        e.preventDefault();
        errorMessage.innerText = messages.join('')
    }
});