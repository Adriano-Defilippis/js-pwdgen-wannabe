
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




// function myFunction(){
//   var elNome, elCognome, elColore, elPasw;
//
//   elNome = document.dati.nome.value;
//
//   elCognome = document.getElementById('cognome').value;
//
//   elColore = document.getElementById('colore').value;
//
//   elPasw = elNome + elCognome + elColore + '19';
//
//   if (elNome='') {
//     alert('Non hai inserito il tuo nome..!')
//   }
//
//   if (elCognome='') {
//     alert('Non hai inserito il tuo cognome.!')
//   }
//
//   if (elColore='') {
//     alert('Non hai inserito il tuo colore..!')
//   }else {
//     document.getElementById('password').innerHTML= elPasw;
//   }
//
//
// }








function myFunction(){
  var elNome, elCognome, elColore, elPasw, password;

  elNome = document.dati.nome.value;

  elCognome = document.getElementById('cognome').value;

  elColore = document.getElementById('colore').value;

  elPasw = elNome + elCognome + elColore + '19';

  if (elNome=="") {
    alert('Non hai inserito completato i campi..!');
    document.getElementById('nome').focus();
    return false;
  }

  else if (elCognome=="") {
    alert('Non hai inserito il tuo cognome.!');
    document.getElementById('cognome').focus();
    return false;
  }

  else if (elColore=="") {
    alert('Non hai inserito il tuo colore..!');
    document.getElementById('colore').focus();
    return false;
  }else {

    password = document.getElementById('password');
    password.innerHTML= elPasw;
    password.focus();

  }



}
