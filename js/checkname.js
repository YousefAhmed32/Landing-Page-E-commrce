let nameDuser = document.querySelector("#user_data")
let userinfo = document.querySelector("#user-form")
let links = document.querySelector("#links")
if (localStorage.getItem("username")) {
  links.remove()
  userinfo.style.display = "flex";
  nameDuser.innerHTML = localStorage.getItem("username")
  console.log("hello home")

}