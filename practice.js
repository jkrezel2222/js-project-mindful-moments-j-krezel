
        /*window.addEventListener("load", function () {
           fetch("http://api.forismatic.com/api/1.0/").then(function(response) {
               console.log("Content-type: ", response.headers.get("Content-Type"));
               console.log("Redirected: ", response.redirected);
               console.log("Status: ", response.status);
               console.log("Status-text: ", response.statusText);
               console.log("Response-type: ", response.type);
               console.log("Response-URL: ", response.url);

               //equal to 200 to show there are no errors and status is ok
                if (response.status == 200) {
                    return response.cors();
                }
                
           }).then(function(json) {
               console.log("Returned json: ", json);
           }).catch(function (error) {
            console.log("Error: ", error);
           })
           // add POST request

           fetch("http://api.forismatic.com/api/1.0/", {
                method: "post",
                format: "json",
                key: "222222",
                lang: "en"
           }).then(function (response) {
                    return response.cors();
            }).then(function (cors) {
                    console.log("Returned post json: ", cors);
                })

           });


           // let response = fetch("https://quote-garden.herokuapp.com/api/v3/quotes/");

// fetch("https://quote-garden.herokuapp.com/api/v3/quotes/")
// .then(response => {
//     return response.json();
// })
// .then

// .catch(function(error) {
//     console.log("Error: ", error);
// })




//         //headers "pagination.currentPage: x", "_id" eg "5eb17aadb69dc744b4e70d2e", "quoteText", "quoteAuthor"

// nestedObject[keyVar]

// fetch("https://quote-garden.herokuapp.com/api/v3/quotes/", {
//     method: "POST",
//     headers: {
//         //headers here
//     }
//     return array and store as "myQuotes"
//     myQuotes = [array in here]
// })
