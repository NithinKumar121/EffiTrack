function validatePassword(password) {
    // Define regular expressions for each criteria
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const digitRegex = /\d/;
    const uppercaseRegex = /[A-Z]/;
  
    // Check if the password meets all criteria
    const messages = [];
  
    if (!specialCharRegex.test(password)) {
      messages.push("Password must contain at least one special character.");
    }
  
    if (!digitRegex.test(password)) {
      messages.push("Password must contain at least one digit.");
    }
  
    if (!uppercaseRegex.test(password)) {
      messages.push("Password must contain at least one uppercase letter.");
    }
  
    // Return an array of messages indicating what is wrong and missing
    return messages;
}
  
module.exports = {
    validatePassword
}