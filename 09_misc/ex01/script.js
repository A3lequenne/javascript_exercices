/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let i = 0;
    typeElem = document.getElementById("target");
    typeText = typeElem.textContent;

    document.getElementById("target").innerHTML = '';

    function typeWriter() {
        if (i < typeText.length) {
            document.getElementById("target").innerHTML += typeText.charAt(i); 
            i++;
            setTimeout(typeWriter, Math.floor(Math.random() * (500 - 100 + 1)) + 100);
        }    
    }
    typeWriter();
})();
