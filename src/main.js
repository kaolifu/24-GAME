const inputElements = document.querySelectorAll('.input');
const btn = document.getElementById('btn');
let inputNums = [];
btn.addEventListener('click', () => {
  inputNums = [];
  inputElements.forEach(inputElement => {
    if(!Number(inputElement.value)){
      alert('正確な数字を出してください');
    }
    inputNums.push(Number(inputElement.value));
    inputElement.value='';
  });
  console.log(inputNums);
  const results = [];
  appicate(results);
  resultsRelease(results);
});

function appicate(results) {
  let n = [...inputNums];
  let nBackup0 = [...n];
  let nBackup1;
  let nBackup2;
  const ns = [];
  let n0;
  let n1;
  let n2;
  let n3;

  for (let i = 0; i < n.length; i++) {
    n0 = n.splice(i, 1)[0];
    nBackup1 = [...n];
    for (let i = 0; i < n.length; i++) {
      n1 = n.splice(i, 1)[0];
      nBackup2 = [...n];
      for (let i = 0; i < n.length; i++) {
        n2 = n.splice(i, 1)[0];
        for (let i = 0; i < n.length; i++) {
          n3 = n.splice(0, 1)[0];
          ns.push([n0, n1, n2, n3]);
        }
        n = [...nBackup2];
      }
      n = [...nBackup1];
    }
    n = [...nBackup0];
  }
  // console.table(ns);

  const calculate = [plus, minus, multiple, divide];
  function plus(a, b) {
    return a + b;
  }
  function minus(a, b) {
    return a - b;
  }
  function multiple(a, b) {
    return a * b;
  }
  function divide(a, b) {
    return a / b;
  }

  //(a+b)+(c+d)
  const calculateOrder0 = (a, b, c, d, i, j, k) => {
    return calculate[i](calculate[k](a, b), calculate[j](c, d));
  }
  //((a+b)+c)+d
  const calculateOrder1 = (a, b, c, d, i, j, k) => {
    return calculate[i](calculate[j](calculate[k](a, b), c), d);
  }
  //((a+b)+d)+c
  const calculateOrder2 = (a, b, c, d, i, j, k) => {
    return calculate[i](calculate[j](calculate[k](a, b), d), c);
  }
  //(a+(b+c))+d
  const calculateOrder3 = (a, b, c, d, i, j, k) => {
    return calculate[i](calculate[j](a, calculate[k](b, c)), d);
  }
  //a+((b+c)+d)
  const calculateOrder4 = (a, b, c, d, i, j, k) => {
    return calculate[i](a, calculate[j](calculate[k](b, c), d));
  }
  //a+(b+(c+d))
  const calculateOrder5 = (a, b, c, d, i, j, k) => {
    return calculate[i](a, calculate[j](b, calculate[k](c, d)));
  }
  //b+(a+(c+d))
  const calculateOrder6 = (a, b, c, d, i, j, k) => {
    return calculate[i](b, calculate[j](a, calculate[k](c, d)));
  }
  const calculateOrder = [
    calculateOrder0,
    calculateOrder1,
    calculateOrder2,
    calculateOrder3,
    calculateOrder4,
    calculateOrder5,
    calculateOrder6,
  ];


  let result;
  ns.forEach(n => {
    for (let l = 0; l < calculateOrder.length; l++) {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          for (let k = 0; k < 4; k++) {
            result = calculateOrder[l](n[0], n[1], n[2], n[3], i, j, k);

            if (result === 10) {
              results.push([n[0], n[1], n[2], n[3], l, i, j, k])
            }
          }
        }
      }
    }
  });
}

function resultsRelease(results) {
  const resultGroup=document.getElementById('results');
  while (resultGroup.firstChild){
    resultGroup.removeChild(resultGroup.firstChild);
  }

  const resultsLength = document.createElement('p');
  resultsLength.textContent = `結果数:${results.length}`;
  resultsLength.classList.add('result');
  resultGroup.appendChild(resultsLength);

  for (let i = 0; i < results.length; i++) {
    const result = document.createElement('p');
    result.textContent = `結果${i + 1}: ${resultText(results[i])}`;
    result.classList.add('result');

    resultGroup.appendChild(result);
  }
  document.getElementById('container').appendChild(resultGroup);
}

function resultText([a, b, c, d,l, i, j, k]) {
  // ${calReverse(i)}
  // ${calReverse(j)}
  // ${calReverse(k)}
  if(l===0){
    return `( ${a}${calReverse(k)}${b} )${calReverse(i)}( ${c}${calReverse(j)}${d} ) = 10 ;`;
  }
  if(l===1){
    return `( (${a}${calReverse(k)}${b} )${calReverse(j)}${c} )${calReverse(i)}${d} ) = 10 ;`;
  }
  if(l===2){
    return `(( ${a}${calReverse(k)}${b} )${calReverse(j)}${d} )${calReverse(k)}${c} ) = 10 ;`;
  }
  if(l===3){
    return `( ${a}${calReverse(j)}( ${b}${calReverse(k)}${c} ) )${calReverse(i)}${d} = 10 ;`;
  }
  if(l===4){
    return `${a}${calReverse(i)}( ( ${b}${calReverse(k)}${c} )${calReverse(j)}${d} ) = 10 ;`;
  }
  if(l===5){
    return `${a}${calReverse(i)}( ${b}${calReverse(j)}( ${c}${calReverse(k)}${d} ) ) = 10 ;`;
  }
  if(l===6){
    return `${b}${calReverse(i)}( ${a}${calReverse(j)}( ${c}${calReverse(k)}${d} ) ) = 10 ;`;
  }
}

function calReverse(e){
  if(e===0){
    return ' + ';
  }else if(e===1){
    return ' - ';
  }else if(e===2){
    return ' × ';
  }else if(e===3){
    return ' ÷ ';
  }
}
