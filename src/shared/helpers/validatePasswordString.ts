const validatePasswordString = (password: string): boolean => {
  const lengthValid = password.length >= 6;

  const hasLetter = /[a-zA-Z]/.test(password);

  const hasNumber = /\d/.test(password);

  return lengthValid && hasLetter && hasNumber;
};

export default validatePasswordString;
