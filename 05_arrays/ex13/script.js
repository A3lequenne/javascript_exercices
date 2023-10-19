/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        const ran_index_bird = Math.floor(Math.random() * birds.length);
        const ran_bird = birds[ran_index_bird];
        const tab_adj = Array.from(adjectives);
        const ran_index_adj = Math.floor(Math.random() * tab_adj.length);
        let ran_adj = tab_adj[ran_index_adj];
        let res = ran_bird.name;
        console.log(res);
        if (ran_bird.fem == true)
            ran_adj = ran_adj + "e";
        console.log(ran_adj);
        res = res + ' ' + ran_adj;
        document.getElementById('target').innerHTML = res;
    });
})();
