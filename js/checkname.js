let nameUser = document.querySelector("#user_data")
let userinfo = document.querySelector("#user-form")
let links = document.querySelector("#links")
if (localStorage.getItem("username")) {
  links.remove()
  userinfo.style.display = "flex";
  userinfo.style.width = "auto";
  userinfo.style.margin = "0px 20px";
  nameUser.innerHTML = localStorage.getItem("username")
  console.log("hello home")

}