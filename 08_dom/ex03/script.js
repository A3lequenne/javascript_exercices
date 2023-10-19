/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const link_image = document.getElementById("source").getAttribute("data-image");
    //const link_image = source.getAttribute("data-image");
    const img_elem = document.createElement("img");
    img_elem.setAttribute("src", link_image);
    document.getElementById("target").appendChild(img_elem);
    document.getElementById("source").remove();
})();
