// set username var
let username = "Joe";

// Check if user entered username
username ? console.log(`Hello, ${username}!`) : console.log("Hello");

// Set the question
const userQuestion = "Am I Cool?";

console.log(userQuestion);

// RNG
let randomNumber = Math.floor(Math.random() * 8);

// Set eightBall var 
let eightBall = "";


// Switch case for all the diffrent outcomes
switch (randomNumber) {
  case 0: 
  eightBall = 'It is certain'
  break;
  case 1 : 
  eightBall = 'It is decidedly so'
  break; 
  case 2 :
  eightBall = 'Reply hazy try again'
  break;
  case 3 :
  eightBall = 'Cannot predict now'
  break; 
  case 4 :
  eightBall = 'Do not count on it'
  break;
  case 5 :
  eightBall = 'My sources say no'
  break;
  case 6 : 
  eightBall = 'Outlook not so good'
  break;
  case 7:
  eightBall = 'Signs point to yes'
  break;
};

console.log(eightBall);