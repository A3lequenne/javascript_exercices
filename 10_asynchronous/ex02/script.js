/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        const articleWithComment = [];
        
        window.lib.getPosts(function(error, articles) {
            articles.forEach(article => {
                window.lib.getComments(article.id, function(error, comment) {
                    article.comments = comment;
                    articleWithComment.push(article);
                    console.log(article);
                });
            });
        });
        /*function showPosts(error, articles) {
            if (!error) {
                articles.forEach(article => {
                    article.comments = window.lib.getComments(article.id, showComments);
                    console.log(article);
                });
            }
        }

        function showComments(error, comment) {
            if (!error) {
                //article.comments = comment;
                //articleWithComment.push(comment);
                //console.table(article);
            }
        }

        window.lib.getPosts(showPosts);*/
    });
})();
