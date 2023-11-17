const myLibrary = [];

class Book {
    constructor(title,author,pages,read)
    {
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.read=read;
    }
    info() {
        return `${title} was written by ${author}, ${pages} pages, ${read}`;
    }
}

// function Book(title,author,pages,read)
// {
//     this.title=title;
//     this.author=author;
//     this.pages=pages;
//     this.read=read;
//     this.info = () => {
//         return `${title} was written by ${author}, ${pages} pages, ${read}`;
//     }
// }
const save_book = document.querySelector('#saveBook');
save_book.addEventListener("click",addBookToLibrary);

const books = document.querySelector('.books');

function createBookCard(book,index)
{
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const buttonGroup = document.createElement('div');
    const readButton = document.createElement('button');
    const removeButton = document.createElement('button');
    
    bookCard.classList.add('book-card');
    buttonGroup.classList.add('button-group');
    removeButton.classList.add('removeButton');
    bookCard.setAttribute('id',`${index}`);
    removeButton.setAttribute('id',`${index}`);

    title.textContent = `"${book.title}"`;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    if(book.read==true)
    {
        readButton.textContent = "Read";
        readButton.classList.add('read');

    }
    else
    {
        readButton.textContent = "Not read";

        readButton.classList.add('not-read');
    }
    removeButton.textContent="Remove Book";
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    buttonGroup.appendChild(readButton);
    buttonGroup.appendChild(removeButton);
    bookCard.appendChild(buttonGroup);
    books.appendChild(bookCard);
}

function displayBooks()
{
    myLibrary.forEach((book,index)=>{
        // console.log(book.info());
        createBookCard(book,index);
    })
}

function addBookToLibrary(e) {
    e.preventDefault();
    
    book = getBookDetails();
    // displayBooks();
    if(book)
    {
        dialog.close();
        myLibrary.push(book);
        // createBookCard(book);
        document.getElementById('books').innerHTML = "";
        displayBooks();
    }
}

function removeBookFromLibrary(index) {
    myLibrary.splice(index,1);
    document.getElementById('books').innerHTML = "";
    displayBooks();
}


function getBookDetails()
{   
    const title = document.getElementById('book_title').value;
    const author = document.getElementById('author_name').value;
    const pages = document.getElementById('no_pages').value;
    const isRead = document.getElementById('read_status').checked;
    
    if(title !=='' && author !=='' && pages!=='')
    {
        document.getElementById('book_title').value='';
        document.getElementById('author_name').value='';
        document.getElementById('no_pages').value='';
        document.getElementById('read_status').checked=false;
        return new Book(title,author,pages,isRead);
    }
    else
    {
        return;
    }
}


function exitDialog(event) {
    if (event.target === dialog) {
      dialog.close();
    }
}


const addBookButton = document.querySelector('.addBook');
const dialog = document.querySelector('dialog');
dialog.addEventListener("click", exitDialog);

addBookButton.addEventListener("click",()=>{
    dialog.showModal();
})




function toggleReadStatus(index) {
    myLibrary[index].read = !myLibrary[index].read;
    document.getElementById('books').innerHTML = "";
    displayBooks();
}

document.addEventListener('click', function(event) {
    if (event.target.matches('.removeButton')) {
        const clickedElementId = event.target.id;
        removeBookFromLibrary(clickedElementId);

        // console.log(typeof(clickedElementId));
        // console.log('Clicked element id:', clickedElementId);
    }
    if (event.target.matches('.read') || event.target.matches('.not-read')) {
        const clickedElementId = event.target.parentElement.parentElement.id;
        toggleReadStatus(clickedElementId);
    }
});
