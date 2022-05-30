const checkInputs = (inputs) => {
    if (inputs.firstName.trim() === "") {
      alert("first name field is required")
      return false;
  }
  if (inputs.lastName.trim() === "") {
      alert("last name field is required")
      return false;
  }
  if (!validateEmail(inputs.email)){
    alert("Please enter a valid email")
    return false;
  }
  if (!validatePassword(inputs.password)){
    alert("Password must contain more than 8 characters, an uppercase letter and special character")
    return false;
  }
  return true;
}

function validateEmail(email){
return String(email)
.toLowerCase()
.match(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
};

function validatePassword(password){
return String(password )
.toLowerCase()
.match(
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/
);
}

export default checkInputs;