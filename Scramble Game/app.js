const msg = document.querySelector(".msg");
const guess = document.querySelector("input");
const btn = document.querySelector(".btn");

let play = false;
let newWords = "";
let ranWords = "";

let sWords = [
  "c++",
  "ruby",
  "javascript",
  "java",
  "pythan",
  "spring",
  "angular",
  "react",
  "supu",
];

const createNewWord = () => {
  let randomNum = Math.floor(Math.random() * sWords.length);
  let temp = sWords[randomNum];
  return temp;
};

const scrumbleWord = (arr) => {
  for (var i = arr.length - 1; i > 0; i--) {
    let tempVar = arr[i];
    let j = Math.floor(Math.random() * (i + 1));

    arr[i] = arr[j];
    arr[j] = tempVar;
  }
  return arr;
};

btn.addEventListener("click", function () {
  if (!play) {
    play = true;
    btn.innerHTML = "Guess";
    guess.classList.toggle("hidden");

    newWords = createNewWord();
    ranWords = scrumbleWord(newWords.split("")).join("");

    msg.innerHTML = ranWords;
  } else {
    let tempWord = guess.value;
    if (newWords === tempWord) {
      console.log("correct");
      play = false;
      msg.innerHTML = `Awesome it's currect. it is ${newWords}`;
      btn.innerHTML = "Start Again";
      guess.classList.toggle("hidden");
      guess.value = "";
    } else {
      console.log("incorrect");
      msg.innerHTML = `sorry:) it's incurrect. Try Again 
            ${ranWords}`;
    }
  }
});
