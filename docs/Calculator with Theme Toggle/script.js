console.log("js work's");
let user  = prompt("Yo! What's Up?\n Drop Your Name Here.")
let ans;
let result = document.querySelector(".result");
let message = document.querySelector(".message");
message.innerHTML="Press enter after enter a number"
let name = document.getElementById("name");
let a = 0;
let num2, num1
let opration;

if(user == null || user == "" ){
    user ="Dear"
}
result.innerHTML=`Hello  ${user.toUpperCase()}, Nice to see you`

Array.from(document.querySelector(".opration").getElementsByTagName("div")).forEach((e) => {
    e.addEventListener("click", () => {
        if (e.innerHTML == "C") {
            result.innerHTML = "Clear"
            a = 0;
        }
        else {

            console.log(e.innerHTML)
            message.innerHTML = `${e.innerHTML} pressed`
            opration = e.innerHTML
            result.innerHTML = result.innerHTML + `${opration}`

        }
    })
})

name.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        let num = Number(name.value);
        message.innerHTML = "Enter another Number / select opration"
        if (a == 0) {
              result.innerHTML = " "
            num1 = num
            a = 1;
            result.innerHTML = `${num1}`

        }
        else if (a == 1) {
            num2 = num
            ans = eval(`num1 ${opration} num2`)
            result.innerHTML = `${num1} ${opration} ${num2} = ${ans}`
            a = 2;
        }
        else if (a == 2) {
            num2 = num;
            num1 = ans;
            ans = eval(`num1 ${opration} num2`)
            result.innerHTML = `${num1} ${opration} ${num2} = ${ans}`
        }
    }
})




let texts = document.getElementById("tongal");
let btn = document.getElementById("btn");
let istrue = true;  // white
let box = document.getElementById("box");
let text = document.getElementById("text");

btn.addEventListener("click", () => {
    if (istrue) {
        texts.style.color = "white"
        document.body.style.background = "linear-gradient(to right , rgb(0, 5, 63), rgb(1, 40, 133))"
        document.querySelector(".container").style.background = "linear-gradient(to right , rgb(69, 69, 248) , rgb(1, 157, 209))"
        document.querySelector(".container").style.boxShadow = " 8px 8px 20px 0px rgb(1 1 26 / 86%)";
        btn.style.boxShadow = "3px 3px 2px rgba(0, 26, 79, 0.76)"
        btn.style.background = "rgb(0, 62, 83)"
        box.src = "moon.svg"
        box.style.filter = "invert(1)"
        box.style.transform = "translateX(90%)"
        text.style.transform = "translateX(-170%)"
        text.innerHTML = "Dark"

        istrue = false

    }
    else if (!istrue) {
        //dark them
        texts.style.color = "black"
        document.body.style.background = "linear-gradient(to right , rgba(244, 244, 244, 1),  rgba(43, 190, 243, 1))"
        document.querySelector(".container").style.background = "linear-gradient(to right , rgb(149, 149, 235) , rgb(97, 197, 230))"
         document.querySelector(".container").style.boxShadow = " 8px 8px 20px 0px #00000087";
        btn.style.boxShadow = "3px 3px 2px rgba(0, 0, 0, 0.38)"
        btn.style.background = "lightblue"
        box.style.filter = "invert(0)"
        box.src = "sun.svg"
        btn.style.flexDirection = "row"
        box.style.transform = "translateX(-30%)"
        text.style.transform = "translateX(-50%)"
        text.innerHTML = "Light"

        istrue = true;

    }
})

