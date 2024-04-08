const input = document.getElementById('validation-input');
input.addEventListener('blur', function() {
  const inputValue = input.value;
  const expectedLength = parseInt(input.getAttribute('data-length'));

  if (inputValue.length === expectedLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});