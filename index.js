window.addEventListener("load", function () {

    fetch("https://quote-garden.herokuapp.com/api/v3/quotes/").then(function(response) {
        console.log("Content-type: ", response.headers.get("Content-Type"));
        console.log("Redirected: ", response.redirected);
        console.log("Status: ", response.status);
        console.log("Status-text: ", response.statusText);
        console.log("Response-type: ", response.type);
        console.log("Response-URL: ", response.url);
        console.log("Response-headers: ", response.headers);

        //headers "pagination.currentPage: x", "_id" eg "5eb17aadb69dc744b4e70d2e", "quoteText", "quoteAuthor"

        //equal to 200 to show there are no errors and status is ok
         if (response.status == 200) {
             return response.json();
         }
         
    }).then(function(returnedData) {
        console.log("Returned data: ", returnedData);
    }).catch(function (error) {
     console.log("Error: ", error);
    })


})