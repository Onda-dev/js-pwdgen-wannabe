const nome = prompt("Qual è il tuo nome?");

const cognome = prompt("E il tuo cognome?");

const colore = prompt("Ora dimmi il tuo colore preferito")

const password = nome + cognome + colore + "21";

// console.log(password)

const title = document.getElementById("title").innerHTML;

document.getElementById("title").innerHTML = `${title} ${password}`;