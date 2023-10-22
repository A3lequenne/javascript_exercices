/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let attemps = 0;
    let solution = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    const output = document.getElementById("message");
    let check = 0;

    console.log(solution);

    document.getElementById("submitguess").onclick = function() {
        let userGuess = document.getElementById("guessField").value;

        attemps++;
            if (userGuess == solution) {
                message = `<p>Félicitations vous avez trouvé en ${attemps} tentatives</p>`;           
                check = 1;
            }
            else if (userGuess < solution) {
                message = `<p>Essayer plus haut s'il vous plait <br> Nombres d'essais: ${attemps}</p>`;
            }
            else {
                message = `<p>Essayer plus bas s'il vous plait <br> Nombres d'essais: ${attemps}</p>`;
            }
            output.innerHTML = message;
    }
     /*function askForGuess() {  
        while (attemps < 100) {  
            if (attemps == 0) {
                userGuess = parseInt(prompt("Please enter a number between 1 and 100"));
            }
            else {
                userGuess = parseInt(prompt("Please enter a number between 1 and 100"));
            }

            console.log(userGuess);
            attemps++;

            if (userGuess == null || userGuess == "" || userGuess > 100 || userGuess < 0) {
                return (alert("sadge u couldnt follow the instructions"));
            }

            if (userGuess == solution) {
                message = `<p>Félicitations vous avez trouvé en ${attemps} tentatives</p>`
            }
            else if (userGuess < solution) {
                message = `<p>Essayer plus haut s'il vous plait <br> Nombres d'essais: ${attemps}</p>`;
            }
            else if (userGuess > solution) {
                message = `<p>Essayer plus bas s'il vous plait <br> Nombres d'essais: ${attemps}</p>`;
            }
            output.innerHTML = message;

        }
    }
    askForGuess();*/
})();
