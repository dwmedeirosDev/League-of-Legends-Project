const login = document.querySelector(".user");
const password = document.querySelector(".password")
const arrow = document.querySelector(".arrow")

function logar(){
    if(login.value && password.value.length >= 8){
        arrow.classList.add("opacity");
        arrow.classList.remove("arrow")
        arrow.removeAttribute("disabled");
    }else{
        arrow.classList.remove("opacity");
        arrow.classList.add("arrow");
        arrow.setAttribute("disabled", "disabled");
    }
}

login.addEventListener("input", logar);
password.addEventListener("input", logar);