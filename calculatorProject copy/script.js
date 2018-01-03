var integers = '';
var action;

function render(ele) {
    var element = ele.id;
    
    if(element =='zero') {
        integers+= '0';
        updateDisplay('0');
    } else if(element == 'one') {
        integers+= '1';
        updateDisplay('1');
    } else if( element == 'two') {
        integers+= '2';
        updateDisplay('2');
    } else if( element == 'three') {
        integers+= '3';
        updateDisplay('3');
    } else if( element == 'four') {
        integers+= '4';
        updateDisplay('4');
    } else if( element == 'five') {
        integers+= '5';
        updateDisplay('5');
    } else if( element == 'six') {
        integers+= '6';
        updateDisplay('6');
    } else if( element == 'seven') {
        integers+= '7';
        updateDisplay('7');
    } else if( element == 'eight') {
        integers+= '8';
        updateDisplay('8');
    } else if( element == 'nine') {
        integers+= '9';
        updateDisplay('9');
    } else if( element == 'add') {
        integers+= '+';
        updateDisplay('+');
        action = '+';
    } else if( element == 'subtract') {
        integers+= '-';
        updateDisplay('-');
        action = '-';
    } else if( element == 'multiply') {
        integers+= '*';
        updateDisplay('*');
        action = '*';
    } else if( element == 'divide') {
        integers+= '/';
        updateDisplay('/');
        action = '/';
    } else if( element == 'clear') {
        clear();
    }
    
    
}
function calculate() {
    var tempArr;
    if(action == '+') {
        tempArr = integers.split('+');
        integers = Number(tempArr[0]) + Number(tempArr[1]);
        answer.innerHTML = integers;
    } else if(action == '-') {
        tempArr = integers.split('-');
        integers = Number(tempArr[0]) - Number(tempArr[1]);
        answer.innerHTML = integers;
    } else if(action == '*') {
        tempArr = integers.split('*');
        integers = Number(tempArr[0]) * Number(tempArr[1]);
        answer.innerHTML = integers;
    } else if(action == '/') {
        tempArr = integers.split('/');
        integers = Number(tempArr[0]) / Number(tempArr[1]);
        answer.innerHTML = integers;
    }
}

function updateDisplay(val) {
    var answer = document.querySelector('#answer');
    answer.innerHTML += val;
}

function clear(ele) {
    var answer = document.querySelector('#answer');
    answer.innerHTML = '';
}
