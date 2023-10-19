/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        for (let i = 1; i <= 10; i++) {
            document.getElementById(`n-${i}`).innerHTML = Math.floor(Math.random() * 100) + 1;
        }
        let nb_tab = [];
        for (let i = 1; i <= 10; i++) {
            nb_tab.push(parseInt(document.getElementById(`n-${i}`).innerHTML));
        }
        //let min = Math.min(...nb_tab);
        //console.log(min);
        document.getElementById("min").innerHTML = Math.min(...nb_tab);
        document.getElementById("max").innerHTML = Math.max(...nb_tab);
        let somme = nb_tab.reduce((acc, valeur) => acc + valeur, 0);
        document.getElementById("sum").innerHTML = somme;
        document.getElementById("average").innerHTML = somme / nb_tab.length;
    });
})();
