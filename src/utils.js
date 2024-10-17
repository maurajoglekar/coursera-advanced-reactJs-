export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export async function submitForm(
  username,
  email,
  password,
  passwordConfirm,
  clearForm
) {
  try {
    const response = await fetch(
      "https://www.greatfrontend.com/api/questions/sign-up",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          password_confirm: passwordConfirm,
        }),
      }
    );
    if (response.status == 200) {
      clearForm();
    }
    const { message, status } = await response.json();
    alert(message);
  } catch (error) {
    alert(`Error submitting form with this error ${error}`);
  }
}
