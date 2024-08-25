const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const resultContainer = document.getElementById("result-container");
const correctIcon = document.getElementById("correct-icon");
const incorrectIcon = document.getElementById("incorrect-icon");
const correctIcon1 = document.getElementById("correct-icon1");
const incorrectIcon1 = document.getElementById("incorrect-icon1");
var answer = 0;
var num1, num2;

function generate_equation() {
    num1 = Math.floor(Math.random() * 13);
    num2 = Math.floor(Math.random() * 13);
    var dummyAnswer1 = Math.floor(Math.random() * 13);
    var dummyAnswer2 = Math.floor(Math.random() * 13);
    var allAnswers = [];
    var switchAnswers = [];

    // Replace this line with the appropriate operation (e.g., +, -, *, /)
    answer = num1 * num2;

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    allAnswers = [answer, dummyAnswer1, dummyAnswer2];

    for (i = allAnswers.length; i--;) {
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    }

    option1.innerHTML = switchAnswers[0];
    option2.innerHTML = switchAnswers[1];
    option3.innerHTML = switchAnswers[2];

    // Clear previous result
    resultContainer.innerHTML = "";
    correctIcon.style.display = "none";
    incorrectIcon.style.display = "none";
    correctIcon1.style.display = "none";
    incorrectIcon1.style.display = "none";
}

option1.addEventListener("click", function () {
    if (option1.innerHTML == answer) {
        
        // Show correct icon
        correctIcon.style.display = "block";
        correctIcon1.style.display = "block";
        resultContainer.innerHTML = `${num1} * ${num2} = ${answer}`;
        setTimeout(function () {
            correctIcon.style.display = "none"; // Hide the icon after a short delay
            correctIcon1.style.display = "none"; // Hide the icon after a short delay
            resultContainer.innerHTML = ""; // Clear the message after a short delay
            generate_equation();
        }, 5000);
    } else {
        // Show incorrect icon and provide explanation
        incorrectIcon.style.display = "block";
        incorrectIcon1.style.display = "block";
        resultContainer.innerHTML = `${num1} * ${num2} is  not ${option1.innerHTML}. The correct answer is ${answer}.`;
        setTimeout(function () {
            incorrectIcon.style.display = "none"; // Hide the icon after a short delay
            incorrectIcon1.style.display = "none"; // Hide the icon after a short delay
            resultContainer.innerHTML = ""; // Clear the message after a short delay
        }, 5000);
    }
});


option2.addEventListener("click", function () {
    if (option2.innerHTML == answer) {
        
        // Show correct icon
        correctIcon.style.display = "block";
        correctIcon1.style.display = "block";
        resultContainer.innerHTML = `${num1} * ${num2} = ${answer}`;
        setTimeout(function () {
            correctIcon.style.display = "none"; // Hide the icon after a short delay
            correctIcon1.style.display = "none"; // Hide the icon after a short delay
            resultContainer.innerHTML = ""; // Clear the message after a short delay
            generate_equation();
        }, 5000);
    } else {
        // Show incorrect icon and provide explanation
        incorrectIcon.style.display = "block";
        incorrectIcon1.style.display = "block";
        resultContainer.innerHTML = `${num1} * ${num2} is not ${option2.innerHTML}. The correct answer is ${answer}.`;
        setTimeout(function () {
            incorrectIcon.style.display = "none"; // Hide the icon after a short delay
            incorrectIcon1.style.display = "none"; // Hide the icon after a short delay
            resultContainer.innerHTML = ""; // Clear the message after a short delay
        }, 5000);
    }
});


option3.addEventListener("click", function () {
    if (option3.innerHTML == answer) {
        
        // Show correct icon
        correctIcon.style.display = "block";
        correctIcon1.style.display = "block";
        resultContainer.innerHTML = `${num1} * ${num2} = ${answer}`;
        setTimeout(function () {
            correctIcon.style.display = "none"; // Hide the icon after a short delay
            correctIcon1.style.display = "none"; // Hide the icon after a short delay
            resultContainer.innerHTML = ""; // Clear the message after a short delay
            generate_equation();
        }, 5000);
    } else {
        // Show incorrect icon and provide explanation
        incorrectIcon.style.display = "block";
        incorrectIcon1.style.display = "block";
        resultContainer.innerHTML = `${num1} * ${num2} is not ${option3.innerHTML}. The correct answer is ${answer}.`;
        setTimeout(function () {
            incorrectIcon.style.display = "none"; // Hide the icon after a short delay
            incorrectIcon1.style.display = "none"; // Hide the icon after a short delay
            resultContainer.innerHTML = ""; // Clear the message after a short delay
        }, 5000);
    }
});

// Repeat the same logic for option2 and option3

// Add visual cue or animation when a new equation is generated
generate_equation();