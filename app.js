function checkPassword() {
  const password = document.getElementById("password").value;
  if (password === "opensesame") {
    window.location.href = "welcome.html";
  } else {
    window.location.href = "error.html";
  }
}
