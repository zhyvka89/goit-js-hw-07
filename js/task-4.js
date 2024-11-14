const form = document.querySelector(".login-form");

const handleFormSubmit = (e) => {
  e.preventDefault();

  const email = e.target.elements.email.value;
  const password = e.target.elements.password.value;

  if (!email.trim().length || !password.trim().length)
    return alert("All form fields must be filled in");

  const formObj = {
    email,
    password
  }

  console.log(formObj);

  form.reset();
};

form.addEventListener("submit", handleFormSubmit);
