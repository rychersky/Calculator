'use strict';
const dTop = document.querySelector('.top');
const dBottom = document.querySelector('.bottom');
const b1 = document.querySelector('.n1');
const b2 = document.querySelector('.n2');
const b3 = document.querySelector('.n3');
const b4 = document.querySelector('.n4');
const b5 = document.querySelector('.n5');
const b6 = document.querySelector('.n6');
const b7 = document.querySelector('.n7');
const b8 = document.querySelector('.n8');
const b9 = document.querySelector('.n9');
const b0 = document.querySelector('.n0');
const dec = document.querySelector('.decimal');
const bAdd = document.querySelector('.add');
const bSubtract = document.querySelector('.subtract');
const bMultiply = document.querySelector('.multiply');
const bDivide = document.querySelector('.divide');
const bEquals = document.querySelector('.equals');
const bC = document.querySelector('.c');
const bCE = document.querySelector('.ce');
const bBack = document.querySelector('.back');

const botText = [];
const topText = [];

b1.addEventListener('click', () => numClick('1'));
b2.addEventListener('click', () => numClick('2'));
b3.addEventListener('click', () => numClick('3'));
b4.addEventListener('click', () => numClick('4'));
b5.addEventListener('click', () => numClick('5'));
b6.addEventListener('click', () => numClick('6'));
b7.addEventListener('click', () => numClick('7'));
b8.addEventListener('click', () => numClick('8'));
b9.addEventListener('click', () => numClick('9'));
b0.addEventListener('click', () => numClick('0'));
bAdd.addEventListener('click', () => operClick('+'));
bSubtract.addEventListener('click', () => operClick('-'));
bMultiply.addEventListener('click', () => operClick('*'));
bDivide.addEventListener('click', () => operClick('/'));
bEquals.addEventListener('click', equals);
bBack.addEventListener('click', back);
dec.addEventListener('click', decimal);

bC.addEventListener('click', () => {
  botText.length = 0;
  dBottom.textContent = '';
  topText.length = 0;
  dTop.textContent = '';
});

bCE.addEventListener('click', () => {
  botText.length = 0;
  dBottom.textContent = '';
});

document.addEventListener('keydown', event => {
  if (/^[0-9]$/.test(event.key)) numClick(event.key);
  else if (/[-+*\/]/.test(event.key)) operClick(event.key);
  else if (event.key === 'Backspace') back();
  else if (event.key === 'Enter') equals();
  else if (event.key === '.') decimal();
});

function add(n1, n2) {return n1+n2};
function subtract(n1, n2) {return n1-n2};
function multiply(n1, n2) {return n1*n2};
function divide(n1, n2) {return n1/n2};

function back() {
  botText.pop();
  dBottom.textContent = botText.join('');
}

function decimal() {
  if (!botText.includes('.')) {
    botText.push('.');
    dBottom.textContent = botText.join('');
  }
}

function equals() {
  if (topText[1] === '/' && botText.length > 0 && +botText.join('') === 0) {
    alert('You cannot divide by zero. Please change your input.')
    botText.length = 0;
    dBottom.textContent = '';
    return;
  }

  if (topText.length === 2 && botText.length > 0) {
    const answer = operate(+topText[0], topText[1], +botText.join('')).toString();
    topText.length = 0;
    dTop.textContent = '';
    botText.length = 0;
    [...answer].forEach(digit => botText.push(digit));
    dBottom.textContent = answer;
  }
}

function numClick(input) {
  botText.push(input);
  dBottom.textContent = botText.join('');
}

function operate(n1, operator, n2) {
  switch(operator) {
    case '+': return add(n1, n2);
    case '-': return subtract(n1, n2);
    case '*': return multiply(n1, n2);
    case '/': return divide(n1, n2);
  }
}

function operClick(oper) {
  if (topText[1] === '/' && botText.length > 0 && +botText.join('') === 0) {
    alert('You cannot divide by zero. Please change your input.')
    botText.length = 0;
    dBottom.textContent = '';
    return;
  }
  
  if (botText.length > 0 && topText.length === 0) {
    topText.push(botText.join(''));
    topText.push(oper);
    dTop.textContent = topText.join(' ');
    botText.length = 0;
    dBottom.textContent = '';
  } 
  else if (botText.length === 0 && topText.length > 0) {
    topText[1] = oper;
    dTop.textContent = topText.join(' ');
  } 
  else if (botText.length > 0 && topText.length === 2) {
    const answer = operate(+topText[0], topText[1], +botText.join('')).toString();
    topText.length = 0;
    topText.push(answer);
    topText.push(oper);
    dTop.textContent = topText.join(' ');
    botText.length = 0;
    dBottom.textContent = '';
  }
}