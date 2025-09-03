const passwordInput = document.getElementById("passwordInput");
const button = document.getElementById("showPassword")
const repeatPassword = document.getElementById("repeatPassword");
function showPassword(){
    if(passwordInput.type === "password"){
        passwordInput.type = "text";
        button.src = "../imgs/eye.png";
    } else {
        passwordInput.type = "password";
        button.src = "../imgs/hidden.png";
    }
}

function testCreateAccount(){
    if(passwordInput.value === repeatPassword.value){
       alert("login  feito com sucesso")
    }
    else{
        alert("senhas não batem")
    }
}
