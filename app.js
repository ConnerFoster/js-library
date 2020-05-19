let modal = document.getElementById('modal')
let createBookBtn = document.getElementById('create-book-btn')
let library = []
let books = document.getElementById('books')

class Book {
    constructor(title,author,pageCount) {
    this.title = title;
    this.author = author
    this.pageCount = pageCount
}
}
document.querySelector('#submit-form-btn').addEventListener('submit',addBook)
function addBook(e) {
    e.preventDefault()
    
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('page-count').value
    let thisBook = new Book(title, author, pages)
    library.push(thisBook)
    render(thisBook)
    

}

function render(book){
    books.innerHTML += `
    <div class="book-tile justify-content-center d-inline-flex text-capitalize container pt-6">
        <div class="tile-text">
        <p>${book.title}</p>
        <p>${book.author}</p>
        <p>${book.pageCount}</p>
        </div>
        </div>

    `
}

const hobbit = new Book("hobbit", "tolkien", 300)
render(hobbit);



createBookBtn.onclick = () => {
    modal.style.display = "block"
}

