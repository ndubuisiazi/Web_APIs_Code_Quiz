// defining questions object
let questions = {
    "Quesiton 1": {"question": "1: Which of the following is correct about CSS?","Answer":"OptionC","Choices":[" A - JavaScript is is complementary to and integrated with HTML.", "B - JavaScript is open and cross-platform.", "C - Both of the above.", "D - All of the above."]},
   
    "Quesiton 2": {"question": "2: Which of the following is correct about callbacks?","Answer":"OptionC","Choices":["A - A callback is a plain JavaScript function passed to some method as an argument or option.","B - Some callbacks are just events, called to give the user a chance to react when a certain state is triggered.", "C - Both of the above.","D - None of the above."]},
    "Quesiton 3": {"question": "3: Which built-in method returns the string representation of the number's value?","Answer":"OptionB","Choices":["A - toNumber()","B - toString()", "C - toValue()", "D - None of the above."]},
    "Quesiton 4": {"question": "4: Which of the following function of Array object extracts a section of an array and returns a new array?","Answer":"OptionA","Choices":["A - slice()","B - reverse()", "C - shift()", "D - some()"]},
    "Quesiton 5": {"question": "5: Which of the following function of Boolean object returns a string of either 'true' or 'false' depending upon the value of the object?","Answer":"OptionC","Choices":["A - toSource()","B - toString()", "C - valueOf()", "D - None of the above."]},
    "Quesiton 6": {"question": "6: Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?","Answer":"OptionB","Choices":["A - slice()","B - split()", "C - replace()", "D - search()"]},
    "Quesiton 7": {"question": "7: Which of the following function of Array object creates a new array with all of the elements of this array for which the provided filtering function returns true?","Answer":"OptionC","Choices":["A - concat()","B - every()", "C - filter()", "D - some()"]},
    "Quesiton 8": {"question": "8: Which type of language is Javascript","Answer":"OptionA","Choices":["Programming","Scripting", "Markup", "None of the above"]},
    "Quesiton 9": {"question": "9: Which tag is used to write the javascript code","Answer":"OptionA","Choices":["<script>","<sp>", "<javascript>", "<java>"]},
    "Quesiton 10": {"question": "10: Which of the following function of Array object removes the last element from an array and returns that element? ","Answer":"OptionC","Choices":["push()","delete()", "pop()", "link()"]},
}


// Setting DOM variable elements
let question =document.getElementById("questions")
let startbtn = document.getElementById("startbtn")
let multipleChoiceA = document.getElementById("lableA")
let multipleChoiceB = document.getElementById("lableB")
let multipleChoiceC = document.getElementById("lableC")
let multipleChoiceD = document.getElementById("lableD")
let questionNumber = 0
let highScore =""
let player =""
let playerScore =""
let timer = 60*15
let nextPageTime= 3
let startTimer = ""
let answers = document.getElementsByName("multipleChoice")
let results = []
let saveScores={}
nextPage=""

// Event listeners 
startbtn.addEventListener("click", startquiz)
document.getElementById("submitbtn").addEventListener("click",answersResult)

function kickoff() {
    if(timer >= 0 && results.length<=9){ console.log(results.length) 
        let ticktock =document.getElementById("clock").innerText= convertsec( timer--)}else{
            clearInterval(startTimer)
            document.getElementById("gameOver").style.display="flex";
    }}

function nextPageInterval() {
        if( nextPageTime<=0 ){
            clearInterval(nextPage)
            nextQuestion()
            // clearInterval(self)
        } else{
            nextPageTime--
            console.log(nextPageTime)
        }}

function questionNum(){
    if(questionNumber===10){
        questionNumber = 0
    } else {questionNumber ++}
    }

function answersResult(){if(results.length>8){  
    answers.forEach(radio => {
        if(radio.checked){
           let validate = radio.value
           let questionAnswer =Object.values(questions)[questionNumber].Answer
        if(validate === questionAnswer){results.push(true)
            document.getElementById("result").innerText= "Correct "
        }
        
               else {results.push(false)}
                   document.getElementById("result").innerText= "Incorrect"
               
               console.log("right option")
               console.log(results)

        
            }
        document.getElementById("gameOver").style.display="flex";
        playerScore = filtered.length*10
        console.log(playerScore)
        document.getElementById("finalScore").innerText="FINAL SCORE: "+(filtered.length)*10+" points"})
}else{
    answers.forEach(radio => {
        if(radio.checked){
           let validate = radio.value
           let questionAnswer =Object.values(questions)[questionNumber].Answer
           if(validate === questionAnswer){
            document.getElementById("result").innerText= "Correct "}
               else {
                document.getElementById("result").innerText= "Incorrect"
            timer-=60}
                nextPage = setInterval(nextPageInterval,100)

}})}}



function generateQuestion(){
        multipleChoiceA.innerText= Object.values(questions)[questionNumber].Choices[0]
        multipleChoiceB.innerText= Object.values(questions)[questionNumber].Choices[1]
        multipleChoiceC.innerText= Object.values(questions)[questionNumber].Choices[2]
        multipleChoiceD.innerText= Object.values(questions)[questionNumber].Choices[3]
        question.innerText = Object.values(questions)[questionNumber].question
    }
function nextQuestion(){
    answers.forEach(radio => {
        if(radio.checked){
           let validate = radio.value
           let questionAnswer =Object.values(questions)[questionNumber].Answer
           if(validate === questionAnswer){
               results.push(true)}
               else {
                   results.push(false)}
                   
           
        }
       
    })
    for(i=0; i<answers.length;i++){
        document.getElementsByName("multipleChoice")[i].checked=false
    }
    console.log(results)
    questionNum()
    if(results.length <= 10){generateQuestion()
        document.getElementById("result").innerText= ""
        nextPageTime= 3
        filtered =results.filter(function(value){
            return value ===true
        }) 
        document.getElementById("score").innerText=(filtered.length)*10+" points"}else{
            console.log("Game Over")
        }
    
}

function startquiz(){
    document.getElementById("start").style.display="None";
    document.getElementById("questions").style.display="grid";
    document.getElementById("answers").style.display="grid";
    document.getElementById("mainsectionwrapper").style.display="grid";
    document.getElementById("next").style.display="flex";
    document.getElementById("submitbtn").style.display="block";
    startbtn.style.display="None";
    startTimer = setInterval(kickoff,1000)
    generateQuestion()
}

function convertsec(s){
    var min = Math.floor(s/60);
    var sec = s % 60;
    return min +':'+ sec
}

document.getElementById("save").addEventListener("click",score)

function score(){
player = document.getElementById("name").value 
saveScores = Object.assign({},saveScores,{Player_name:player,Score:filtered.length*10+" points" })
console.log(filtered.length*10+" points")

document.getElementById("hof").innerText="Player Name: " +saveScores.Player_name+" Score: " +saveScores.Score
}




