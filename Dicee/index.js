var randomno1 = Math.floor(Math.random() * 6) + 1;
var randomdiceimg1 = "images/dice" + randomno1 + ".png";
var randomno1 = Math.floor(Math.random() * 6) + 1;

var image1 = document.querySelectorAll('img')[0];
image1.setAttribute("src", randomdiceimg1);
var randomno2 = Math.floor(Math.random() * 6) + 1;
var randomdiceimg2 = "images/dice" + randomno2 + ".png";
var image2 = document.querySelectorAll('img')[1];
image2.setAttribute("src", randomdiceimg2);

if(randomno1>randomno2)
  document.querySelector('h1').innerHTML="Player 1 wins";
else if (randomno1<randomno2) {
  document.querySelector('h1').innerHTML="Player 2 wins";
}
else
  document.querySelector('h1').innerHTML="draw";
