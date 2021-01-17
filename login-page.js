const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "pals" && password === "palli") {
        location.assign("file:///C:/Users/Shubham/Desktop/AWT%20Mini%20Project/Dashboard%20pals.html");}

    else if (username === "shubh" && password === "shubh") {
        location.assign("file:///C:/Users/Shubham/Desktop/AWT%20Mini%20Project/Dashboard%20Shubh.html");

      }

    else {
        loginErrorMsg.style.opacity = 1;
    }
})