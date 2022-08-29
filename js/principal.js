
var pacientes = document.querySelectorAll('.paciente');
var paciente;

var valor;
var imc;
var peso, altura;

var tdPeso, tdAltura, tdImc;
var averiguaAltura, averiguaPeso;

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

  averiguaAltura = true;
  averiguaPeso = true;

  chamaDados();
}

//===================================================>

function chamaDados() {
  validaAltura();
  validaPeso();


}
function validaAltura(){

  if (altura <= 0 || altura > 3) {
    averiguaAltura = false;
    tdImc.textContent = 'Altura inválida';
    paciente.classList.add('paciente-invalido');
  }
  validaPeso();


}

function validaPeso(){

  if ((peso <= 0 || peso > 500) && !averiguaAltura) {
    console.log(averiguaAltura);
    averiguaPeso = false;
    validaDados();
  }else if (peso <= 0 || peso > 500) {
    averiguaPeso = false;
    tdImc.textContent = 'Peso inválido';
    paciente.classList.add('paciente-invalido');
  } else {
      validaDados();
    }
}

function validaDados() {

  if (averiguaPeso && averiguaAltura) {
    valor = true;
    mostraImc();
  }

}

function calculaImc() {
  imc = (peso / (altura * altura));
  imc = imc.toFixed(2);
}

function mostraImc() {
  calculaImc();

  if (valor) {
    tdImc.textContent = imc;
  } else {
      tdImc.textContent = 'Altura e/ou peso invalidos!';
      paciente.classList.add('paciente-invalido');
    }

}

