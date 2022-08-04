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
    range = 'Obesidade grau III'
  } else if (imc >= 35) {
    range = 'Obesidade grau II'
  } else if (imc >= 30) {
    range = 'Obesidade grau I'
  } else if (imc >= 25) {
    range = 'Acima do peso'
  } else if (imc >= 18.5) {
    range = 'Peso normal'
  } else if (imc >= 17) {
    range = 'Abaixo do peso'
  } else if (imc >= 16) {
    range = 'Obesidade grau II'
  } else if (imc >= 35) {
    range = 'Obesidade grau II'
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

  imcResult.textContent = formattedImc;
}

start();
