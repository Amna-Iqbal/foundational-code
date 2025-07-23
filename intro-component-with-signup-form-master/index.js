const inputs = document.querySelectorAll(".input-wrapper input");

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      submitForm();
    }
  });
  
  // Function to validate all inputs in the form
  function validateForm() {
    let isValid = true;
    
    inputs.forEach((input) => {
      const errorMsg = input.nextElementSibling;
      const errorIcon = errorMsg.nextElementSibling;
      
      hideError(input);
  
      if (input.value.trim() === "") {
        showError(input);
        isValid = false;
      }
    });
    
    return isValid;
  }
  
  // Function to hide error messages and icons
  function hideError(input) {
    const errorMsg = input.nextElementSibling;
    const errorIcon = errorMsg.nextElementSibling;
    
    errorMsg.style.display = "none";
    errorIcon.style.display = "none";
    input.style.borderColor = 'hsl(246, 25%, 77%)';
    
  }
  
  // Function to show error messages and icons
  function showError(input) {
    const errorMsg = input.nextElementSibling;
    const errorIcon = errorMsg.nextElementSibling;
    
    errorMsg.style.display = "block";
    errorIcon.style.display = "inline";
    input.style.borderColor = 'red';
  }
  
  // Function to handle input changes and hide error messages
inputs.forEach((input) => {
    input.addEventListener("input", () => {
      hideError(input);
    });
  });
  
  // Function to submit the form (clear inputs)
  function submitForm() {
    inputs.forEach((input) => {
      input.value = ""; // Clear the input fields after submission
    });
  }