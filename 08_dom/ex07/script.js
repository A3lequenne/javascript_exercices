/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let i = 0;
    let j = 1;

    const table = document.createElement('table');
    
    while (i < 10) {
        const tableRow = document.createElement("tr");
        while (j <= 10) {
            const tableCell = document.createElement("td");
            const tableText = document.createTextNode((i + 1) * j);
            tableCell.appendChild(tableText);
            tableRow.appendChild(tableCell);
            j++;
        }
        j = 1;

        table.appendChild(tableRow);
        
        i++;
    }

    document.getElementById('target').appendChild(table);
})();
