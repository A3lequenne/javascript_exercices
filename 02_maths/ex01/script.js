/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation
        let op_1 = parseFloat(document.getElementById("op-one").value);
        let op_2 = parseFloat(document.getElementById("op-two").value);
        let res;
        switch (operation) {
            case "addition": {
                res = op_1 + op_2;
                alert('Résultat de cette addition : ' + res);
                break;
            }
            case "substraction": {
                res = op_1 - op_2;
                alert('Résultat de cette soustraction : ' + res);
                break;
            }
            case "multiplication": {
                res = op_1 * op_2;
                alert('Résultat de cette multiplication : ' + res);
                break;
            }
            case "division": {
                res = op_1 / op_2;
                alert('Résultat de cette division : ' + res);
                break;
            }
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
