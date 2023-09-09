// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // step-2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passWordField = document.getElementById('user-password');
    const password = passWordField.value;
    // step-3: verify email and password
    if(email === 'afnantanaz31@gmail.com' && password === 'tan123'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Wrong Password!!!!');
    }
})