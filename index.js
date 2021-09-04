window.addEventListener('load', 
  function() { 
    console.log("Load success!");
  }, false);

//link sound file to button click
let soundAudio = document.querySelector("#audio");

//make the url fetch random
let quoteURLS = [
    "https://quote-garden.herokuapp.com/api/v3/quotes?genre=best&author=buddha&limit=1",
    "https://quote-garden.herokuapp.com/api/v3/quotes?genre=love&author=Voltaire&limit=1",
    "https://quote-garden.herokuapp.com/api/v3/quotes?genre=courage&author=Amelia",
    "https://quote-garden.herokuapp.com/api/v3/quotes?author=maya&genre=courage&limit=1"
];

let randomURL = quoteURLS[Math.floor(Math.random() * quoteURLS.length)];
console.log(randomURL);

document.getElementById("buttonAlign").addEventListener("click", function() {
    soundAudio.play();
    return fetchDataQuote();
    
});

function fetchDataQuote() {
    fetch(randomURL) //fetches a random quote from quote API
    .then(response => {
        console.log("Status: ", response.status);

        return response.json();
    })
    .then(data => {
        const html = data.data
        .map(data => { //uses a template literal to insert quote into the html
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

document.querySelector(".crossButton").addEventListener("click", function() {
    window.location.reload();
    
});
