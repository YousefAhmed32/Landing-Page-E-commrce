let username = document.querySelector("#nameup")
let email = document.querySelector("#emailup")
let password = document.querySelector("#passwordup")
let register_btn = document.getElementById("sing_up")
let card_parent = document.getElementById("container-card")
let form_signin = document.getElementById("form-singin")
register_btn.addEventListener('click', (o) => {
    o.preventDefault()
    if (username.value === "" || email.value === "" || password.value === "") {
        alert("please fill data")

    }
    else {
        localStorage.setItem("username", username.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("password", password.value)
        setTimeout(() => {
            card_parent.style.transition = ".5s";
            card_parent.style.transform = "rotateY(0deg)";
            card_parent.style.marginLeft = "0px";
            back.style.zIndex = 0;
            form_signin.style.opacity = 1;
            form_signin.style.transition = ".5s";
        }, 1000)

    }
})