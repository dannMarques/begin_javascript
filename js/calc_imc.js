var pacientes = document.querySelectorAll('.paciente');
var paciente;

var valor;
var peso, altura;

var tdPeso, tdAltura, tdImc;
var adicionarBotão;

//===================================================>

for (let i = 0; i < pacientes.length; i++) {
  todosDadosDoPaciente(i);

}

function todosDadosDoPaciente(indice) {
  paciente = pacientes[indice];

  tdPeso = paciente.querySelector('.info-peso');
  peso = tdPeso.textContent;

  tdAltura = paciente.querySelector('.info-altura');
  altura = tdAltura.textContent;

  tdImc = paciente.querySelector('.info-imc');

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  if (!pesoEhValido) {
    pesoEhValido = false;
    tdImc.textContent = 'Peso inválido!';
    paciente.classList.add('paciente-invalido');
  }
  if (!alturaEhValida) {
    alturaEhValida = false;
    tdImc.textContent = 'Altura inválida';
    paciente.classList.add('paciente-invalido');
  }
  mostraImc(peso, altura);

}
//===================================================>


function validaAltura(altura){

  if (altura >= 0 && altura < 3) {
    return true;
  } else {
    return false;
  }

    // averiguaAltura = false;
    // tdImc.textContent = 'Altura inválida';
    // paciente.classList.add('paciente-invalido');
}

function validaPeso(peso){
  if (peso >= 0 && peso < 500) {
    return true;
  } else {
    return false;
  }
  // tdImc.textContent = 'Peso inválido';
  // paciente.classList.add('paciente-invalido');
}

function validaDados(pesoEhValido, alturaEhValida) {
  if (pesoEhValido && alturaEhValida) {
    mostraImc(peso, altura);


function calculaImc(peso,altura) {
  var imc = 0;
  imc = (peso / (altura * altura));
  return imc.toFixed(2);
}

function mostraImc(peso,altura) {
  tdImc.textContent = calculaImc(peso,altura);
  return calculaImc(peso,altura);
}



