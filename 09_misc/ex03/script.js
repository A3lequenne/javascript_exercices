/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let button_1 = document.getElementById("part-one");
    let button_2 = document.getElementById("part-two");
    let button_3 = document.getElementById("part-three");
    let button_4 = document.getElementById("part-four");
    let showNumber = document.getElementById("target");

    function incrementButton(min, max, button) {
        number = parseInt(button.textContent);
        
        number = number < max ? number + 1 : min;
        
        if (number.toString().length < 2) {
            button.innerHTML = '0' + number.toString();
        }
        else if (number == 100)
            button.innerHTML = '00';
        else if (number == 500)
            button.innerHTML = '460';
        else
            button.innerHTML = number.toString();
        return (number);
    }

    function incrementNumber(number, showNumber, index) {
        realIndex = index * 2;
        let numberToModify = parseInt(showNumber.textContent);
        if (number == 100) {
            numberToModify -= 99 * (10 ** realIndex);
            console.log("check");
        }
        else
            numberToModify += 1 * (10 ** realIndex);
        showNumber.innerHTML = '+' + numberToModify;
    }

    button_1.addEventListener("click", () => {
        let number = incrementButton(460, 500, button_1);
        let numberToModify = parseInt(showNumber.textContent);
        
        if (number == 500) {
            numberToModify -= 39 * (10 ** 6);
            console.log("check");
        }
        else
            numberToModify += 1 * (10 ** 6);
        showNumber.innerHTML = '+' + numberToModify;
    });

    button_2.addEventListener("click", () => {
        const number = incrementButton(0, 100, button_2);
        incrementNumber(number, showNumber, 2);
    });

    button_3.addEventListener("click", () => {
        const number = incrementButton(0, 100, button_3);
        incrementNumber(number, showNumber, 1);
    });

    button_4.addEventListener("click", () => {
        const number = incrementButton(0, 100, button_4);
        incrementNumber(number, showNumber, 0);
    });
})();
