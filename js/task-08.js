const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();
   
    const {email, password} = event.currentTarget.elements;
    // console.log(email.value);
    // console.log(password.value);

    if (email.value === "" || password.value === "") {
        alert('Всі поля повинні бути заповнені!');
        return;
    }

    const data = {
        email: email.value,
        password: password.value,   
    };
    
    console.log(data);
    formEl.reset();
}