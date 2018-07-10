let runningTotal= 0;
let buffer = "0";
let previousOperator;

document.querySelector('.calc-button').addEventListener('click',function(event){
 buttonClick(event.target.value);
})
function buttonClick(value){
    if(isNaN(parseInt(value))){
 handleSymble(value);
    }else{
    handleNumber(value);
    }
}

function handleNumber(value){
 if (buffer === 0 ){
     buffer = value;
 }else{
     buffer += value;
 }
}

function handleSymble(value){

}