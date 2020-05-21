

































































/*let modal = document.getElementById('modal')
let createBookBtn = document.getElementById('create-book-btn')
let library = []
let books = document.getElementById('books')
let submitBtn = document.getElementById('submit-form-btn')

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
    if(title === "" || author === "" || pages==="") {
        alert("all fields required.")
    }
    else {
        let thisBook = new Book(title, author, pages)
        library.push(thisBook)
        render(thisBook)
        modal.style.display = "none;"
        document.getElementById("myForm").reset();
    }
    
    
    

}

function render(book){
    books.innerHTML += `
    <div class="book-tile justify-content-center d-inline-flex align-items-center text-capitalize container pt-6">
        <div class="tile-text">
        <p>${book.title}</p>
        <p>${book.author}</p>
        <p>${book.pageCount}</p>
        <div class="delete-button-div>
        <a href="#" id="delete-btn" class="btn btn-danger btn-sm delete-btn" delete>x</a>
        </div>
        </div>

    `
}





createBookBtn.onclick = () => {
    modal.style.display = "block"
}


submitBtn.addEventListener('click',addBook)

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  const hobbit = new Book("hobbit", "tolkien", 300)
  render(hobbit)

function deleteBook(e){
    e.parentElement.parentElement.remove();
}

document.getElementById('delete-btn').addEventListener('click',deleteBook)

deleteButtons = document.getElementsByClassName('delete-btn')

deleteButtons.onclick = () => {
    //deleteButtons.parentElement.remove()
    deleteButtons.parentElement.parentElement.remove()
}*/