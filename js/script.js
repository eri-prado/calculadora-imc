'use strict';

const imc = () => {
  const nome = document.querySelector('#nome').value;
  const altura = document.querySelector('#altura').value;
  const peso = document.querySelector('#peso').value;
  const calculo = (peso / (altura * altura)).toFixed(1);
  const resultado = document.querySelector('#resultado');

  if (nome !== '' && altura !== '' && peso !== '') {
    let classificacao = '';

    if (calculo < 18.5) {
      classificacao = 'abaixo do peso.';
    } else if (calculo < 25) {
      classificacao = 'com peso ideal. Parabéns!!!';
    } else if (calculo < 30) {
      classificacao = 'levemente acima do peso.';
    } else if (calculo < 35) {
      classificacao = 'com obesidade grau I.';
    } else if (calculo < 40) {
      classificacao = 'com obesidade grau II';
    } else {
      classificacao = 'com obesidade grau III. Cuidado!!';
    }

    resultado.textContent = `${nome} seu IMC é ${calculo} e você está ${classificacao}`;
  } else {
    resultado.textContent = 'Preencha todos os campos!!!';
  }
};

document.querySelector('#calcular').addEventListener('click', imc);
