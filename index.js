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
    
    new Array("What did Caleb declare?" "Give me this ___", "Mountain", "Field", "Land", "Sea", 1),
    new Array("Which item of the armour is a symbol of salvation?", "Belt", "Shoes", "Sword", "Helmet", 4),
    new Array("Which item of the armour is a symbol of righteousness?", "Shield", "Sword", "Breastplate", "Helmet", 3),
    new Array("Complete Jehoshaphat’s prayer “we do not know what to do, but _____ ? ", "our trust is in you", "we will still stand firm", "our faith will not be shaken", "our eyes are on you", 4),
    new Array("Who fought the battle of Jericho?", "Caleb", "Joshua", "Moses", "David", 2),
    new Array("What was the name of the giant that David killed?", "Goliath", "His fears and insecurities", "Samson", "Sin", 1),
    new Array("Who crossed the red sea?", "Moses", "Caleb", "David", "Jesus", 1),
    new Array("Which book of the bible says there is a time of war and a time of peace?", "Matthew", "Genesis", "Ecclesiastes", "Leviticus", 3),
    new Array("In Ephesians 6:12, the wrestle is against principalities, powers, rulers of the darkness of this age, spiritual hosts of wickedness in the heavenly places, and not against?", "Flesh and Blood", "Sin and the world", "Flesh and Sin", "Blood and Sin", 1),
    new Array("How many stones did David go to battle with?", "one", "three", "five", "seven", 3),
    new Array("What is pastor sam's middle name?", "Jubilee", "Jireh", "Joshua", "Jubi", 4),
    new Array("What did God commission Joshua with?", "Be strong and courageous", "Be innocent as doves", "Be courageous and of good faith", "Be shrewd as serpents", 1),
    new Array("Joshua son of ____", "Naan", "Nun", "None", "Nan", 2),
    new Array("Caleb was said to have a different ____.", "Faith", "Spirit", "Heart", "Appearance", 2),
    new Array("Which one of the options is not a tribe name?", "Benaiah", "David", "Shammah", "Jehoshaphat", 2),
    new Array("Who sentenced Jesus to death?", "Pilate", "Nebuchadnezaar", "Julius Caesar", "David", 1),
    new Array("Which item of the armour is a symbol of truth?", "Belt", "Shield", "Helmet", "Sword", 1),
    new Array("What is the name of this camp?", "Camp Set Apart", "Camp Withstand", "Camp Stand Firm", "Camp Stand Up", 2),
    new Array("Who was holding the flag just now during the briefing?", "Darryl", "Zech", "Don", "Alicia", 3),
    new Array("Eleazar fought until the sword ___", "slipped out of his hand", "flew out from his hand", "broke in his hand", "clung to his hand", 4)
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
