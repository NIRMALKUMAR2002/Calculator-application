let result = document.getElementById("output");

function num(Number){
    // result.value += Number;  
    result.value = result.value+Number;
}
function equalto(){
    result.value  = eval(result.value);
}
function del(){
    result.value = result.value.slice(0,-1);
}
function Clear(){
    result.value = "";
}