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
    let button_4 = document.getElementById("target");

    button_1.addEventListener("click", () => {
        if (button_1.textContent < 499)
            button_1.innerHTML = parseInt(button_1.textContent) + 1;
        else
            button_1.innerHTML = 460;
    });

    button_2.addEventListener("click", () => {
        if (button_2.textContent < 99)
            button_2.innerHTML = parseInt(button_2.textContent) + 1;
        else
            button_2.innerHTML = '00';
    });

    button_3.addEventListener("click", () => {
        if (button_3.textContent < 99)
            button_3.innerHTML = parseInt(button_3.textContent) + 1;
    });

    button_4.addEventListener("click", () => {
        if (button_4.textContent < 99)
            button_4.innerHTML = parseInt(button_4.textContent) + 1;
    });
})();
