// busniss logic

function numberfinder() {
    const number1Push = document.getElementById("numberPush").value 
    let wordarry = [];
    for (let index = 0; index <= number1Push; index++){
        let string = index.toString();
        if (string.includes("1")) {
            wordarry.push("beep!");
        } else if (string.includs("2")) {
            wordarry.push("boop!");
        } else if (string.includes("3")) {
            wordarry.push("wont you be my neighber?");
        } else {
            wordarry.push(index);
        }
    }
    const finalewordcount = wordarry.join(", ");
    return finalewordcount;
}

// UI logic 

window.onload = function() {
    const form = document.querySelector ("form");
    form.onsubmit = function(event) {
        event.preventDefault();
        let number1push = document.getElementById("numberPush").value;
        if (number1push === ""){
            document.getElementById("answer").innerText = numberfinder();
        } else {
            document.getElementById("answer").innerText = "we need a number";
        }
        return number1push;
        
    }
}






























