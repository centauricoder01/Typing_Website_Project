const API_URL = "http://api.quotable.io/random";
const QuoteDisplayElement = document.getElementById("quoteDisplay");
const QuoteInputElement = document.getElementById("quoteInput");
const timerElement = document.getElementById("timer");

let correct = true;

// ADDING THE EVENTLISTNER TO THE TEXTAREA SO THAT WE CAN GET THE VALUES MATCH TO THE DATA

QuoteInputElement.addEventListener("input", () => {
  const arrayQuote = QuoteDisplayElement.querySelectorAll("span");

  const arrayValue = QuoteInputElement.value.split("");

  arrayQuote.forEach((characterspan, index) => {
    const character = arrayValue[index];
    // IF CHARACTER IS NOT TYPES THEN IT WILL NOT IMPLEMENT ANY CLASS
    if (character == null) {
      characterspan.classList.remove("correct");
      characterspan.classList.remove("incorrect");
      correct = false;
    }
    // IF IT MATCHES TO THE ELEMENT THEN IT WILL SHOW TO GREEN
    else if (character === characterspan.innerText) {
      characterspan.classList.add("correct");
      characterspan.classList.remove("incorrect");
      correct = true;
    }
    // IF IT IS NOT MATCHES TO THE ELELENT THEN IT WILL ADD INC0RRECT
    else {
      characterspan.classList.remove("correct");
      characterspan.classList.add("incorrect");
      correct = false;
    }
  });

  //    IF THE USER END TO THE LAST ELEMENT BY MAKING THE VALUE CORRECT THEN API WILL CALLED AGAIN

  if (correct) {
    Get_Api_Data().then((res) => {
      QuoteDisplayElement.innerText = "";

      // PASTING THE DATA ON THE WEBPAGE WITH SPAN TAG SO THAT WE CAN MATCH THE VALUES OF EACH ONE

      res.split("").forEach((char) => {
        const CharcterSpan = document.createElement("span");
        CharcterSpan.innerText = char;
        QuoteDisplayElement.appendChild(CharcterSpan);
      });

      // MAKING THE VALUE TO NULL IF WE HAVE NEW DATA FROM THE API
      QuoteInputElement.value = null;
      startTimer();
    });
  }
});

// CALLING THE DATA FROM THE API
const Get_Api_Data = async () => {
  let url = await fetch(API_URL);
  let data = await url.json();
  return data.content;
};

// CALLING THE API FUNCTION
const Start_the_Call = () =>
  Get_Api_Data().then((res) => {
    QuoteDisplayElement.innerText = "";

    // PASTING THE DATA ON THE WEBPAGE WITH SPAN TAG SO THAT WE CAN MATCH THE VALUES OF EACH ONE

    res.split("").forEach((char) => {
      const CharcterSpan = document.createElement("span");
      CharcterSpan.innerText = char;
      QuoteDisplayElement.appendChild(CharcterSpan);
    });

    // MAKING THE VALUE TO NULL IF WE HAVE NEW DATA FROM THE API
    QuoteInputElement.value = null;
    startTimer();
  });

// MAKING THE TIMER FUNCTION OVER HERE
let starttime;
let id;
function startTimer() {
  timerElement.innerText = 0;
  starttime = new Date();
  id = setInterval(() => {
    timerElement.innerText = getTimerTime();
  }, 1000);
}

function getTimerTime() {
  return Math.floor((new Date() - starttime) / 1000);
}

const stop_Typing = () => {
  timerElement.innerText = 0;
  QuoteInputElement.value = null;
  QuoteDisplayElement.innerText = "";
  console.log("Inside stop typing");
  clearInterval(id);
};
