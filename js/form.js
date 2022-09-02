var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(event){
  event.preventDefault();
  var form = document.querySelector('#adicionar-form');
  // Extraindo informações do paciente
  var paciente = obterInformacaoDoPaciente(form);
  var erros = validaPaciente(paciente)

  if (erros.length > 0) {
    exibeErros(erros);
    return;
  }

  adicionaPacienteNaTabela(paciente);

  form.reset();

  var mensagemErro = document.querySelector('#mensagens-erro');
  mensagemErro.innerHTML = '';
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

  //cria Td's e às adiciona dentro da Tr
  pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
  pacienteTr.appendChild(montaTd(paciente.peso,'info-peso'));
  pacienteTr.appendChild(montaTd(paciente.altura,'info-altura'));
  pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
  pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

  return pacienteTr;
}

function validaPaciente(paciente) {
  var erros = [];

  if (erros.length > 0) {
    exibeErros(erros);
    return;
  }

  if(!validaPeso(paciente.peso)){
    erros.push('Peso é inválido');
  }

  if(!validaAltura(paciente.altura)){
    erros.push('Altura é inválida');
  }

  if (paciente.nome.length == 0) {
    erros.push('O nome não pode ser em branco');
  }

  if (paciente.gordura.length == 0) {
    erros.push('A gordura não pode ser em branco');
  }

  if (paciente.peso.length == 0) {
    erros.push('O peso não pode ser em branco');
  }

  if (paciente.altura.length == 0) {
    erros.push('A altura não pode ser em branco');
  }

  return erros;
}

function exibeErros(erros) {
  var ul = document.querySelector('#mensagens-erro');
  ul.innerHTML = '';

  erros.forEach(function(erro) {
    var li = document.createElement('li');
    li.textContent = erro;
    ul.appendChild(li);
  });

}

function adicionaPacienteNaTabela(paciente) {
  //cria tr e td do paciente
  var pacienteTr = montaTr(paciente);

  var tabela = document.querySelector('#tabela-pacientes');
  tabela.appendChild(pacienteTr);


}


