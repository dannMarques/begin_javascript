adicionarBotão = document.querySelector('#adicionar-paciente');
adicionarBotão.addEventListener('click', function(event){
  event.preventDefault();

  var form = document.querySelector('#adicionar-form');
  // Extraindo informações do paciente
  var paciente = obterInformacaoDoPaciente(form);

  if (!validaPaciente(paciente)){
    console.log('paciente invalido!');
    return;
  }

  //cria tr e td do paciente
  var pacienteTr = montaTr(paciente);

  var tabela = document.querySelector('#tabela-pacientes')

  tabela.appendChild(pacienteTr);
  form.reset();
});

function obterInformacaoDoPaciente(form) {
  var paciente = {
    nome:form.nome.value,
    peso:form.peso.value,
    altura:form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

function montaTd(dado, classe) {
  var td = document.createElement('td');
  td.classList.add(classe);
  td.textContent = dado;

  return td;
}

function montaTr(paciente) {
  //cria Tr
  var pacienteTr = document.createElement('tr');
  pacienteTr.classList.add('paciente');

  //cria Td's e à adiciona dentro da Tr
  pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
  pacienteTr.appendChild(montaTd(paciente.peso,'info-peso'));
  pacienteTr.appendChild(montaTd(paciente.altura,'info-altura'));
  pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
  pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

  //retorna a Tr
  return pacienteTr;
}

function validaPaciente(paciente) {
  if(validaPeso(paciente.peso)){
    return true;
  } else {
    return false;
    }
}
