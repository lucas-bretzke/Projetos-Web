
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");


let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");


let containerPassword = document.querySelector("#container-password");


let charset = "abcdefghaijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let novaSenha = "";


sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {

    let pass = "";

    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));

    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass; 
}

function copyPassword() {
    navigator.clipboard.writeText(novaSenha);
    alert("Senha copiada com Sucesso !!!")
}


/*charAt   pega uma posição*/
/*random   gera um numero aleatório, de acordo com o tamanho de caracteres da variavel ${charset}*/