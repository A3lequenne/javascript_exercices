/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener("click", () => {
        usr_day = parseInt(document.getElementById('dob-day').value);
        usr_month = parseInt(document.getElementById('dob-month').value);
        usr_year = parseInt(document.getElementById('dob-year').value);
        const date = new Date();
        day = date.getDate();
        month = date.getMonth() + 1;
        year = date.getFullYear();
        let age = 0;

        age = year - usr_year - 1;
        console.log("dob: " + usr_day);
        console.log("day_date: " + day);
        console.log("usr_month: " + usr_month);
        console.log("date_month: " + month);
        if (usr_month < month || (month == usr_month && usr_day <= day)) {
            age++;
        }
        
        alert("The user is " + age + " Years old");
    });
})();
