/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition
        let op_1 = parseFloat(document.getElementById("op-one").value);
        let op_2 = parseFloat(document.getElementById("op-two").value);
        let res;
        res = op_1 + op_2;
        alert('Résultat de cette addition : ' + res);
    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
        let op_1 = parseFloat(document.getElementById("op-one").value);
        let op_2 = parseFloat(document.getElementById("op-two").value);
        let res;
        res = op_1 - op_2;
        alert('Résultat de cette soustraction : ' + res);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
        let op_1 = parseFloat(document.getElementById("op-one").value);
        let op_2 = parseFloat(document.getElementById("op-two").value);
        let res;
        res = op_1 * op_2;
        alert('Résultat de cette multiplication : ' + res);
    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
        let op_1 = parseFloat(document.getElementById("op-one").value);
        let op_2 = parseFloat(document.getElementById("op-two").value);
        let res;
        res = op_1 / op_2;
        alert('Résultat de cette division : ' + res);
    });
})();
