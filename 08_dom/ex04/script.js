/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const img_elem = document.querySelector('section.material img')
    const imgSource = img_elem.getAttribute("src");
    
    img_elem.addEventListener("mouseenter", () => {
        const imgWhenOvered = img_elem.getAttribute("data-hover");
        img_elem.setAttribute("src", imgWhenOvered);
    });

    img_elem.addEventListener("mouseleave", () => {
        img_elem.setAttribute("src", imgSource);
    });
})();
