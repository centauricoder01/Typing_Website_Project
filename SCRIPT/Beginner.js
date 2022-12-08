const API_URL = "http://api.quotable.io/random";

// GETTING ALL THE EVENT LISTNER OF YOU WEBSITE

let Display_Msg = document.getElementById("msg");
let Typed_Word = document.getElementById("mywords");
let button_Pressed = document.getElementById("btn");

let TimeStart;
let TimeEnd;

const Apicalling = async () => {
  let fetching = await fetch(API_URL);
  let data = await fetching.json();
  return data.content;
};

async function Game_Start() {
  let Getting_Random_Data = await Apicalling();
  Display_Msg.style.color = "white";
  Display_Msg.innerText = Getting_Random_Data;
  let Data = new Date();
  TimeStart = Data.getTime();
  button_Pressed.innerText = "Done";
}

let speed;

const Game_End = () => {
  let date = new Date();
  TimeEnd = date.getTime();
  let totalTime = (TimeEnd - TimeStart) / 1000;

  let totalstr = Typed_Word.value;
  let wordCount = wordCounter(totalstr);
  // MAIN SPEED COUNTING OF YOUR WEBSITE

  speed = Math.round((wordCount / totalTime) * 60);
  // alert("Your Speed is ", speed);

  let checking_Value = Checking_Val(Display_Msg.innerText, totalstr);
};

// CHECKING THE VALUE OF THE EACH LETTER ENTER BY THE USER

const Checking_Val = (Api_value, User_value) => {
  let Api_v = Api_value.split(" ");
  let User_V = User_value.split(" ");
  let count = 0;

  Api_v.forEach((item, index) => {
    if (item === User_V[index]) {
      count++;
    }
  });

  if (speed > 35) {
    Display_Msg.style.color = "#9fff9f";
  } else {
    Display_Msg.style.color = "red";
  }

  Display_Msg.innerText = `Your Speed is ${speed} WPS, and You have ${count} Words Correct out of ${Api_v.length}`;
};

const wordCounter = (str) => {
  let response = str.split(" ").length;
  return response;
};
Typed_Word.disabled = false;
// BUTTON PRESSED TO SHOW DATA ON H2 AND CALLING THE API

button_Pressed.addEventListener("click", () => {
  if (button_Pressed.innerText === "Enter Into A typing Race") {
    Typed_Word.value = null;
    Typed_Word.disabled = false;
    Game_Start();
  } else if (button_Pressed.innerText === "Done") {
    Typed_Word.disabled = true;
    button_Pressed.innerText = "Enter Into A typing Race";
    Game_End();
  }
});
