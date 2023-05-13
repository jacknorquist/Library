let myLibrary = [{author:"David Coggins", title:"The Optimist", pages:256, rating:7}, {author:"Dave Ames", title:"A Good Life Wasted", pages:256, rating:6.5}
];
console.log(myLibrary)





function Book(author, title, pages, rating) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.rating = rating;
}

function addBookToLibrary() {
    let author=document.querySelector("#author-field").value;
    let title=document.querySelector("#title-field").value;
    let pages=document.querySelector("#pages-field").value;
    let rating=document.querySelector("#rating-field").value;
    let newBook = new Book (author, title, pages, rating);
    myLibrary.push(newBook);
}

let newBookForm = document.querySelector("#form");
newBookForm.addEventListener('submit', function(){
    event.preventDefault();
    addBookToLibrary();
    render();
})
window.onload=function(){
    render();
}
let libraryEl = document.querySelector(".books-div");

function render(){
    libraryEl.innerHTML="";
    for (let i=0; i<myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.classList.add("book-card");
        let bookTitle = document.createElement("div");
        bookTitle.classList.add("title");
        bookTitle.innerHTML = `<p>${book.title}</p>`
        let bookAuthor = document.createElement("div");
        bookAuthor.classList.add("author");
        bookAuthor.innerHTML = `<p>${book.author}</p>`
        let bookPages = document.createElement("div");
        bookPages.classList.add("pages");
        bookPages.innerHTML = `<p>${book.pages}</p>`;
        let bookRating = document.createElement("div");
        bookRating.classList.add("rating");
        bookRating.innerHTML = `<p>${book.rating}</p>`;
        libraryEl.appendChild(bookEl);
        bookEl.appendChild(bookTitle);
        bookEl.appendChild(bookAuthor);
        bookEl.appendChild(bookPages);
        bookEl.appendChild(bookRating);
    }
}



