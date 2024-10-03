// script.js

let currentQuestion = 1; 
let totalQuestions = 20;

// Progress bar
function updateProgressBar() {
  // Calculate percentage of progress
  let progressPercentage = (currentQuestion / totalQuestions) * 100;

  // Update the progress bar width
  document.getElementById('progress-fill').style.width = progressPercentage + '%';

  // Update the question number text
  document.getElementById('question-number').textContent = `${currentQuestion}/${totalQuestions}`;
}

// Call the function to update the progress bar when needed
updateProgressBar();

const quizzes = {
    html: [
      {
        question: "What is HTML?",
        answers: [
          "HyperText Markup Language",
          "Home Tool Markup Language",
          "Hyperlinks and Text Markup Language",
          "HyperTransfer Markup Language"
        ],
        correctAnswer: 0
      },
      {
        question: "What are HTML elements?",
        answers: [
          "The basic building blocks of HTML pages",
          "Attributes that provide additional information",
          "Tags used to style the webpage",
          "Comments in the HTML code"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the difference between an HTML element and a tag?",
        answers: [
          "An element includes tags and content; a tag is just the markup",
          "They are the same thing",
          "A tag includes attributes; an element does not",
          "An element is used for CSS; a tag is for HTML"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the <!DOCTYPE> declaration used for?",
        answers: [
          "To inform the browser about the HTML version",
          "To link to an external stylesheet",
          "To declare a variable in JavaScript",
          "To include a script file"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the purpose of the <html> tag in HTML?",
        answers: [
          "It represents the root of an HTML document",
          "It contains metadata for the document",
          "It displays content to the user",
          "It creates a link to another page"
        ],
        correctAnswer: 0
      },
      // ... add more Questions
      // 
      {
        question: "What does the <a> tag do, and what are its key attributes?",
        answers: [
          "Creates a hyperlink; key attribute is href",
          "Displays an image; key attribute is src",
          "Creates a form; key attribute is action",
          "Formats text; key attribute is style"
        ],
        correctAnswer: 0
      },
      {
        question: "What is semantic HTML, and why is it important?",
        answers: [
          "Using meaningful tags; improves accessibility and SEO",
          "Using comments in code; helps with debugging",
          "Minifying HTML; improves load times",
          "Using inline styles; increases performance"
        ],
        correctAnswer: 0
      },
      // Ensure all questions are added here
    ],
    // You can include CSS and JS quizzes similarly if needed
  };
  
  let currentQuestionIndex = 0;
  let score = 0;
  let selectedQuiz = [];
  
  function startQuiz(topic) {
    selectedQuiz = quizzes[topic];
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz').classList.remove('hide');
    document.getElementById('result').classList.add('hide');
    document.getElementById('feedback').classList.add('hide');
    loadQuestion();
  }
  
  function loadQuestion() {
    const currentQuestion = selectedQuiz[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    const answerButtons = document.querySelectorAll('.answer');
    answerButtons.forEach((button, index) => {
      button.textContent = currentQuestion.answers[index];
      button.onclick = () => checkAnswer(index);
    });
  }
  
  function checkAnswer(selectedIndex) {
    const currentQuestion = selectedQuiz[currentQuestionIndex];
    const correctAnswer = currentQuestion.correctAnswer;
    const feedbackElement = document.getElementById('feedback');
    if (selectedIndex === correctAnswer) {
      feedbackElement.textContent = "Correct! " + getExplanation(currentQuestion.question);
      feedbackElement.style.color = "green";
      score++;
    } else {
      feedbackElement.textContent = "Incorrect! " + getExplanation(currentQuestion.question);
      feedbackElement.style.color = "red";
    }
    feedbackElement.classList.remove('hide');
    setTimeout(nextQuestion, 2000); // Wait 2 seconds before moving to the next question
  }
  
  function getExplanation(questionText) {
    // Optional: You can add explanations to each question
    // For now, we'll return a generic message
    return ""; // You can customize this per question
  }
  
  function nextQuestion() {
    document.getElementById('feedback').classList.add('hide');
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuiz.length) {
      loadQuestion();
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    document.getElementById('quiz').classList.add('hide');
    document.getElementById('result').classList.remove('hide');
    document.getElementById('score').textContent = `Your score: ${score} / ${selectedQuiz.length}`;
  }
  
  document.getElementById('restart').addEventListener('click', () => {
    // Restart the quiz with the same topic
    const topic = document.querySelector('h1').textContent.toLowerCase().split(' ')[0];
    startQuiz(topic);
  });
  
  // Start the quiz when the page loads (if needed)
  // startQuiz('html');
  