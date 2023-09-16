const quoteContent = document.querySelector(".quote-content");
const quoteAuthor = document.querySelector(".quote-author");
const newQuoteButton = document.querySelector(
  ".next"
);

const updateQuote = (data) => {
  quoteContent.innerHTML = data.content;
  quoteAuthor.innerHTML = data.author;
};

const nextQuote = () => {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      updateQuote(data);
    });
};

newQuoteButton.addEventListener("click", nextQuote);
