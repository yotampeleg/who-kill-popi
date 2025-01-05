let button1 = document.getElementById("bt1");
let ul = document.getElementById("ul");
let inp = document.getElementById("inp");
let text;
inp.addEventListener("input", () => {
    text = inp.value
});
button1.addEventListener("click", () => {
    let li = document.createElement("li");
    li.textContent = text;
    li.addEventListener("click", () => {
        li.style.textDecoration = "line-through";
    });
    ul.appendChild(li);
});


let inp2 = document.getElementById("inp2");
let button2 = document.getElementById("bt2");
let h4 = document.getElementById("h4");
let text2;

inp2.addEventListener("input", () => {
    text2 = inp2.value;
});

button2.addEventListener("click", () => {
    h4.innerHTML = 2024 - text2; 
});

let chek1 = document.getElementById("chek1");
let chek2 = document.getElementById("chek2");
let chek3= document.getElementById("chek3");
let chek4 = document.getElementById("chek4");

chek1.addEventListener("click", () => {
    alert("תשובה שגויה!")
});
chek2.addEventListener("click", () => {
    alert("תשובה שגויה!")
});
chek3.addEventListener("click", () => {
    alert("תשובה נכונה מאוד!!!!!!!!!!!!!!!")
});
chek4.addEventListener("click", () => {
    alert("תשובה שגויה!")
});


let randNum = Math.floor(Math.random() * 100) + 1;
let bt = document.getElementById("bt");
let massage = document.getElementById("answer");
let score = 0;
let body = document.body;

bt.addEventListener("click", () => {
    let guess1 = document.getElementById("inp60").value;
    inp.value = "";
    if (guess1 !== "") {
        let guess = parseInt(guess1);
        if (guess >= 1 && guess <= 100) {
            if (guess === randNum) {
                score++;
                massage.innerHTML = "כל הכבוד! הצלחת! מספר הנקודות שלך הוא: " + score;
                body.style.background = "lightgreen";
                randNum = Math.floor(Math.random() * 100) + 1;
            } else if (guess > randNum) {
                massage.innerHTML = "גדול מדי!";
            } else {
                massage.innerHTML = "קטן מדי!";
            }
        } else {
            massage.innerHTML = "המספר לא בטווח! אנא בחר מספר בין 1 ל-100.";
        }
    } else {
        massage.innerHTML = "לא הכנסת מספר!";
    }
});

let bt99 = document.getElementById("bt99");
let a = document.getElementById("a");

bt99.addEventListener("click", () => {
    bt99.classList.remove("ani")
    bt99.classList.add("ani")
    if (a.style.display === "none" || a.style.display === "") {
        a.style.display = "block";
    } else {
        a.style.display = "none";
    }
});
