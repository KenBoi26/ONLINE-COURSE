// D.R.Y - Don't Repeat Yourself
// K.I.S.S - Keep It Simple, Stupid
// don't use var, use let or const instead
console.log("Starting the app...");
// function --> reusable block of code
function getStudentScore(name, score1, score2) {
  
  console.log("Hello", name);
  console.log(score1 + score2);
}

getStudentScore("John", 10, 20);
getStudentScore("Jane", 15, 25);
getStudentScore("Doe", 5, 15);
console.log("Ending the app...");