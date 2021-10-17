const loginForm = document.querySelector('form.login-form');
const onSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!email || !password) return alert('Все поля должны быть заполнены!');

    console.log({ email, password });
    loginForm.reset();
}
loginForm.addEventListener('submit', onSubmit);
