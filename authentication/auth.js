import { handleSignup, handleLogin } from "../assets/js/db.js";
// signup regex
const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
// login regex
// const LoginvalidateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const loginForm = document.getElementById("loginform");

// LOGIN
if (loginForm) {
  const loginEmailAlerts = document.getElementById("loginEmailalert");
  const loginPasswordAlerts = document.getElementById("loginPassordalert");
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const Loginemail = document.getElementById("Loginemail").value;
    const Loginpassword = document.getElementById("loginPassword").value;
    if (!Loginemail) {
      loginEmailAlerts.innerText = "Please enter a valid email address.";
      return;
    }
    if (!Loginpassword) {
      loginPasswordAlerts.innerText = "Please enter your password.";
      return;
    }
    
    try {
      await handleLogin(Loginemail, Loginpassword);
      loginForm.reset();
      window.location.replace("index.html");
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Login failed. Please check your credentials and try again.");
    }
  });
}

const form = document.getElementById("signupform");

// SIGNUP
if (form) {
  const emailAlerts = document.getElementById("emailalert");
  const passwordAlerts = document.getElementById("passwordalert");
  const confirmAlerts = document.getElementById("confirmalert");
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
    try {
      handleSignup(email, password);
      form.reset();
      window.location.replace("login.html");
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Signup failed. Please try again.");
    }
  });
}
