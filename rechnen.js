//alert('Test!');
var ersteZahlGesetzt = true; //true = erste Zahl, false = zweite Zahl
var operatorPlus = true; //true = Plus, false = minus


var ersteZahl = 0;
var zweiteZahl = 0;
var ergebnis;

var button1 = document.getElementById('zahl1');
button1.addEventListener('click', () => ersteOderZweiteZahl(1));

var button2 = document.getElementById('zahl2');
button2.addEventListener('click', () => ersteOderZweiteZahl(2));

var button3 = document.getElementById('zahl3');
button3.addEventListener('click', () => ersteOderZweiteZahl(3));

var button4 = document.getElementById('zahl4');
button4.addEventListener('click', () => ersteOderZweiteZahl(4));

var button5 = document.getElementById('zahl5');
button5.addEventListener('click', () => ersteOderZweiteZahl(5));

var button6 = document.getElementById('zahl6');
button6.addEventListener('click', () => ersteOderZweiteZahl(6));

var button7 = document.getElementById('zahl7');
button7.addEventListener('click', () => ersteOderZweiteZahl(7));

var button8 = document.getElementById('zahl8');
button8.addEventListener('click', () => ersteOderZweiteZahl(8));

var button9 = document.getElementById('zahl9');
button9.addEventListener('click', () => ersteOderZweiteZahl(9));

var button0 = document.getElementById('zahl0');
button0.addEventListener('click', () => ersteOderZweiteZahl(0));

var buttonPlus = document.getElementById('buttonPlus');
buttonPlus.addEventListener('click', function() {
    ersteZahlGesetzt = false;
    operatorPlus = true;
    console.log('Plus wurde gedrückt.')
    document.getElementsByTagName('p')[0].innerHTML = (ersteZahl + ' +');

});

var buttonMinus = document.getElementById('buttonMinus');
buttonMinus.addEventListener('click', function() {
    ersteZahlGesetzt = false;
    operatorPlus = false;
    //console.log('Minus wurde gedrückt.')
    document.getElementsByTagName('p')[0].innerHTML = (ersteZahl + ' -');
});

var buttonGleich = document.getElementById('buttonGleich');
buttonGleich.addEventListener('click', berechne)

function ersteOderZweiteZahl(num){
    if(ersteZahlGesetzt){
        setErsteZahl(num);
    } else {
        setZweiteZahl(num);
    }
}

function setErsteZahl(num){
    ersteZahl = ersteZahl * 10 + num;
    //console.log('Erste Zahl ist: ' + ersteZahl);
    document.getElementsByTagName('p')[0].innerHTML = ersteZahl;
}

function setZweiteZahl(num){
    zweiteZahl = zweiteZahl * 10 + num;
    //console.log('Zweite Zahl ist: ' + zweiteZahl);
    if(operatorPlus){
        document.getElementsByTagName('p')[0].innerHTML = (ersteZahl + ' + ' + zweiteZahl);
    } else {
        document.getElementsByTagName('p')[0].innerHTML = (ersteZahl + ' + ' + zweiteZahl);
    }

}


function berechne(){
    if(operatorPlus){
        ergebnis = ersteZahl + zweiteZahl;
    } else {
        ergebnis = ersteZahl - zweiteZahl;
    }
    document.getElementsByTagName('p')[0].innerHTML = ergebnis;
    //console.log(ergebnis)
    zuruecksetzen();
}

function zuruecksetzen(){
    ersteZahl = 0;
    zweiteZahl = 0;
    ersteZahlGesetzt = true;
    operatorPlus = true;
    ergebnis = 0;
}