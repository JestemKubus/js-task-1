document.querySelector('.login-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const emailValue = this.elements['email'].value.trim();
  const passwordValue = this.elements['password'].value.trim();

  if (!emailValue || !passwordValue) {
    alert('Please fill in all fields before submitting.');
  } else {
    const formValues = {
      email: emailValue,
      password: passwordValue
    };

    console.log(formValues);

    this.reset();
  }
});