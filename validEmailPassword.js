/* global localStorage, window */
/**
 * Checks if the email is in the correct format.
 *
 * @param {string} email
 * @returns boolean true or false
 */
// Define validateEmail function
function validateEmail (email) {
    const emailRegexpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegexpression.test(email);
  }

  /**
   * Checks if the password is between 8-20 characters long
   *
   * @param {string} password
   * @returns boolean true or false
   */
  // Define validatePassword function
  function validatePassword (password) {
    return password.length >= 8 && password.length <= 20;
  }

  // if the email and password is correct the submit button will take you to the main page
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
      const errorMessage = document.getElementById('errorMessage');
      errorMessage.textContent = 'Please enter a valid email and password (8-20 characters).';
    }
  }
