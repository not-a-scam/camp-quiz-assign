let questionsAnswered = 0;
let correctAnswers = 0;

const q = document.getElementById("question");

const quizLength = 10; 
const optionslb = document.getElementsByName("optionslb");
const options = document.getElementsByName("options");

function Question(question, option1, option2, option3, option4, answer){
    this.q = question;
    this.op1 = option1;
    this.op2 = option2;
    this.op3 = option3;
    this.op4 = option4;
    this.ans = answer;
}

const bank = new Array(
    new Array("How many letters are there in cool?", "1", "2", "3", "4", 4),
    new Array("How many letters are there in nice?", "1", "2", "3", "4", 4),
    new Array("How many letters are there in ant?", "1", "2", "3", "4", 3),
    new Array("How many letters are there in by?", "1", "2", "3", "4", 2),
    new Array("How many letters are there in ant?", "1", "2", "3", "4", 3),
    new Array("How many letters are there in bee?", "1", "2", "3", "4", 3),
    new Array("How many letters are there in a?", "1", "2", "3", "4", 1),
    new Array("How many letters are there in no?", "1", "2", "3", "4", 2),
    new Array("How many letters are there in cram?", "1", "2", "3", "4", 4),
    new Array("How many letters are there in tide?", "1", "2", "3", "4", 4),
    new Array("How many letters are there in new?", "1", "2", "3", "4", 3),
    new Array("How many letters are there in got?", "1", "2", "3", "4", 3),
    new Array("How many letters are there in slew?", "1", "2", "3", "4", 4),
    new Array("How many letters are there in move?", "1", "2", "3", "4", 4),
    new Array("How many letters are there in bone?", "1", "2", "3", "4", 4),
    new Array("How many letters are there in sea?", "1", "2", "3", "4", 3),
    new Array("How many letters are there in to?", "1", "2", "3", "4", 2),
    new Array("How many letters are there in rim?", "1", "2", "3", "4", 3),
    new Array("How many letters are there in fox?", "1", "2", "3", "4", 3),
    new Array("How many letters are there in once?", "1", "2", "3", "4", 4),
    new Array("How many letters are there in four?", "1", "2", "3", "4", 4),
    new Array("How many letters are there in one?", "1", "2", "3", "4", 3)
)

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function setup(){
    shuffleArray(bank);
    newQuestion();
}

function newQuestion(){
    q.textContent = bank[questionsAnswered][0];
    for(i = 0; i < options.length; i++){
        optionslb[i].textContent = bank[questionsAnswered][i+1];
    }
}

function nextButton(){
    let ans = bank[questionsAnswered][5];
    let oneTick = false;
    for(i = 0; i < options.length; i++){
        if(options[i].checked){
            if(i == ans-1){
                correctAnswers++;
                document.getElementById("correct").innerHTML = "Correct: " + correctAnswers + "/10";
            }
            options[i].checked = false;
            oneTick = true;
        }
    }

    if(oneTick){
        questionsAnswered++;
        document.getElementById("count").innerHTML = "Question: " + questionsAnswered + "/10";
    
        if(questionsAnswered == quizLength){
            document.getElementById("next").hidden = true;
            document.getElementsByClassName("choice")[0].hidden = true;
        } else {
            if (questionsAnswered == quizLength - 1){
                document.getElementById("next").innerHTML = "Submit";
            }
            newQuestion();
        }
    }
}