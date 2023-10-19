/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let i = 0;

    const table = document.createElement('table');
    while (i < 10) {
        const tableRow = document.createElement("tr");
        const tableCell = document.createElement("td");

        tableRow.appendChild(tableCell);
        table.appendChild(tableRow);
        i++;
    }

    document.getElementById('target').appendChild(table);
})();
