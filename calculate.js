//variables
var firstNumBool = true; //true = first number, false = second number
var operatorPlus = true; //true = plus, false = minus
var firstNumber = 0;
var secondNumber = 0;
var ergebnis;

//buttons
var button1 = document.getElementById('num1');
button1.addEventListener('click', () => firstOrSecondNum(1));

var button2 = document.getElementById('num2');
button2.addEventListener('click', () => firstOrSecondNum(2));

var button3 = document.getElementById('num3');
button3.addEventListener('click', () => firstOrSecondNum(3));

var button4 = document.getElementById('num4');
button4.addEventListener('click', () => firstOrSecondNum(4));

var button5 = document.getElementById('num5');
button5.addEventListener('click', () => firstOrSecondNum(5));

var button6 = document.getElementById('num6');
button6.addEventListener('click', () => firstOrSecondNum(6));

var button7 = document.getElementById('num7');
button7.addEventListener('click', () => firstOrSecondNum(7));

var button8 = document.getElementById('num8');
button8.addEventListener('click', () => firstOrSecondNum(8));

var button9 = document.getElementById('num9');
button9.addEventListener('click', () => firstOrSecondNum(9));

var button0 = document.getElementById('num0');
button0.addEventListener('click', () => firstOrSecondNum(0));

var buttonPlus = document.getElementById('buttonPlus');
buttonPlus.addEventListener('click', function() {
    firstNumBool = false;
    operatorPlus = true;
    document.getElementsByTagName('p')[0].innerHTML = (firstNumber + ' +');

});

var buttonMinus = document.getElementById('buttonMinus');
buttonMinus.addEventListener('click', function() {
    firstNumBool = false;
    operatorPlus = false;
    document.getElementsByTagName('p')[0].innerHTML = (firstNumber + ' -');
});

var buttonEqual = document.getElementById('buttonEqual');
buttonEqual.addEventListener('click', calculate)

/***
 * decides which number is entered
 */
function firstOrSecondNum(num){
    if(firstNumBool){
        setFirstNum(num);
    } else {
        setSecondNum(num);
    }
}

/**
 * sets first number
 * @param num 
 */
function setFirstNum(num){
    firstNumber = firstNumber * 10 + num;
    document.getElementsByTagName('p')[0].innerHTML = firstNumber;
}

/**
 * sets second number
 * @param num 
 */
function setSecondNum(num){
    secondNumber = secondNumber * 10 + num;
    if(operatorPlus){
        document.getElementsByTagName('p')[0].innerHTML = (firstNumber + ' + ' + secondNumber);
    } else {
        document.getElementsByTagName('p')[0].innerHTML = (firstNumber + ' + ' + secondNumber);
    }

}

/**
 * sums up or subtracts numbers
 */
function calculate(){
    if(operatorPlus){
        ergebnis = firstNumber + secondNumber;
    } else {
        ergebnis = firstNumber - secondNumber;
    }
    document.getElementsByTagName('p')[0].innerHTML = ergebnis;
    reset();
}

/**
 * resets calculator to default
 */
function reset(){
    firstNumber = 0;
    secondNumber = 0;
    firstNumBool = true;
    operatorPlus = true;
    ergebnis = 0;
}