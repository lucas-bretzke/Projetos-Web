const fields = document.querySelectorAll("[required]")

// console.log(fields)

function customValidation(event) {
    const field = event.target

    console.log(field.validity)
    //trocar mensagem de required
    field.setCustomValidity("Esse campo")
}

for (const field of fields) {
    field.addEventListener("invalid", customValidation)
}






document.querySelector("form")
addEventListener("submit", event => {
    console.log("Pode enviar o form")

    //Nao vai enviar o formulario
    event.preventDefault()
})