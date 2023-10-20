/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let waveElem = document.getElementById("target");
    let waveText = waveElem.textContent;
    let waveCopy = waveText;
    let fontSize = 16;
    let growing = true;
    let i = 0;

    document.getElementById("target").innerHTML = '';

    while (i < waveText.length) {
        const span = document.createElement("span");
        span.textContent = waveCopy[i];

        if (growing) {
            fontSize += 2;
          } 
        else {
            fontSize -= 2;
          }
        
        if (fontSize >= 30 || fontSize <= 16) {
            growing = !growing;
          }

        span.style.fontSize = `${fontSize}px`;
        waveElem.appendChild(span);

        i++;
    }
    waveElem.waveText = "";
})();
