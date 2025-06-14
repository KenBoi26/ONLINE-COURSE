// APIs --> Application Programming Interface
// DOM --> Document Object Model
// BOM --> Browser Object Model
// BOM is a part of the DOM
// DOM is a tree structure of HTML elements

console.log(window);
const text = window.prompt("Enter your name");
console.log(text);
alert('Hello ' + text + '!');
console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(window.document);
console.dir(window.document);

const elem = document.getElementsByTagName('h6');



elem.style.textAlign = 'center';