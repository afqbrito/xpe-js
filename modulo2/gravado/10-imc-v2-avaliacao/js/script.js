function start() {
  var btnCalculateImc = document.querySelector('#button-calculate-imc');
  btnCalculateImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function determineRange(imc) {
  var range = 'inválido';

  if (imc > 40) {
    // acima de 40,0
    range = 'Obesidade grau III';
  } else if (imc >= 35) {
    // entre 35,0 e 40,0
    range = 'Obesidade grau II';
  } else if (imc >= 30) {
    // entre 30,0 e 34,9
    range = 'Obesidade grau I';
  } else if (imc >= 25) {
    // entre 25,0 e 29,9
    range = 'Acima do peso';
  } else if (imc >= 18.5) {
    // entre 18,5 e 24,9
    range = 'Peso normal';
  } else if (imc >= 17) {
    // entre 17,0 e 18,4
    range = 'Abaixo do peso';
  } else if (imc >= 16) {
    // entre 16,0 e 16,9
    range = 'Muito abaixo do peso';
  }

  return range;
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  var rangeResult = document.querySelector('#range-result');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  var range = determineRange(imc);

  imcResult.textContent = formattedImc;
  rangeResult.textContent = range;
}

start();
