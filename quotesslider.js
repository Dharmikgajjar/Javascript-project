const quotes = [
  {
    quot: "Anyone who lives within their means suffers from a lack of imagination",
    autho: "Oscar Wilde"
  },
  {
    quot: "If you want to know what God thinks of money, just look at the people he gave it to..",
    autho: " Dorothy Parker"
  },
  {
    quot: "A Penny Saved is a Penny Earned.",
    autho: "Benjamin Franklin"
  }
];

let index = 0;

const quote = document.getElementById("quo");
const author = document.getElementById("auth");
const buttons = document.getElementById("buttons");

function show() {
  quote.textContent = quotes[index].quot;
  author.textContent = "- " + quotes[index].autho;
}

function next() {
  index++;

  if (index >= quotes.length) {
    index = 0;
  }

  show();
}

function prev() {
  index--;

  if (index < 0) {
    index = quotes.length - 1;
  }

  show();
}


const prevBtn = document.createElement("button");
prevBtn.textContent = "Previous";
prevBtn.onclick = prev;

const nextBtn = document.createElement("button");
nextBtn.textContent = "Next";
nextBtn.onclick = next;

buttons.innerHTML = "";
buttons.replaceChildren(prevBtn, nextBtn);


show();