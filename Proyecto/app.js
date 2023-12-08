window.onload = () => {
  //write your code here
  document.querySelector('.card').classList.add(generateRandomSuit())
  document.getElementById("number").innerHTML=generateRandomNumber()
};

let generateRandomNumber=() => {
  let numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K",];
  let indexNumbers = Math.floor(Math.random() * numbers.length)
  return numbers[indexNumbers];
};

let generateRandomSuit=() => {
  let suit = ["club","diamond","heart","spade"];
  let indexSuit = Math.floor(Math.random() * suit.length)
  return suit[indexSuit];
};