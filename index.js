// Write your code here!

const body = document.getElementsByTagName("body")[0];
const mainToRemove = body.querySelector("main#main");

body.removeChild(mainToRemove);

const newHeader = document.createElement("h1");

newHeader.id = "victory";

newHeader.innerHTML = " CELIA is the champion";