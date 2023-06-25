function changeTheme() {
  if (document.getElementById("switch").checked) {
    document.documentElement.style.setProperty("--color-primary", "#000");
    window.sessionStorage.setItem("switch", "1");
  } else {
    document.documentElement.style.setProperty("--color-primary", "#dbdbdb");
    window.sessionStorage.setItem("switch", "0");
  }
}

document.getElementById("switch").addEventListener("change", changeTheme);
