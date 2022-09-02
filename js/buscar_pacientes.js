var botaoAdicionar = document.querySelector('#buscar-pacientes');

botaoAdicionar.addEventListener('click', function() {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://api-pacientes.herokuapp.com/pacientes');
  xhr.addEventListener('load', function() {
    var erroAjax = document.querySelector('#erro-ajax');
    if (xhr.status == 200) {
      erroAjax.classList.add('invisivel');
	    var reposta = xhr.responseText;
	    var pacientes = JSON.parse(reposta);

	    pacientes.forEach(function(paciente) {
	      adicionaPacienteNaTabela(paciente);
	    });
    } else {
        erroAjax.classList.remove('invisivel');
      }
  });
  xhr.send();

});
