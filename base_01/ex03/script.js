/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let x = 0;
    
    while (x < 1) {
        let age = prompt('Quel est votre âge ?');
        let ville = prompt('De quelle ville venez vous ?');
        let sexe = prompt('De quel sexe êtes vous ? (H/F)');

        answer = prompt('Age: ' + age + '\n' + 'Ville: ' + ville + '\n' + 'Sexe: ' + sexe + '\n' + 'Si ces informations sont correctes ecrivez "Oui" ?');
        if (answer.toUpperCase() == 'OUI') {
            x += 1;
            alert('Merci de nous avoir donné vos informations, nous allons les vendre');
        }
    }
})();
