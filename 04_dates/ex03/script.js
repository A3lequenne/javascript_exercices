/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    let date = new Date();
    let n_day = date.getDate();
    let n_month = date.getMonth();
    let year = date.getFullYear();
    let day = date.getDay();
    let hours = date.getHours();
    let n_minutes = date.getMinutes();

    switch (day) {
        case (0): {
            day = 'Dimanche';
            break;
        }
        case (1): {
            day = 'Lundi';
            break;
        }
        case (2): {
            day = 'Mardi';
            break;
        }
        case (3): {
            day = 'Mercredi';
            break;
        }
        case (4): {
            day = 'Jeudi';
            break;
        }
        case (5): {
            day = 'Vendredi';
            break;
        }
        case (6): {
            day = 'Samedi';
            break;
        }
    }
    
    const list_month = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
      ];
    
    const month = list_month[n_month];

    const minutes = (n_minutes < 10) ? "0" + n_minutes : n_minutes;

    document.getElementById("target").innerHTML = (day + " " + n_day + " " + month + " " + year + " " + hours + "h" + minutes)
})();
