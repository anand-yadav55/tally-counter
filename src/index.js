const count = document.getElementsByClassName("count")[0];
const tally = document.getElementsByClassName("tally")[0];
const addButton = document.getElementsByClassName("add")[0];
const subtractButton = document.getElementsByClassName("subtract")[0];
const resetButton = document.getElementsByClassName("reset")[0];

let counter = 0;
if (typeof Storage !== "undefined") {
  if (!localStorage.getItem("countForTallyCounter")) {
    counter = 0;
    localStorage.setItem("countForTallyCounter", counter);
  } else {
    counter = Number(localStorage.getItem("countForTallyCounter"));
  }
  count.innerText = counter;
  tallyMaker(counter);

  function scrollToBottom(container) {
    container.scrollTop = container.scrollHeight;
  }
  function tallyMaker(counter) {
    let noOfCircles = counter / 5;
    let noOfLines = counter % 5;
    const tally = document.getElementsByClassName("tally")[0];
    tally.innerText = "";
    for (let i = 1; i <= noOfCircles; ++i) {
      tally.innerText += "O";
    }
    for (let i = 1; i <= noOfLines; ++i) {
      tally.innerText += "|";
    }
    scrollToBottom(tally);
  }

  addButton.addEventListener("click", () => {
    counter += 1;
    localStorage.setItem("countForTallyCounter", counter);
    count.innerText = counter;
    tallyMaker(counter);
  });
  subtractButton.addEventListener("click", () => {
    if (counter <= 0) {
      alert("cannot go less than 0");
      return;
    }
    counter -= 1;
    localStorage.setItem("countForTallyCounter", counter);
    count.innerText = counter;
    tallyMaker(counter);
  });
  resetButton.addEventListener("click", () => {
    if (!confirm("are you sure you want to RESET the counter?")) {
      return;
    }
    counter = 0;
    localStorage.setItem("countForTallyCounter", counter);
    count.innerText = counter;
    tallyMaker(counter);
  });
} else {
  alert("Your browser does not support local storage!!!.\nEnable it.");
}
