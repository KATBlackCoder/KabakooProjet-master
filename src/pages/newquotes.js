import UserImage from "../assets/userimage.png"

const quoteContent = document.querySelector(".quote-content");
const quoteAuthor = document.querySelector(".quote-author");
const quoteImage = document.querySelector(".quote-image");
const newQuoteButton = document.querySelector(".next");

const updateQuote = (data) => {
  quoteContent.innerHTML = data.content;
  quoteAuthor.innerHTML = data.author;
  const dataImage = fetch ("https://images.quotable.dev/profile/200/"+data.authorSlug+".jpg");
  if (dataImage) {
    quoteImage.src = "https://images.quotable.dev/profile/200/"+data.authorSlug+".jpg";
    quoteImage.alt = data.authorSlug;
  }else{
    quoteImage.src = UserImage.src;
  }
};
const nextQuote = () => {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      updateQuote(data);
    });
};

newQuoteButton.addEventListener("click", nextQuote);
