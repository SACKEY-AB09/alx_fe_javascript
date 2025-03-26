let quotes =[
    {text:"Love is sweet so enjoy it at the right time", category:"Love"},
    {text:"Marriage is not competition, have patience", category:"life"},
    {text:"Uni is not for the weak" ,category:"SchoolMemes"}
];

function showRandomQuote(){

    if (quotes.legth ===0){
        document.getElementById("quoteDisplay").innerHTML="no quotes here.";
        return;
    }
    
};

document.getElementById("addQuoteBtn").addEventListener("click", function () {
    let quoteText = document.getElementById("quoteText").value.trim();
    let quoteCategory = document.getElementById("quoteCategory").value.trim();
    let message = document.getElementById("message");

    if (quoteText === "" || quoteCategory === "") {
        message.innerText = "Both fields are required.";
        message.style.color = "red";
        return;
    }