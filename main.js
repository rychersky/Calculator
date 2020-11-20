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
const bAdd = document.querySelector('.add');
const bSubtract = document.querySelector('.subtract');
const bMultiply = document.querySelector('.multiply');
const dDivide = document.querySelector('.divide');
const bEquals = document.querySelector('.equals');
const bC = document.querySelector('.c');
const bCE = document.querySelector('.ce');

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

bC.addEventListener('click', () => {
  botText.length = 0;
  dBottom.textContent = '';
  topText.length = 0;
  dTop.textContent = '';
});

bCE.addEventListener('click', () => {
  botText.textContent = 0;
  dBottom.textContent = '';
});

function add(n1, n2) {return n1+n2};
function subtract(n1, n2) {return n1-n2};
function multiply(n1, n2) {return n1*n2};
function divide(n1, n2) {return n1/n2};

function operate(n1, operator, n2) {
  switch(operator) {
    case '+': return add(n1, n2);
    case '-': return add(n1, n2);
    case '*': return multiply(n1, n2);
    case '/': return divide(n1, n2);
  }
}

function numClick(input) {
  botText.push(input);
  dBottom.textContent = botText.join('');
}

function operClick(oper) {
  if (botText.length > 0) {
    
  }
}