const myLibrary = [];

function Book(title,author,pages,read)
{
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info = () => {
        return `${title} was written by ${author}, ${pages} pages, ${read}`;
    }
}
function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks()
{
    myLibrary.forEach((book)=>{
        console.log(book.info());
    })
}


//const book1 = new Book("King","Man",100,"not read yet.");
//const book2 = new Book("Queen","Woman",200,"not read yet.");