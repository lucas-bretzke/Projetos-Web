let B7validator = {
    handleSubmit: (event) => {
        event.preventDefault();

        let send = true;

        let inputs = form.querySelectorAll('.input');

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let check = B7validator.checkInput(input);
            if (check !== true) {
                send = false;
                B7validator.showError(input, check); {

                }
            }
        }
        send = false;
        if (send) {
            form.submit();
        }
    },
    checkInput: (input) => {
        let rules = input.getAttribute('data-rules');
        if (rules !== null) {
            rules = rules.split('|');
            for (let k in rules);
            let rDetails = rules[k].split('=');
            switch (rDetails[0]) {
                case 'required':
                    if (input.value == '') {
                        return 'Este campo é obrigatório.';
                    }
                    break;
                case 'min':
                    break;
            }
        }

        return true;
    },

    showError: (input, error) => {
        input.style.borderColor = '#FF0000';

        let errorElement = document.createElement('div');   /*Cria um elemento (div,p,a etc...) */
        errorElement.classList.add('error');
        errorElement.innerHTML = error;

        input.parentElement.insertBefore(errorElement, input.ElementSibling)  /*Adciona um elemento antes daquele campo */
    }
};

let form = document.querySelector('.b7validator');
form.addEventListener('.submit', B7validator.handleSubmit);