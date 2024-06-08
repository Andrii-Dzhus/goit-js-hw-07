const form = document.querySelector('.login-form');
const emailInput = form.elements['email'];
const passwordInput = form.elements['password'];

const handleFormSubmit = (event) => {
  event.preventDefault();

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
  } else {

    const formData = {
      email: emailValue,
      password: passwordValue,
    };

    console.log(formData);
    form.reset();
  }
};

form.addEventListener('submit', handleFormSubmit);
