window.onload = function() {
    //define variables
    var questionArea = document.getElementsByClassName("questions")[0],

        answerArea = document.getElementsByClassName("answers")[0],
        checker = document.getElementsByClassName("checker")[0],
        current = 0,

        // An object that holds all the questions + possible answers.
        // In the array --> last digit gives the correct answer-position
        quizContent = {
            "What was used for blood in the movie Psycho?": [
                "Ketchup", "Corn Syrup", "Chocolate Syrup", "Real Blood", 3],
            "The movie When a Stranger Calls is based on which urban legend?": [
                "Kidney Thief", "Babysitter Alone", "Slenderman", "Ringing Phone", 2],
            "In the movie Carrie, how does Carrie kill her mother?": [
                "Burns Her", "Hangs Her", "Shoots Her", "Knifes Her", 4],
            "What was the name of the boy who drown in Friday the Thirteen?": [
                "Billy", "Jason", "Jeremy", "Mikey", 2],
            "What horror movie featured a gourmet cannibal?": [
                "Friday the 13th", "Texas Chainsaw Massacre", "Silence of the Lambs", "Real Blood", 3],
            "Which movie, starring Brad Pitt, featured the Seven Deadly Sins from the Bible?": [
                "Fear No Evil", "Seven", "I Know What you did Last Summer", "Saw", 2],
            "What Horror movie makes you believe that everyone has died, when they have not?": [
                "Friday the 13th", "Nightmare on Elm Street", "April Fool's Day", "Carrie", 3],    
            "Who was the first to play Frankenstein in the movies, in 1931?": [
                "Boris Karloff", "Bela Lugosi", "Charles Ogle", "Charlie Chaplin", 1],
        }


function loadQuestion(curr) {
    // This function loads all the question into the questionArea
    // It grabs the current question based on the 'current'-variable
    // This variable grabs all the keys of an object and put it in an array
    // The [curr] at the end will give us the current question :)
    var question = Object.keys(quizContent)[curr]
        //remove everything in the question area
    questionArea.innerHTML = ""
        //add current question!
    questionArea.innerHTML = question
}

function loadAnswers(curr) {
    //this loads all possible answers of given question
    //it should grab the answer array necessary with the help of the 'current' var
    //answers will be added with an onclick function
    //grab the answers
    var answers = quizContent[Object.keys(quizContent)[curr]]
        //empty the answer field
    answerArea.innerHTML = ""
        //add all possible answers the the answer area
    for ( i = 0; i < answers.length - 1; i += 1) {
        var createDiv = document.createElement("div"),
            text = document.createTextNode(answers[i])
        createDiv.appendChild(text)
            //this adds onclick function on the answer, executing a function to check correctness
        createDiv.addEventListener("click", checkAnswer(i, answers))
        answerArea.appendChild(createDiv)
    }
}

function checkAnswer(i, arr) {
    //this is the function that'll run when one of the answers is clicked
    //check if givenanswer is same as correct answer
    //after this, check if it's the last question of the quiz
    //if it is the last wuestion, empty the answer Area and let user know it's over
    return function() {
        var userAnswer = i,
            correctAnswer = arr[arr.length - 1]
        if (userAnswer === correctAnswer) {
            addChecker(true)
        } else {
            addChecker(false)
        }
        if (current < Object.keys(quizContent).length - 1) {
            current += 1
            loadQuestion(current)
            loadAnswers(current)
        } else {
            questionArea.innerHTML = "you made it... or did you?"
            answerArea.innerHTML = ""
        }
    }
}

function addChecker(bool) {
    //add a div element to the page to see if true/false
    var createDiv = document.createElement("div"),
        txt = document.createTextNode(current + 1)
    createDiv.appendChild(txt)
    if (bool) {
        createDiv.className += "correct"
        checker.appendChild(createDiv)
    } else {
        createDiv.className += "false"
        checker.appendChild(createDiv)
    }
}
//start quiz right away
loadQuestion(current)
loadAnswers(current)
}