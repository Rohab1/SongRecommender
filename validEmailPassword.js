/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function validateEmail (email) {
    const emailRegexpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegexpression.test(email);
  }

  function validatePassword (password) {
    return password.length >= 8 && password.length <= 20;
  }

  function handleSubmit () {
    const email = document.getElementById('exampleFormControlInput1').value;
    const password = document.getElementById('inputPassword6').value;

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (isEmailValid && isPasswordValid) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      window.location.href = 'Formative Song Recommender.html';
    } else {
      alert('Please enter a valid email and password (8-20 characters).');
    }
  }
