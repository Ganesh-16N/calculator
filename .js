// result board to show the value
function dis(val){
    document.getElementById("result").value+=val
}

// functionto eval the value
function solve(){
    let x = document.getElementById("result").value
    let y = eval(x);
    document.getElementById("result").value=y;
}
// functionn to clear the result
function clr(){
    document.getElementById("result").value =" ";
}
