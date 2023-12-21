const firstname = document.querySelector('#firsname')
const firstnametext = document.querySelector(".firstnametext")

const lastname = document.querySelector('#lastname');
const lastnametext = document.querySelector(".lastnametext")

const email = document.querySelector('#email');
const emailtext = document.querySelector(".emailtext")

const Password = document.querySelector('#Password');
const Passwordtext = document.querySelector(".passwordtext")

const submit = document.querySelector('.freetrial');
const form = document.querySelector("form")

const icons = document.querySelectorAll('.input-wrapper .icon');



submit.addEventListener('click', (e) => {
    e.preventDefault();

    const allInputsEmpty = Array.from(document.querySelectorAll('input')).every(input => input.value === '');

    if (allInputsEmpty) {
        document.querySelectorAll('.input-wrapper').forEach(wrapper => {
            wrapper.style.paddingBottom = '0px'; // Change margin when all inputs are empty
        });
        // ... other conditions to reset margin
    } else {
        document.querySelectorAll('.input-wrapper').forEach(wrapper => {
            wrapper.style.paddingBottom = '42px'; // Reset margin when inputs have content
        });
        // ... other conditions or style resets
    }
});



submit.addEventListener('click', (e) => {
    e.preventDefault();

    const allInputsEmpty = Array.from(document.querySelectorAll('input')).every(input => input.value === '');

    if (allInputsEmpty) {
        icons.forEach(icon => {
            icon.style.display = 'block'; 
        });
    } else {
        icons.forEach(icon => {
            icon.style.display = 'none'; 
        });
    }
});





submit.addEventListener('click', (e) => {
    e.preventDefault();

    if (firstname.value === '') {
        firstname.style.borderColor = 'red';
        firstname.setAttribute('placeholder', '');
        firstnametext.style.display = 'block'
    } else {
        firstname.style.borderColor = '#DEDEDE';
        firstname.removeAttribute('placeholder');
        firstnametext.style.display = 'none'
    }
});


submit.addEventListener('click', (e) => {
    e.preventDefault();

    if (lastname.value === '' || !validatelastname(lastname.value)) {
        lastname.style.borderColor = 'red';
        lastname.setAttribute('placeholder', '');
        lastname.classList.add('invalid-lastname');
        lastnametext.style.display = 'block';
    } else {
        lastname.style.borderColor = '#DEDEDE';
        lastname.removeAttribute('placeholder');
        lastname.classList.remove('invalid-lastname');
        lastname.style.display = 'none';
        lastnametext.style.display = 'none';
    }
});


function validateEmail(email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

  submit.addEventListener('click', (e) => {
    e.preventDefault();

    if (email.value === '' || !validateEmail(email.value)) {
        email.style.borderColor = 'red';
        email.setAttribute('placeholder', 'email@example.com');
        email.classList.add('invalid-email');
        emailtext.style.display = 'block';
    } else {
        email.style.borderColor = '#DEDEDE';
        email.removeAttribute('placeholder');
        email.classList.remove('invalid-email');
        emailtext.style.display = 'none';
    }
});

function validatePassword(password) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

submit.addEventListener('click', (e) => {
    e.preventDefault();

    if (Password.value === '' || !validateEmail(Password.value)) {
        Password.style.borderColor = 'red';
        Password.setAttribute('placeholder', '');
        Password.classList.add('invalid-Password');
        Passwordtext.style.display = 'block';
    } else {
        Password.style.borderColor = '#DEDEDE';
        Password.removeAttribute('placeholder');
        Password.classList.remove('invalid-Password');
        Passwordtext.style.display = 'none';

    }
})