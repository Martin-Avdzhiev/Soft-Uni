class LibraryCollection{
    constructor(capacity){
        this.capacity = capacity;
        this.books = [];
    }
    addBook (bookName, bookAuthor){
        if(this.books.length>= this.capacity){
            throw new Error('Not enough space in the collection.');
        }
        this.books.push({bookName,bookAuthor,payed: false});
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }
    payBook(bookName) {
        const searchBook = this.books.find(x=> x.bookName === bookName);
        if(!searchBook){
            throw new Error(`${bookName} is not in the collection.`);
        }
        if(searchBook.payed){
             throw new Error(`${bookName} has already been paid.`);
        }
        searchBook.payed = true;
        return `${bookName} has been successfully paid.`;
    }
    removeBook(bookName){
        const searchBook = this.books.find(x=> x.bookName === bookName);
        if(!searchBook){
            throw new Error("The book, you're looking for, is not found.");
        }
        if(!searchBook.payed){
             throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }
        const index = this.books.map(x=> x.bookName).indexOf(bookName);
        this.books.splice(index,1);
        return `${bookName} remove from the collection.`;
    }
    getStatistics(bookAuthor){
        
        if(!bookAuthor){
            const result = [];
            const emptySlots = Number(this.capacity) - Number(this.books.length);
            result.push(`The book collection has ${emptySlots} empty spots left.`);
            this.books.sort((a,b)=> a.bookName.localeCompare(b.bookName));
            for (const book of this.books){
                let paid = '';
                if(book.payed){
                    paid = 'Has Paid';
                }
                else {
                    paid = 'Not Paid'
                }
                result.push(`${book.bookName} == ${book.bookAuthor} - ${paid}.`);
            }
            return result.join('\n');
        }
        const filterArray = this.books.filter(x=> x.bookAuthor == bookAuthor);
        if(filterArray.length == 0){
            throw new Error(`${bookAuthor} is not in the collection.`);
        }
        else {
            const result = [];
            for (const book of filterArray){
                let paid = '';
                if(book.payed){
                    paid = 'Has Paid';
                }
                else {
                    paid = 'Not Paid'
                }
                result.push(`${book.bookName} == ${book.bookAuthor} - ${paid}.`);
            }
            return result.join('\n');
        }
    }
}

