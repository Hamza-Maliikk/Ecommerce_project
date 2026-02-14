const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordValid =  password.length >= 8


const emailAlerts = document.getElementById('emailalert');
const passwordAlerts = document.getElementById('passwordalert');
const confirmAlerts = document.getElementById('confirmalert');
// const password = document.getElementById('password');

const form = document.getElementById('signupform');
// const submitBtn = document.getElementById('submitbtn');

form.addEventListener('submit', async (e) => {
    console.log(form);
    
    e.preventDefault(); 


    const email = form.email;
    const password = form.password;
    const confirmPassword = form.confirmPassword; 

    if(!validateEmail.test(email)){
        emailAlerts.innerText = 'Please enter a valid email address.';
        return;
    }
    if(!passwordValid.test(password)){
        passwordAlerts.innerText = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.';
        return;
    }
    if(password !== confirmPassword){
        confirmAlerts.innerText = 'Passwords do not match.';
        return;
    }
});