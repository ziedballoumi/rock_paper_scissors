const choices=['rock','paper','scissors'];
document.getElementById('rock').addEventListener('click',() => playgame('rock'));
document.getElementById('paper').addEventListener('click',() => playgame('paper'));
document.getElementById('scissors').addEventListener('click', () => playgame('scissors'));
function playgame(userchoice){
   const computerchoice=choices[Math.floor(Math.random()*choices.length)];
   const p=document.getElementById('p');
   if(userchoice === computerchoice){
    p.innerText= `you picked ${userchoice},computer picked ${computerchoice}:tie!`;
   }
   if(userchoice==='rock' && computerchoice==='scissors'||
    userchoice==='paper' && computerchoice==='rock' ||
    userchoice==='scissors'&& computerchoice==='paper'){
        p.innerText=`you picked ${userchoice},computer picked ${computerchoice}:you win!`;
    }
    if(userchoice==='rock' && computerchoice==='paper'||
        userchoice==='paper' && computerchoice==='scissors' ||
        userchoice==='scissors'&& computerchoice==='rock'){
            p.innerText=`you picked ${userchoice},computer picked ${computerchoice}:you lose!`;
        }
}