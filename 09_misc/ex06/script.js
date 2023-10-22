/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let increment = document.getElementById("increment");
    let output = document.getElementById("target");
    let number = 0;

    const storedValue = localStorage.getItem("savedValue");
    if (storedValue) {
        document.getElementById("target").value = storedValue;
        number = storedValue;
        output.innerHTML = storedValue;
    }
    
    increment.addEventListener("click", () => {
        number++;
        localStorage.setItem("savedValue", number);
        output.innerHTML = number;
    })
})();
