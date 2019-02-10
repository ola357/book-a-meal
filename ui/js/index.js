// Get the modal
var modallogin = document.getElementById('loginform');
var modalsignup = document.getElementById('signupform');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modallogin) {
        modallogin.style.display = "none";
    }
}
window.onclick = function(event) {
    if (event.target == modalsignup) {
        modalsignup.style.display = "none";
    }
}

let login = document.getElementById("login").addEventListener("click",()=>{
    document.getElementById('loginform').style.display='block';
});

let signup = document.getElementById("signup").addEventListener("click",()=>{
    document.getElementById('signupform').style.display='block';
});