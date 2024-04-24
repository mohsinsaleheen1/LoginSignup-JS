let signUp = document.getElementById("signup");
let login = document.getElementById("login");
const alaccount = () => {
  signUp.classList.remove("d-block");
  signUp.classList.add("d-none");
  login.classList.remove("d-none");
  login.classList.add("d-block");
};
const daccount = () => {
  signUp.classList.remove("d-none");
  signUp.classList.add("d-block");
  login.classList.remove("d-block");
  login.classList.add("d-none");
};
const signup = () => {
  let semail = document.getElementById("semail").value;
  let spassword = document.getElementById("spassword").value;
  let existingAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
  existingAccounts.push({ semail, spassword });
  localStorage.setItem("accounts", JSON.stringify(existingAccounts));
  if (semail === "" && spassword === "") {
    alert("Please fill the input Field");
  } else {
    alert("Your Account is create \n Thanyou Visit Our Website");
  }
};
const loginn = () => {
  let lemail = document.getElementById("lemail").value;
  let lpassword = document.getElementById("lpassword").value;
  let storedAccount = JSON.parse(localStorage.getItem("accounts")) || [];
  let foundAccount = storedAccount.find(
    (account) => account.semail === lemail && account.spassword === lpassword
  );
  if (lemail === "" && lpassword === "") {
    alert("Please fill the input Field");
  } else {
    if (!foundAccount) {
      alert("Invalid User");
    } else {
      alert("Your Account is logged in successfully");
    }
  }
};
