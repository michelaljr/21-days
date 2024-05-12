class Book {
    title;
    author;
    editor;
    yearPub;
    available;

constructor (title, author, editor, yearPub) {
    this.title = title
    this.author = author
    this.editor = editor
    this.yearPub = yearPub
    this.available = true;  
}
    
}
let bookArray = []

bookArray.push(new Book("book1", "marcos", "editor A,", 2001))
bookArray.push(new Book("book2", "marcos", "editor F,", 1997))
bookArray.push(new Book("1", "mike", "jr", 1981))
bookArray.push(new Book("book4", "Joao", "editor A,", 2005))
bookArray.push(new Book("poder sem limites", "tony robbins", "ed", 1998))

class Library {
    name;
    address;
    cellphone;
    collection = [];


    constructor (name, address, cellphone, bookcollection) {
         this.name = name
         this.address = address
         this.cellphone = cellphone
         this.collection = bookcollection;
    }

    titleSearch(title){
    this.collection.forEach(Item => {
        if (Item.title == title) {
            console.log(Item)}
        })
    }

    BookLend(title) {
        this.collection.forEach(Item => {
            if (Item.title == title) {
                console.log(Item)}
                if(Item.available == true){
                    Item.available = false;
                    console.log("lend book");
                    return true;
                }else {
                    console.log("book not available");
                    return false;
                }
            })
     }

     ReturnBook(title){
        this.collection.forEach(Item => {
            if (Item.title == title) {
                console.log(Item)}
                if(Item.available == false){
                    console.log("book returned");
                    Item.available = true;
                    return true;
                }
            })
     }
 }

let library1 = new Library("mikes library", "street", "333", bookArray)
library1.titleSearch("poder sem limite")

continueUntil = true;

 

while(continueUntil){

    let action = prompt("Welcome to Mike's library, what would you like to do?\n1. Borrow a book. \n2. Return a book.\n3. Exit");

 switch (action) {
        case "1":
           
            title = prompt("You'd like to borrow a book. Which book?")
            library1.BookLend(title)
            break;
 
        case "2":
            title = prompt("You'd like to return a book. Which book?")
            library1.ReturnBook(title)
            break;
        case "4":
            title = prompt("Title Search? Give name");
            library1.titleSearch(title);
            break;
        case "3":
            continueUntil = false;
            break;
        default:
            console.log("invalid option");
            break;
        }
}
