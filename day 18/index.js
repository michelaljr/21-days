// Creating class book

class Book {
    Title
    Author
    Editor
    YearPublished
    Availablity = true
    constructor(title, author, editor, yearPublished) {
        this.Title = title
        this.Author = author
        this.Editor = editor
        this.YearPublished = yearPublished
    }
}

// Creating objects book class
let books = []
books.push(new Book("book1", "marcos", "editor A,", 2001))
books.push(new Book("book2", "marcos", "editor F,", 1997))
books.push(new Book("book3", "Carlos", "editor F,", 2010))
books.push(new Book("book4", "Joao", "editor A,", 2005))
books.push(new Book("book5", "Fabio", "editor C,", 2020))

// Creat class library
class Library { 
    Name
    Address
    Telephone
    BookCollection = []
    constructor(name, telephone, address, collection) {
        this.Name = name
        this.Telephone = telephone
        this.Address = address
        this.BookCollection = collection
    }

    BookFromTitle(title) {
        this.BookCollection.forEach(book => {
            if (book.Title == title) {
                console.log(book)
            }
        })
    }

    LendBook(title) {
        let lended = false
        this.BookCollection.forEach(book => {
            if(book.Title == title) {
                if (book.Availablity == true) {
                book.Availablity = false
                lended = true
                }
            }
        })
        if (lended) {
            return true
        } else {
            return false
        }
    }

    ReturnBook(title) {
        books.forEach(book => {
            if(book.title == title) {
                book.Availablity = true
                console.log("Book returned")
            }
        })
    }
}

let library = new Library("Library Mike", "123456", "Rua 2")

library.BookFromTitle("book2")
library.LendBook("book1")
library.ReturnBook("book1")