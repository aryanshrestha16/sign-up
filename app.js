"use strict"


const form = document.querySelector("form").addEventListener("submit",(e) => {
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("r-password").value;
    const error = document.querySelector(".error");
    const lengtherror = document.querySelector(".lengtherror");
    console.log(password.length);
    if (password != repeatPassword){
        error.textContent = "Passwords do not Match!";
        e.preventDefault();
    }
    if (password.length < 6) {
        lengtherror.textContent = "Password must be between 6-20 characters";
        e.preventDefault();
    }
    if (password.length > 20){
        lengtherror.textContent = "Password must be between 6-20 characters";
        e.preventDefault();
    }

}

);