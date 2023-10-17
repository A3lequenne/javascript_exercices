/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    const list_days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

    const list_month = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    document.getElementById("run").addEventListener("click", () => {
        usr_year = parseInt(document.getElementById("year").value);
        let res_tab = [];
        
        function getDayOfWeek(year, month, day) {
            if (month < 3) {
              month += 12;
              year--;
            }
            const K = year % 100;
            const J = Math.floor(year / 100);
            const h = (day + Math.floor(13 * (month + 1) / 5) + K + Math.floor(K / 4) + Math.floor(J / 4) - 2 * J) % 7;
          
            return list_days[(h + 5) % 7];
        }
        for (let n_month = 0; n_month < 12; n_month++) {
            if (getDayOfWeek(usr_year, n_month + 1, 13) == 'Vendredi') {
                res_tab.push(list_month[n_month]);
            }
        }
        alert("In " + usr_year + " Friday the 13th was in this/those months : " + res_tab);
    });
})();
