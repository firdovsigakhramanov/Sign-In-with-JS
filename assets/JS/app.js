let eyes = document.querySelector(".fa-eye"),
  input = document.querySelector("input[type='password']");

eyes.addEventListener("click", function () {
  if(eyes.classList.contains("fa-eye")) {
    eyes.className = "fa-regular fa-eye-slash";
    input.type = "text";
  }
  else {
    eyes.className = "fa-regular fa-eye";
    input.type = "password";
  }
});

