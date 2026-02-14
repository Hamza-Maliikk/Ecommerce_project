// Regex for validation 
import {emailValidation, passwordvalidate } from './validation.js'

const emailAlerts = document.getElementById('emailalert');
const passwordAlerts = document.getElementById('passwordalert');
const confirmAlerts = document.getElementById('confirmalert');
const password = document.getElementById('password');

const form = document.getElementById('signupform');
const submitBtn = document.getElementById('submitbtn');

submitBtn.addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const email = form.email.value;
    const password = form.password;
    const confirmPassword = form.confirmPassword.value; 

    if(!emailValidation(email)){
        emailAlerts.innerText = 'Please enter a valid email address.';
        return;
    }
    if(!passwordvalidate(password)){
        passwordAlerts.innerText = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.';
        return;
    }
    if(password !== confirmPassword){
        confirmAlerts.innerText = 'Passwords do not match.';
        return;
    }
});