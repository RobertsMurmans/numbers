function generateNumber(){
    num = Math.floor(Math.random()*100)+1
}
function checkAnswer(guess){
    if(guess==num){
        document.getElementById("out").innerHTML = "Correct!"
    }
    else{
        if(guess>num){
            document.getElementById("out").innerHTML = "Too big!"
        }
        else{
            document.getElementById("out").innerHTML = "Too small!"
        }
    }
}