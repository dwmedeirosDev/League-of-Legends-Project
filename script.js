const [login, password] = document.querySelectorAll(".conteiner-form input");
const click = document.querySelector(".conteiner-button button")

function logar(){
    if(login.value.lenght[0] === "E" && password.value.lenght >= 8){
        click.removeAttribute("disabled");
    }else{
        click.setAttribute("disabled", "disabled");
    }
}

login.addEventListener("input", logar);
password.addEventListener("input", logar);