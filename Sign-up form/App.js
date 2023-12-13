const firstname = document.querySelector('#firsname');
const lastname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const Password = document.querySelector('#Password');
const submit = document.querySelector('.freetrial');
const text = document.querySelector(".text")
const form = document.querySelector("form")

// function validateEmail(email) {
// }

// function validatePassword(password) {
//     let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     return regex.test(password);
// }


form.addEventListener('click', (e) => {
    let regex = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(email.value)) {
        text.innerText = "Looks like this is not an email";
        e.preventDefault()
    } else {
        text.innerText = "";
    }
});


