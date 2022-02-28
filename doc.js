x = 7
console.log(x);
var x;

let y;
y = 4;
console.log(y);

console.log(z)
z = 8;
var z;

var id = setTimeout(Animation,5000);


function Animation(){
    console.log("Hello");
    var target = document.getElementById("test");
    target.style.width = "500px"
}

function animationStop(){
    clearTimeout(id);
}

var a = 0;
setInterval (Anim, 1000);

function Anim(){
    a = a + 10;
    console.log(a);
    var targets = document.getElementById("text");
    targets.style.marginLeft = a + 'px';
}

var element;

element = document.all;
console.log(element);
element = document.head;
console.log(element);
element = document.body;
console.log(element);
element = document.title;
console.log(element);
element = document.links;
console.log(element);


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


//Set methods

element = document.getElementById("header").innerText = "Wow";
console.log(element);
element = document.getElementById("header1").innerHtml = "<h1>Wow</h1>";
console.log(element);
element = document.getElementById




