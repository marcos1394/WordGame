
const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
refreshbtn = document.querySelector(".refresh-word"),
inputField = document.getElementById("entrada"),
checkBtn = document.querySelector(".check-word");



const initGame = () =>{
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = 0 < wordArray.length -1; i > 0; i--){
    let j = Math.floor(Math.random() * (i+1));
   [[wordArray[i]], wordArray[j]] = [wordArray[j]],[wordArray[i]]; 
    console.log(randomObj)
}

wordText.innerText = wordArray.join("");
hintText.innerText = randomObj.hint;
correctWord = randomObj.word.toLocaleLowerCase();
}

initGame();

const checkWord = () =>{
    let userWord = inputField.localName.toLocaleLowerCase();
    if(userWord) return alert(`Please enter a word check`);
    if(userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct`);
    alert(`Congrats! ${userWord.toUpperCase()} is a correct word`);
}

refreshbtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);