
const quoteOne = fetchDataQuoteOne();
const quoteTwo = fetchDataQuoteTwo();
const quoteThree = fetchDataQuoteThree();

const cardArray = [quoteOne, quoteTwo, quoteThree];
// const cardArray = ["Sun", "Moon", "Stars", "Water"];
console.log("Quote array is working:", cardArray);

//--> put the const quotes into an array and randomise the card draw

let randomCard = cardArray[Math.floor(Math.random() * cardArray.length)];
console.log("Random card is: ", randomCard);

//wrap an IIFE around the functions so they aren't in the global scope


//--> each fetch function checks the API details and that response is ok to proceed 
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
        //insert cardArray = data.quoteText + data.quoteAuthor
        
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


function fetchDataQuoteTwo() {
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes?genre=courage&author=Amelia")
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

function fetchDataQuoteThree() {
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes?genre=love&author=Voltaire&limit=1")
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

