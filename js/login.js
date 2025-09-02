const passwordInput = document.getElementById("passwordInput");
const button = document.getElementById("showPassword")

function showPassword(){
      if(passwordInput.type === "password"){
            passwordInput.type = "text";
            button.src = "../imgs/eye.png";
      } else {
            passwordInput.type = "password";
            button.src = "../imgs/hidden.png";
      }
}