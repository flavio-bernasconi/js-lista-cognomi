
var cognomi = [
  'sassi',
  'rossi',
  'pagani',
  'camporini',
  'turconi',
  'comin'
]

//utente inserisce il suo cognome
var elementoAggiunto = prompt("cosa manca ")
cognomi.push(elementoAggiunto);
//mette i cognomi in ordine alfabetico
cognomi.sort();
//indico la posizione del cognome inserito all'interno della lista
var posizione = cognomi.indexOf(elementoAggiunto);
console.log('la posizione nella lista è: ' + posizione+1);


//scrivo la lista ripeto
for (var i = 0; i < cognomi.length; i++) {

  var contenuto = document.getElementById('lista').innerHTML;

  document.getElementById('lista').innerHTML  = contenuto + "<li class='uno'>" + cognomi[i] + "</li>";
}
