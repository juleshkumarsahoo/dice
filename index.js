
var randomNumber1 = Math.ceil(Math.random() * 6); //1-6

var randImg="Idice"+randomNumber1+".png";//dece1.png-dice6.png
var randomImageSource1="images/"+randImg;// images/Idice1.png-images/Idice6.png
var query1=document.querySelectorAll("img")[0];
query1.setAttribute("src",randomImageSource1);




var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/Idice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
