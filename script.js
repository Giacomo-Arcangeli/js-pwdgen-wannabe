console.log('JS OK')

// recupero l'elemento dal Dom

const pwPlaceHolder = document.getElementById('pw-gen');
console.log(pwPlaceHolder);

// Chiedo il nome all'utente

const userName = prompt('Qual è il tuo nome?' , 'Giacomo');
console.log(userName);

// Chiedo il cognome all'utente

const userSurname = prompt('Qual è il tuo cognome?' , 'Arcangeli');
console.log(userSurname);

// Chiedo il colore preferito all'utente

const userColor = prompt('Qual è il tuo colore preferito?' , 'Verde');
console.log(userColor);

// Genero la password

const newPassword = userName + userSurname + userColor + 21;
console.log(newPassword);

// Inserisco il risultato nell'elemento recuperato dal DOM

pwPlaceHolder.innerText = newPassword;