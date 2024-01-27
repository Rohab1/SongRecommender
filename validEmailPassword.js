/* global localStorage, window */
// Define validateEmail function
function validateEmail (email) {
    const emailRegexpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegexpression.test(email);
  }

  // Define validatePassword function
  function validatePassword (password) {
    return password.length >= 8 && password.length <= 20;
  }

  // Define handleSubmit function
  // eslint-disable-next-line no-unused-vars
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
      // Display an error message on the page
      const errorMessage = document.getElementById('errorMessage');
      errorMessage.textContent = 'Please enter a valid email and password (8-20 characters).';
    }
  }
