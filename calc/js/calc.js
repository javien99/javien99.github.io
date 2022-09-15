console.log("calc JS loaded :D");

const a = document.getElementById("result");


function bAssign() {
  a.innerHTML = "8";
}

function aAddTwoPlusTwo() {
  a.innerHTML = 4+4;
}

function aEightPlusEight(){
  var result = 8+8;
  console.log("Eight Plus Eight Is: " +16);
  a.innerHTML = 16;

}

function aBigOlNumber(c, d) {
  var result = c * d;
  a.innerHTML = 32;

}
