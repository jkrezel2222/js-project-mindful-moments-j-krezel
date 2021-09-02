// window.addEventListener("load", function () {

//     fetch("https://quote-garden.herokuapp.com/api/v3/quotes/").then(function(response) {
//         console.log("Content-type: ", response.headers.get("Content-Type"));
//         console.log("Redirected: ", response.redirected);
//         console.log("Status: ", response.status);
//         console.log("Status-text: ", response.statusText);
//         console.log("Response-type: ", response.type);
//         console.log("Response-URL: ", response.url);
//         console.log("Response-headers: ", response.headers);

// // equal to 200 to show there are no errors and status is ok
//          if (response.status == 200) {
//              return response.json();
//          }
         
//     }).then(function(returnedData) {
//         console.log("Returned data: ", returnedData);
//     }).catch(function (error) {
//      console.log("Error: ", error);
// })


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



// singleQuote
// .then(data => data.json())
// .then(data => {
//     data.data.forEach((item) => {
//         console.log(item.quoteText);
//         return item.quoteText;
//     })
// })
// .catch((error) => {
//     console.log(error);
// });


// singleQuote
// .then(response => {
//     console.log("Content-type: ", response.headers.get("Content-Type"));
//     console.log("Redirected: ", response.redirected);
//     console.log("Status: ", response.status);
//     console.log("Status-text: ", response.statusText);
//     console.log("Response-type: ", response.type);
//     console.log("Response-URL: ", response.url);
//     console.log("Response-headers: ", response.headers);    
//         if(!response.ok) {
//         throw Error("Error");
//         }
//         return response.json();
//     })
// .then(data => {
//     data.data.forEach((item) => {
//         console.log(item.quoteText);
//         return item.quoteText;
//     })
// })
// .catch((error) => {
//     console.log(error);
// });



// singleAuthor
// .then(response => {
//     console.log("Content-type: ", response.headers.get("Content-Type"));
//     console.log("Redirected: ", response.redirected);
//     console.log("Status: ", response.status);
//     console.log("Status-text: ", response.statusText);
//     console.log("Response-type: ", response.type);
//     console.log("Response-URL: ", response.url);
//     console.log("Response-headers: ", response.headers);    
//         if(!response.ok) {
//         throw Error("Error");
//         }
//         return response.json();
//     })
// .then(data => {
//     data.data.forEach((item) => {
//         console.log(item.quoteAuthor);
//         return item.quoteAuthor;
//     })
// })
// .catch((error) => {
//     console.log(error);
// });


// function fetchData() {
//     fetch("https://quote-garden.herokuapp.com/api/v3/quotes?page=4196")
//     .then(response => {
//         console.log("Content-type: ", response.headers.get("Content-Type"));
//         console.log("Redirected: ", response.redirected);
//         console.log("Status: ", response.status);
//         console.log("Status-text: ", response.statusText);
//         console.log("Response-type: ", response.type);
//         console.log("Response-URL: ", response.url);
//         console.log("Response-headers: ", response.headers);    
//         if(!response.ok) {
//             throw Error("Error");
//         }
//         return response.json();
//     })
//     .then(data => {
//         const html = data.data
//         .map(x => x.quoteText)[2]);
//         })
//         return html;
//     })
//         .catch(error => {
//         console.log(error);
//     })
// }

// fetchData();


// const singleQuote = fetch('https://quote-garden.herokuapp.com/api/v3/quotes')
// const singleAuthor = fetch('https://quote-garden.herokuapp.com/api/v3/quotes')


//getting a single quote from quotes.js


// function singleQuote(quoteText, value) {
//     if (typeof value === 'courage') {
//         console.log(quoteText);
//         return quoteText;
//     }
// };

// console.log(quotesList[2].quoteText);
// console.log(quotesList[2].quoteAuthor);


//use this one ---->
// console.log(quotesList.map(x => x.quoteText)[2]);
// console.log(quotesList.map(x => x.quoteAuthor)[2]);


function fetchDataQuoteOne() {
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes?author=maya&genre=courage&limit=1")
    .then(response => {
        console.log("Content-type: ", response.headers.get("Content-Type"));
        console.log("Redirected: ", response.redirected);
        console.log("Status: ", response.status);
        console.log("Status-text: ", response.statusText);
        console.log("Response-type: ", response.type);
        console.log("Response-URL: ", response.url);
        console.log("Response-headers: ", response.headers);    
        if(!response.ok) {
            throw Error("Error");
        }
        return response.json();
    })
    .then(data => {
        const html = data.data
        .map(data => {
            return `
            <div class="data">
            <p>${data.quoteText} <br></br>- ${data.quoteAuthor}</p>
            </div>
            `;
        })
        .join("");
        document.querySelector("#fromAPI").insertAdjacentHTML("afterbegin", html);
    })
    .catch(error => {
        console.log(error);
    });
}