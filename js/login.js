let username_2 = document.querySelector("#username")
let password_2 = document.querySelector("#password")
console.log("youns")
let loginBtn_2 = document.querySelector("#sign_in")


let getUser = localStorage.getItem("username")
let getPassword = localStorage.getItem("password")

loginBtn_2.addEventListener('click', function (c) {
    c.preventDefault()
    if (username_2.value === "" || password_2.value === "") {

    } else {
        if ((getUser && getUser.trim() === username_2.value.trim() && getPassword && getPassword === password_2.value)) {
            setTimeout(() => {
                console.log("hello")
                alert("عااااش يا يونس")
                window.location = "home.html"
            }, 1500)
        } else {
            console.log("username or password is incorrect ")
        }
    }
})









































