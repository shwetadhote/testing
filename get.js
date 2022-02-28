//Get methods

var element;

element = document.getElementById("header").innerText;
console.log(element);

element = document.getElementById("header").innerHTML;
console.log(element);

element = document.getElementById("header").innerAttribute;
console.log(element);

element = document.getElementById("header").getAttribute("class");
console.log(element);

element = document.getElementById("header").getAttributeNode("class");
console.log(element);

element = document.getElementById("header").attributes;
console.log(element);

element = document.getElementById("header").attributes[1];
console.log(element);