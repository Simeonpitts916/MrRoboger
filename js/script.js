function numberfinder() {
    const number1Push = document.getElementById("numberPush").value;
    let wordarry = [];
    for (let index = 0; index <= number1Push; index++) {
      let string = index.toString();
      if (string.includes("3")) {
        wordarry.push("wont you be my neighbor?");
      } else if (string.includes("2")) {
        wordarry.push("boop!");
      } else if (string.includes("1")) {
        wordarry.push("beep");
      } else {
        wordarry.push(index);
      }
    }
    const finalewordcount = wordarry.join(", ");
    return finalewordcount;
  }
  
  // UI logic
  
  window.onload = function () {
    const form = document.querySelector("form");
    form.onsubmit = function (event) {
      event.preventDefault();
      let number1push = document.getElementById("numberPush").value;
      const answerParagraph = document.querySelector(".answer");
      if (!answerParagraph) {
        console.error("Answer element not found.");
        return;
      }
      if (number1push === "") {
        answerParagraph.innerText = "We need a number.";
      } else {
        answerParagraph.innerText = numberfinder();
      }
      return number1push;
    };
  };






























