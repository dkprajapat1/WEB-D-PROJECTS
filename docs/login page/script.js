let box1 = document.getElementById("box1");
let stutas = document.querySelector(".box1").children[0]
let box2 = document.getElementById("box2");
let signup = document.getElementById("sign");
let sign_message1 = document.querySelector(".box2").children[0].children[0];  //first line on box2
let sign_message2 = document.querySelector(".box2").children[0].children[1];
let login = document.getElementById("login")
let fpass = document.getElementById("forgotpass")

let a = 0;



sign.addEventListener("click", (e) => {

    if (a == 0) {
        box1.style.transform = "translate(100%)";
        box2.style.transform = "translate(-100%)";
        box2.style.borderRadius = "50px 20% 20% 50px";
        sign_message1.innerHTML = "Hello, Dear Friend"
        sign_message2.innerHTML = "If you are already a user, please log in."
        sign.innerHTML = "Login"

        stutas.innerHTML = "Sign-up"
        stutas.style.marginTop = "3vh"

        document.getElementById("idlab").innerText = "Enter your name"

        let mobile = document.createElement("input")
        mobile.type = "tel"
        mobile.placeholder = "Mobile No."
        mobile.id = "mobile"
        document.getElementById("passlab").before(mobile);

        let lable = document.createElement("label")
        lable.htmlFor = "mobile"
        lable.innerText = "Mobile No."
        lable.id = "mobilelab"
        document.getElementById("mobile").before(lable);
        login.innerHTML="sign-Up";

        fpass.innerHTML=""

        a = 1;
    }
    else if (a == 1) {
        box1.style.transform = "translate(0%)";
        box2.style.transform = "translate(0%)";
        box2.style.borderRadius = "20% 50px 50px 20%";
        sign_message1.innerHTML = "Welcome Back!"
        sign_message2.innerHTML = "If you don't have an account, please sign up."
        sign.innerHTML = "Sign-up"

        stutas.innerHTML = "Login"


        document.getElementById("idlab").innerText = "User Id"

        let mobile = document.getElementById("mobile")
        mobile.remove();



        let lable = document.getElementById("mobilelab");
        lable.remove();

        login.innerHTML="Login";

        fpass.innerHTML="Forgot your password?"


        a = 0;
    }
})


login.addEventListener("click" , (e)=>{
    alert(`network problem "Try again letter"`)
})