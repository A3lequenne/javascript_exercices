/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const pwdElem = document.getElementById("pass-one");
    const counterElem = document.getElementById("counter");

    pwdElem.addEventListener("input", () => {
        const pwdValue = pwdElem.value;
        let charCount = pwdValue.length;
        
        if (charCount > 10) {
            pwdElem.value = pwdValue.slice(0, 10);
            charCount = 10;
        }
        counterElem.textContent = `${charCount}/10`;
    });
})();
