import { handleSignup } from "../assets/js/db.js";

const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;

const emailAlerts = document.getElementById("emailalert");
const passwordAlerts = document.getElementById("passwordalert");
const confirmAlerts = document.getElementById("confirmalert");
// const password = document.getElementById('password');

const form = document.getElementById("signupform");
// const submitBtn = document.getElementById('submitbtn');

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmpassword").value;

  if (!validateEmail.test(email)) {
    emailAlerts.innerText = "Please enter a valid email address.";
    return;
  }
  emailAlerts.remove("Please enter a valid email address.");
  if (!passwordValid.test(password)) {
    passwordAlerts.innerText =
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.";
    return;
  }
  passwordAlerts.remove(
    "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.",
  );
  if (password !== confirmPassword) {
    confirmAlerts.innerText = "Passwords do not match.";
    return;
  }
  confirmAlerts.remove("Passwords do not match.");
  
  handleSignup(email, password)
  form.reset();
  window.location.replace('login.html');  
  
  
});
