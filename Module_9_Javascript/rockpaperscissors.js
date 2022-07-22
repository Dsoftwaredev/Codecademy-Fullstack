const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors') {
      return userInput;
    }
  }
  console.log(getUserChoice('paper'));
  
  const getComputerChoice = () => {
   let randomNumber = Math.floor(Math.random()* 3);
   if (randomNumber == 0) {
     return 'rock';
   } else if (randomNumber == 1) {
     return 'paper';
   } else if (randomNumber == 2) {
     return 'scissors';
   }
  }
  