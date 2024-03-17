const $emailInput = document.querySelector("#email-input");
const $form = document.querySelector("#form");
const $invalidEmailSmall = document.querySelector(
  ".newletter__form__invalid-email"
);

$form.addEventListener("submit", (e) => {
  var emailValue = $emailInput.value;
  const isValidEmail = /^[A-Za-z_\.]+\@[a-z]+\.[a-z]{3}/;

  if (!isValidEmail.test(emailValue)) {
    $emailInput.classList.add("newletter__form__email--invalid-email");
    $invalidEmailSmall.classList.remove(
      "newletter__form__invalid-email--hidden"
    );
    e.preventDefault();
  } else {
    $emailInput.classList.remove("newletter__form__email--invalid-email");
    $invalidEmailSmall.classList.add("newletter__form__invalid-email--hidden");
    localStorage.setItem("emailValue", emailValue);
  }
});
