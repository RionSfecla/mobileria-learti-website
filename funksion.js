
//window.alert("Mobileria Learti ofron zbritje nga data 10 - 15 Tetor!");


const butoni = document.querySelectorAll(".button");
const image = document.querySelectorAll(".image");


for (i = 0; i < butoni.length; i++)  {
    butoni[i].addEventListener("click", (e) => {
        e.preventDefault();

        const filter = e.target.dataset.filter;
        image.forEach((image) => {
            if (filter === "tegjitha") {
                image.style.display = "block";
            } else {
                if (image.classList.contains(filter)) {
                    image.style.display = "block";
                } else {
                    image.style.display = "none";
                }
            }
        })
    })
}


function shfaqPunimet() {
    document.getElementById("shfaq").style.display = "block";
}


function mousimbi() {
    document.getElementById("first-photo").style.display = "none";
}

function mousijasht() {
    document.getElementById("second-photo").style.display = "block";
}


function ndryshotitullin() {
    document.getElementById("ndryshimtitulli").innerHTML = "Modelet e fundit i gjeni tek ne!";
}



const cards = document.querySelectorAll(".card");

function flipCard() {
    this.classList.toggle("flip");
}

cards.forEach((card) => card.addEventListener("click", flipCard));




const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

function ndryshoInputin2() {
    input2.value = input1.value * 300;
}

input1.addEventListener("input", ndryshoInputin2);


const emriInput = document.getElementById("emriInput");
const emailInput = document.getElementById("emailInput");
const pershkrimiInput = document.getElementById("pershkrimiInput");
const sendButton = document.getElementById("send-button");

function dergo() {
    if (emriInput.value === "" || emailInput.value === "" || pershkrimiInput.value === "") {
        window.alert("Ju lutem mbusheni te gjitha format!")
    } else {
        sendButton.value = "Duke u derguar...";
    }
}

sendButton.addEventListener("click", dergo);


setInterval (shfaqOren, 1000);
function shfaqOren() {
    
    let koha = new Date();
    let ora = koha.getHours();
    let minutat = koha.getMinutes();
    let sekondat = koha.getSeconds();
    
    if (ora<10) {
        ora = "0" + ora;
    }
    
    if (minutat<10) {
        minutat = "0" + minutat;
    }
    
    if (sekondat<10) {
        sekondat= "0" + sekondat;
    }
    
    let oraMomentale = "Ora:" + ora + ":" + minutat + ":" + sekondat;
    
    document.getElementById("ora").innerHTML = oraMomentale;
    
}

