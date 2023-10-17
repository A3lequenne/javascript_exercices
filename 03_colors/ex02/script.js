/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const min = 0x100000;
    const max = 0xFFFFFF;
        
    document.getElementById("run").addEventListener("click", () => {
        let color = Math.floor(Math.random() * (max - min + 1)) + min;
        color = color.toString(16).toUpperCase();
        color = '#' + color;
        document.getElementById("body").style.backgroundColor = color;
    })
})();
