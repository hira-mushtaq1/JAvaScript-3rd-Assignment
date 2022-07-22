/* step:1  UI
step:2  get button value as input 
step:3  perform calculation
step:4  show calculated values */

var screen=document.getElementById("screen")
var isCalculated;
function clearAll(){
    screen.value=""
}
function getBtnValue(val){
    if(isCalculated && typeof val!="string"){
    clearAll()}
    screen.value+=val;
    isCalculated=false;
//    console.log(val)
}

function calculate(){
isCalculated=true
var val=screen.value;
var finalStrng=eval(val)
screen.value=finalStrng;

}

