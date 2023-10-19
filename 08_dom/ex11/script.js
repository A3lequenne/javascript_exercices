/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const pwdElem = document.getElementById("pass-one");
    const validElem = document.getElementById("validity");

    pwdElem.addEventListener("input", () => {
        const pwdValue = pwdElem.value;
        let charCount = pwdValue.length;
        const digits = /\d/g;
        let dg_found = pwdValue.match(digits);

        if (charCount >= 8 && dg_found.length > 1) {
            validElem.textContent = `ok`;
        }
        
    });
})();
