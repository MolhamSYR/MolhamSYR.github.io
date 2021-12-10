


function sub() {
   
    let firstNum = document.getElementById("firstNum").value;
    let secondNum = document.getElementById("secondNum").value;
    let result = "";
    
    result = firstNum - secondNum;
    document.getElementById("result").value = result;


   




}

function sum() {

    let firstNum = document.getElementById("firstNum").value;
    let secondNum = document.getElementById("secondNum").value;
    let result = "";

    result = firstNum + secondNum;
    document.getElementById("result").value = result;


}

function divide() {

    let firstNum = document.getElementById("firstNum").value;
    let secondNum = document.getElementById("secondNum").value;
    let result = "";

    result = firstNum / secondNum;
    document.getElementById("result").value = result;

}

function multiply() {

    let firstNum = document.getElementById("firstNum").value;
    let secondNum = document.getElementById("secondNum").value;
    let result = "";

    result = firstNum * secondNum;
    document.getElementById("result").value = result;

}

function clearBox() {

    document.getElementById("firstNum").value = "";
    document.getElementById("secondNum").value = "";
    document.getElementById("result").value = "";
}


/* if(!( (typeof num1 === 'number') && (typeof num2 === 'number'))) {

        window.alert("Please Enter Numbers in both Sections");

    } */