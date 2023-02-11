import myJson from './game.json' assert {type: 'json'}


const _ = (string) => document.querySelector(string)
const __ = (string) => document.querySelectorAll(string)

const scores = document.querySelector('.scorenumber');
// const dataValue = parseInt(scores.getAttribute('data-value'));
let score = 0;

// const outBox = __('.outBox');
const youwin = document.querySelector('.youwin h1');
const rules = _('.rulesbutton');
const ruleBox = _('.rulesBox');
const close = _('.closebutton');
// const Optionbtns = __('.cr');

const optBtns = __(".opt");
const triggerMain = _("#trigger")
const choiceScreen = _("#choice")
const selectedChoiceImg = _("#selectedChoice")
const computerChoice = _('#cpuChoice')
const yourPicksec = _("#yourpickSec")
const cpuPicksec = _("#cpupickSec")
const playAgainBox = _(".playAgainBox")



// //for buttons
rules.addEventListener('click', ()=>{
    ruleBox.classList.toggle("add")
})
close.addEventListener('click', ()=>{
    ruleBox.classList.toggle("add")
})




const cpuChoice = (tr)=> {
    
   let randChoice = myJson.images[Math.floor(Math.random() * myJson.images.length)]
   
   if (tr === 'paper'){
    if (randChoice.paper){
        computerChoice.src = randChoice.paper.url
        youwin.textContent = 'DRAW';
        cpuPicksec.classList.remove('scissors');
        cpuPicksec.classList.remove('rock');
        cpuPicksec.classList.add('paper');
    }
    else if(randChoice.scissors){
        computerChoice.src = randChoice.scissors.url
        cpuPicksec.classList.remove('paper');
        cpuPicksec.classList.remove('rock');
        cpuPicksec.classList.add('scissors');
        youwin.textContent = 'YOU LOSE';
        score = score - 1; 
        scores.textContent = score
    }
    else {
        computerChoice.src = randChoice.rock.url
        cpuPicksec.classList.remove('paper');
        cpuPicksec.classList.remove('scissors');
        cpuPicksec.classList.add('rock');
        youwin.textContent = 'YOU WIN';
        score = score + 1; 
        scores.textContent = score;
    }
   
   }
   if (tr === 'rock'){
    if (randChoice.paper){
        computerChoice.src = randChoice.paper.url;
        cpuPicksec.classList.remove('rock');
        cpuPicksec.classList.remove('scissors');
        cpuPicksec.classList.add('paper');
        youwin.textContent = 'YOU LOSE';
        score = score - 1; 
        scores.textContent = score
    }
    else if(randChoice.scissors){
        computerChoice.src = randChoice.scissors.url
        cpuPicksec.classList.remove('paper');
        cpuPicksec.classList.remove('rock');
        cpuPicksec.classList.add('scissors');
        youwin.textContent = 'YOU WIN';
        score = score + 1; 
        scores.textContent = score;
    }
    else {
        computerChoice.src = randChoice.rock.url
        cpuPicksec.classList.remove('paper');
        cpuPicksec.classList.remove('scissors');
        cpuPicksec.classList.add('rock');
        youwin.textContent = 'DRAW';
    }
   }
   if (tr === 'scissors'){
    if (randChoice.paper){
        computerChoice.src = randChoice.paper.url
        cpuPicksec.classList.remove('rock');
        cpuPicksec.classList.remove('scissors');
        cpuPicksec.classList.add('paper');
        youwin.textContent = 'YOU WIN';
        score = score + 1; 
        scores.textContent = score;
    }
    else if(randChoice.scissors){
        computerChoice.src = randChoice.scissors.url
        cpuPicksec.classList.remove('paper');
        cpuPicksec.classList.remove('rock');
        cpuPicksec.classList.add('scissors');
        youwin.textContent = 'DRAW';
    }
    else {
        computerChoice.src = randChoice.rock.url
        cpuPicksec.classList.remove('paper');
        cpuPicksec.classList.remove('scissors');
        cpuPicksec.classList.add('rock');
        youwin.textContent = 'YOU LOSE';
        score = score - 1; 
        scores.textContent = score
    }
   } 
}

const trigger = (e)=> {
    const triggerType = e.currentTarget.classList[1]
    
    if(triggerType === 'scissors'){
        yourPicksec.classList.remove('paper');
        yourPicksec.classList.remove('rock');
        yourPicksec.classList.add('scissors');
    }
    else if(triggerType === 'rock'){
        yourPicksec.classList.remove('paper');
        yourPicksec.classList.remove('scissors');
        yourPicksec.classList.add('rock');
    }
    else{
        yourPicksec.classList.remove('rock');
        yourPicksec.classList.remove('scissors');
        yourPicksec.classList.add('paper');
    }
    
    let url = '';
    
    const selected = myJson.images.find((elem)=> {
        for(let key in elem){
         if(triggerType === key) {
             const value = elem[key]
              url =  value.url
            selectedChoiceImg.src = url
         }else{
            return
         }
        }
    })

     
    triggerMain.classList.add('active')
    choiceScreen.classList.add('active')
    cpuChoice(triggerType)
}

[...optBtns].forEach((option)=> {
    option.addEventListener('click',trigger)
})

playAgainBox.addEventListener('click', ()=>{
    triggerMain.classList.remove('active')
    choiceScreen.classList.remove('active')
})
