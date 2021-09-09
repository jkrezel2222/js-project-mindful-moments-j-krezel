//find sound file in the html
let soundAudio = document.querySelector("#audio");

//make the url fetch random
let quoteURLS = [
    "https://quote-garden.herokuapp.com/api/v3/quotes?genre=best&author=buddha&limit=1",
    "https://quote-garden.herokuapp.com/api/v3/quotes?author=rumi&genre=life",
    "https://quote-garden.herokuapp.com/api/v3/quotes?author=nhat&genre=peace&limit=1",
    "https://quote-garden.herokuapp.com/api/v3/quotes?genre=love&author=Voltaire&limit=1",
    "https://quote-garden.herokuapp.com/api/v3/quotes?genre=courage&author=Amelia",
    "https://quote-garden.herokuapp.com/api/v3/quotes?author=louise&genre=experience",
    "https://quote-garden.herokuapp.com/api/v3/quotes?author=angelou&genre=attitude",
    "https://quote-garden.herokuapp.com/api/v3/quotes?genre=peace&author=dalai&limit=1",
    "https://quote-garden.herokuapp.com/api/v3/quotes?author=dyer&genre=change&limit=1"
];

let randomURL = quoteURLS[Math.floor(Math.random() * quoteURLS.length)];
console.log(randomURL);

//link sound file to button click
document.getElementById("buttonAlign").addEventListener("click", function() {
    
    soundAudio.play();
    fetchDataQuote();
});

function fetchDataQuote() {
    fetch(randomURL) //fetches a random quote from quote API
    .then(response => {
        console.log("Status: ", response.status);

        return response.json();
    })
    .then(data => {
        const html = data.data
        .map(data => { //use a template literal to insert quote into the html
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
    setTimeout(function() {
        window.location.reload();
    }, 8000);
}
//linking to the reload button
document.querySelector(".crossButton").addEventListener("click", function() {
    window.location.reload();
});
