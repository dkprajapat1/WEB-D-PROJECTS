// alert("hello");


let bt = document.querySelector(".button");
let d = document.querySelector(".div");
let istrue = true;

const messages = [
  "Checking system requirements...",
  "Initializing application core...",
  "Loading assets and resources...",
  "Verifying configuration files...",
  "Establishing secure connection...",
  "Optimizing system performance...",
  "Preparing interface components...",
  "Fetching required data...",
  "Finalizing setup...",
  "Almost done..."
];


function error() {
    document.body.style.background = "red";
    d.style.background = "white";
    d.style.borderRadius = "20px";
    d.style.color = "black";
    d.style.width = "50%";
    d.style.height = "20vh";
    d.style.marginTop = "40vh";
    d.innerHTML = "Your system is not capable for this site, please upgrade it.";
    alert("system crash")

}


bt.addEventListener("click", () => {

    if (istrue) {
        istrue = false;
        bt.innerHTML = 'optimizing the system wait...';

        let div = document.createElement("div");
        div.className = 'newdiv';
        let div1 = document.createElement("div");
        div1.className = 'newdiv1';
        let i = 10;


        let div2 = document.createElement("div");
        div2.className = 'newdiv2';
        let t = setInterval(() => {
            div1.style.width = `${i}%`;
            i += 10;
            if (i > 100) {
                clearInterval(t);
                istrue = true;
                div1.style.width = '0%';
                error();
            }
            div2.innerHTML = "";
            j = 0;
            let tt = setInterval(() => {
                div2.innerHTML = div2.innerHTML + messages[i / 10 - 2][j];
                j++;
                if (j >= messages[i / 10 - 2].length) {
                    clearInterval(tt)
                }
            }, 20);

        }, 1500);
        div.append(div1);
        d.append(div);
        d.append(div2);

    } else {
        alert("please wait...");
    }

})
