var a = parseInt( prompt("enter a first number"));
var b = parseInt(prompt("Enter a second number"));
// if(a>b)
// {
//     console.log("a is greater");
// }
// else{
//     console.log("b is greater");
// }
var op =  prompt("enter the operator");
switch(op){

    case '+' :document.getElementById("result").textContent=(a+b); break;
    case '-' :document.getElementById("result").textContent=(a-b); break;
    case '*' :document.getElementById("result").textContent=(a*b); break;
    case '/' :document.getElementById("result").textContent=(a/b); break;
}
