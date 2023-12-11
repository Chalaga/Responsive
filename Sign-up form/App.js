const firstname =  document.querySelector ('#firsname');
const lastname =  document.querySelector ('#lastname');
const email =  document.querySelector ('#email');
const Password =  document.querySelector ('#Password');
const submit = document.querySelector( 'button');

function validateEmail(email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

function validatePassword(password) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

submit.addEventListener('click', () => {
    if (validateEmail(email.value)) {
        text.innerText = "";
    } else {
        text.innerText = "Looks like this is not an email";
    }
});
