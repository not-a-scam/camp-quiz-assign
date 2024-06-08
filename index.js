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
    new Array("How many letters are there in toe?", "1", "2", "3", "4", 3),
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
            }
            options[i].checked = false;
            options[i].parentElement.className = "options";
            oneTick = true;
        }
    }

    if(oneTick){
        questionsAnswered++;
        document.getElementById("count").innerHTML = "Question: " + questionsAnswered + "/10";
        document.getElementById("correct").innerHTML = "Correct: " + correctAnswers + "/10";

        document.getElementsByClassName("choice")[0].className = 'choice fade';
        setTimeout(function(){
            if(questionsAnswered == quizLength){
                document.getElementById("next").hidden = true;
                document.getElementsByClassName("choice")[0].hidden = true;
                document.getElementsByClassName("end")[0].hidden = false;
                let finalMessage = "";
                let finalCTA = "";
    
                if(correctAnswers >= 8){
                    finalMessage = "You passed the test!"
                    finalCTA = "Head to the counter at the back of the auditorium to get your game card signed!"
                } else {
                    finalMessage = "Good Attempt!"
                    finalCTA = "Refresh this page to try again!"
                }
    
                document.getElementById("final-message").textContent = finalMessage;
                document.getElementById("final-cta").textContent = finalCTA;
    
            } else {
                if (questionsAnswered == quizLength - 1){
                    document.getElementById("next").innerHTML = "Submit";
                }
                newQuestion();
            }

            document.getElementsByClassName("choice")[0].classList.toggle('fade');
            setTimeout(function(){console.log("unfaded")}, 500);
        }, 500);
        
    }

}

function startQuiz() {
    document.getElementsByClassName("start")[0].hidden = true;
    document.getElementsByClassName("choice")[0].hidden = false;
}

function optionClick(radio){
    radio.checked = true;
    let optionsD = document.getElementsByClassName("options");

    for(i = 0; i < optionsD.length; i++){
        if(optionsD[i].firstChild.checked){
            optionsD[i].className = "options checked";
        } else {
            optionsD[i].className = "options";
        }
    }
}