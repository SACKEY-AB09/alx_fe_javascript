let quotes = [
    { text: "Love is sweet so enjoy it at the right time", category: "Love" },
    { text: "Marriage is not competition, have patience", category: "Life" },
    { text: "Uni is not for the weak", category: "SchoolMemes" }
];

// Function to show a random quote
function showRandomQuote() {
    if (quotes.length === 0) {
        document.getElementById("quoteDisplay").innerHTML = "No quotes here.";
        return;
    }

    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomIndex];
    document.getElementById("quoteDisplay").innerHTML = 
        `<p>"${randomQuote.text}" - <strong>${randomQuote.category}</strong></p>`;
}

// Event listener for showing a new quote
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

// Function to add a new quote
function creatAddQuote() {
    let quoteText = document.getElementById("newQuoteText").value.trim();
    let quoteCategory = document.getElementById("newQuoteCategory").value.trim();
    let message = document.getElementById("message");

    if (quoteText === "" || quoteCategory === "") {
        message.innerText = "Both fields are required.";
        message.style.color = "red";
        return;
    }

    quotes.push({ text: quoteText, category: quoteCategory });
    message.innerText = "Quote added successfully!";
    message.style.color = "green";

    // Clear input fields
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";
}

// Add an event listener for adding quotes dynamically
document.getElementById("addQuoteBtn").addEventListener("click", addQuote);


showRandomQuote();
