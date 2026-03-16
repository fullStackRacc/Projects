const questions = [
  {
    category: "Funny",
    question: "What candy was originally known as 'chicken feed'?",
    choices: ["Granola", "Candy Corn", "Chocolate Chips"],
    answer: "Candy Corn"
  },
  {
    category: "Funny",
    question: "The unicorn is the national animal of what country?",
    choices: ["England", "Ireland", "Scotland"],
    answer: "Scotland"
  },
  {
    category: "Funny",
    question: "Now known as 'Meta', Facebook was originally named what?",
    choices: ["The Face Book", "The Facebook", "TheFaceBook"],
    answer: "TheFaceBook"
  },
  {
    category: "Funny",
    question: "On average, which grows faster: fingernails or toenails?",
    choices: ["Fingernails", "Toenails", "Both"],
    answer: "Fingernails"
  },
  {
    category: "Funny",
    question: "Which U.S. state makes it illegal to get married on a dare?",
    choices: ["Nevada", "Colorado", "California"],
    answer: "Colorado"    
  }
];

function getRandomQuestion(arr) {
  let randomInt = Math.floor(Math.random() * arr.length);
  return arr[randomInt]
};

const selectedQuestion = getRandomQuestion(questions);
console.log(selectedQuestion);

function getRandomComputerChoice(choices) {
  let randomInt = Math.floor(Math.random() * choices.length);
  return choices[randomInt];
};

const computerChoice = getRandomComputerChoice(selectedQuestion.choices);

console.log(computerChoice);

function getResults(obj1, str){
  if (obj1.answer === str) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${obj1.answer}`;
  }
};

console.log(getResults(selectedQuestion, computerChoice));