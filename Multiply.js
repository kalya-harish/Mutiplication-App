const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);

const questionEl=document.getElementById("question");
const formEl=document.getElementById("form");
const inputEl=document.getElementById("input");
const scoreEl=document.getElementById("score");

let score=JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0
}
scoreEl.innerText=`score: ${score}`;
questionEl.innerText=`What is ${num1} mutiply by ${num2}?`;
const CorrectAns=num1*num2;
formEl.addEventListener("submit", ()=>{
    const UserAns=+inputEl.value;
    if(UserAns===CorrectAns){
        score++;
        UpdateLocalStorage()
    }
    else{
        score--;
        UpdateLocalStorage()
    }
})
function UpdateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}



