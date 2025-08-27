const clearButton = document.getElementById("clear-btn");
const copyButtons = document.getElementsByClassName("copy-btn");
const callButtons = document.getElementsByClassName("call-btn");
const loveButtons = document.getElementsByClassName("love-btn");

let loveCount = document.querySelector(".loveCount").innerText;
for (const btn of loveButtons) {
  btn.addEventListener("click", function () {
    loveCount++;
    document.querySelector(".loveCount").innerText = loveCount;
  });
}

let copyCount = document.querySelector(".copyCount").innerText;
for (const btn of copyButtons) {
  btn.addEventListener("click", function () {
    const card = btn.closest(".card");
    const number = card.querySelector(".number");
    const text = number.innerText;

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.top = "-9999px";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        copyCount++;
        document.querySelector(".copyCount").innerText = copyCount;
        alert("Copied " + text);
      } else {
        alert("Failed to copy!");
      }
    } catch (err) {
      console.error("Copy failed:", err);
      alert("Failed to copy!");
    }

    document.body.removeChild(textarea); // clean up
  });
}

let callCount = document.querySelector(".callCoin").innerText;
for (const btn of callButtons) {
  btn.addEventListener("click", function () {
    if (callCount > 0) {
      callCount -= 20;
      document.querySelector(".callCoin").innerText = callCount;
      const card = btn.closest(".card");
      const number = card.querySelector(".number");
      const text = number.innerText;
      alert("Calling " + card.querySelector("h1").innerText + " " + text);
      const history = document.getElementsByClassName("call-history");
      const name = card.querySelector("h1").innerText;
      const time = new Date().toLocaleTimeString();
      const historyEntries = document.getElementById("history-entries");
      const newEntry = document.createElement("div");
      newEntry.innerHTML += `<div class="flex justify-between gap-1 items-center p-2 bg-gray-100  rounded-lg mb-2">
      <div class="">
        <h1 class="font-bold text-lg">${name}</h1>
        <p>${text}</p>
      </div>
      <div>
        <span class="">${time}</span>
      </div>
      </div>`;
      historyEntries.appendChild(newEntry);
    } else {
      alert("Not enough coins");
    }
  });
}

clearButton.addEventListener("click", function () {
  const historyEntries = document.getElementById("history-entries");
  historyEntries.innerHTML = "";
});
