class Book {
    constructor(title, author, pageCount) {
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
    }
}
//UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        const books = Store.getBooks();
        

        books.forEach((book)=> UI.addBookToList(book));
    }
    static addBookToList(book) {
        const list = document.querySelector('#individual-books');

        const bookTileDiv= document.createElement('div');
        bookTileDiv.classList.add('book-tile-div')

        bookTileDiv.innerHTML = `
        <div class="book-tile">
        <p>${book.title}</p>
        <p>${book.author}</p>
        <p>${book.pageCount}</p>
        <div class="delete-btn">
        <a href="#" class="btn btn-danger btn-sm delete" style="font-family: Helvetica;" >X</a>
        </div>
        `;

        list.appendChild(bookTileDiv);
    }

    static deleteBook(element) {
        if(element.classList.contains('delete')) {
            element.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('#modal-content')
        const form = document.querySelector('#myForm');
        container.insertBefore(div, form);
        setTimeout(() => document.querySelector('.alert').remove(),2500);
        
    }

    static showRemoveAlert(message, className) {
        const div1 = document.createElement('div');
        div1.className = `alert alert-${className}`;
        div1.appendChild(document.createTextNode(message));
        const container1 = document.querySelector('#firstDiv')
        const place = document.querySelector('#place');
        container1.insertBefore(div1, place);
        setTimeout(() => document.querySelector('.alert').remove(),2500);
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#page-count').value = ''; 
    }
}
//Store Class: Handles Storage
class Store {
    
        static getBooks() {
          let books;
          if(localStorage.getItem('books') === null) {
            books = [];
          } else {
            books = JSON.parse(localStorage.getItem('books'));
          }
      
          return books;
        }
      
        static addBook(book) {
          const books = Store.getBooks();
          books.push(book);
          localStorage.setItem('books', JSON.stringify(books));
        }
      
        static removeBook(title) {
          const books = Store.getBooks();
      
          books.forEach((book, index) => {
            if(book.title === title) {
              books.splice(index, 1);
            }
          });
      
          localStorage.setItem('books', JSON.stringify(books));
        }
      }
      
//Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
//Event: Add a Book
document.querySelector('#myForm').addEventListener('submit', (e)=> {
    //prevent actual form submit
    e.preventDefault();
    //get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pageCount = document.querySelector('#page-count').value;

    if(title === "" || author === "" || pageCount ==="") {
       UI.showAlert('Please fill in all fields!', 'danger');
    }
    else {
    const book = new Book(title, author, pageCount);

    //add book to UI
    UI.addBookToList(book);
    Store.addBook(book);
    UI.showAlert('Book Added!','success');
    //clear fields
    UI.clearFields()
    }

});
//Event: Remove a Book
document.querySelector('#individual-books').addEventListener('click', (e) => {
    //console.log(e.target)
    UI.deleteBook(e.target);
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    UI.showRemoveAlert('Book Removed','success')

    Store.removeBook(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
})


const modal = document.querySelector('#modal');

//show form when user clicks add new book
document.querySelector('#create-book-btn').addEventListener('click', () => {
    modal.style.display = "block";
})

document.querySelector('#close-form-btn').addEventListener('click', () => {
    modal.style.display = "none";
})


//when user clicks on screen away from modal it goes away
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

 

  
  