var d1 = Math.floor(Math.random()*6)+1;
var d2 = Math.floor(Math.random()*6)+1;
if(d1>d2) {
    document.querySelector("h1").innerHTML ="🚩Player 1 wins";
}
else if(d2>d1) {
    document.querySelector("h1").innerHTML ="Player 2 wins🚩";
}
else {
    document.querySelector("h1").innerHTML ="Refresh again!!";
}
console.log(d1);
console.log(d2);
document.querySelector("img.img1").setAttribute("src","images/dice"+d1+".png");
document.querySelector("img.img2").setAttribute("src","images/dice"+d2+".png");
