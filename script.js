
// var elNome, elCognome, elColore, elPasw;
//
// elNome = prompt('digita il tuo nome');
//
// elCognome = prompt('digita il tuo Cognome');
//
// elColore = prompt('digita il tuo Colore');
//
// elPasw = document.getElementById('password')
//
// elPasw.innerHTML = 'elNome + elCognome + elColore + 19';

function myFunction(){
  var elNome, elCognome, elColore, elPasw;

  elNome = document.dati.nome.value;

  elCognome = document.getElementById('cognome').value;

  elColore = document.getElementById('colore').value;



  // elPasw = elNome + elCognome + elColore + '19';
  //
  // document.getElementById('password').innerHTML = elPasw;

  elPasw = elNome + elCognome + elColore + '19';

  document.getElementById('password').innerHTML= elPasw;

}
