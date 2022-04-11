window.addEventListener('load',init);

let score=0;
let isPlay;

//DOM Element
const wordInput=document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const hightestScore = document.querySelector('#hightestScore')
const  myLevel=document.getElementsByName('flexRadioDefault').value;


let time=30;






const words = [
        'hat',
        'river',
        'moon',
        'jasush',
        'sun',
        'rose',
        'echo',
        'magic',
];

//Intialize Game
function init(){
    // if(myLevel == "Easy")
    //     time=300;
    // else if(myLevel == "Medium")
    //     time=60;
    // else if(myLevel == "Hard") 
    //     time=90;
    //Show number of seconds in UI
    seconds.innerHTML = time;
    //Load word from array
    showWord(words);
    //Strat matching on word input
    wordInput.addEventListener('input',stratMatch);
    //Call countdown every second
    setInterval(countDown, 1000);
    //Check game status
    setInterval(checkStatus, 5);
}


//startwatch
function stratMatch(){
    if(matchWords()){
        isPlay=true;
        // time=currentLevel+1;
        showWord(words);
        wordInput.value='';
        score++;
    }

   
    //Highscore based on score value for Session Storage
    // if(typeof sessionStorage['highscore'] === 'undefined' || score > sessionStorage['highscore']){
    //     sessionStorage['highscore']=score;
    // }
    // else{
    //     sessionStorage['highscore'] = sessionStorage['highscore'];
    // }

    //Prevent display of High Score: -1
    // if(sessionStorage['highscore']>=0){
        // hightestScore.innerHTML = sessionStorage['highscore'];
    // }

    //If score is -1, display 0
    if(score === -1)
        scoreDisplay.innerHTML =0;
    else
        scoreDisplay.innerHTML=score;    
}

//Match currenWord to wordInput
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'correct';
        return true;
    }
    else{
        message.innerHTML = 'wrong';
        return false;
    }
}

//Pich & Show random word
function showWord(words){
    //Generate random array index
    const randInd =Math.floor(Math.random()*words.length);
    //Output random word
    currentWord.innerHTML=words[randInd];
}

function countDown(){
    //Make sure time is not run out 
    if(time>0){
        time--;
    }
    else if(time==0){
        //Game is over
        isPlay=false
    }

    //Show time
    timeDisplay.innerHTML=time;
    
}

function checkStatus(){
    if(!isPlay && time ==0){
        message.innerHTML='Game Over!!'
        score=-1;
    }
}