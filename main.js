const clearButtons = document.getElementsByClassName("clear-btn");
const copyButtons = document.getElementsByClassName("copy-btn");
const callButtons = document.getElementsByClassName("call-btn");
const loveButtons = document.getElementsByClassName("love-btn");

let loveCount = document.querySelector(".loveCount").innerText;
for (const btn of loveButtons) {
  btn.addEventListener("click", () => {
    loveCount++;
    document.querySelector(".loveCount").innerText = loveCount;
  });
}

let copyCount = document.querySelector(".copyCount").innerText;
for (const btn of copyButtons) {
  btn.addEventListener("click", () => {
    copyCount++;
    document.querySelector(".copyCount").innerText = copyCount;
    const card = btn.closest(".card");
    const number = card.querySelector(".number");
    const text = number.innerText;

    navigator.clipboard.writeText(text);
    alert("Copied " + text);
  });
}

let callCount = document.querySelector(".callCoin").innerText;
for (const btn of callButtons) {
  btn.addEventListener("click", () => {
    if (callCount > 0) {
      callCount -= 20;
      document.querySelector(".callCoin").innerText = callCount;
    } else {
      alert("Not enough coins");
    }
  });
}
