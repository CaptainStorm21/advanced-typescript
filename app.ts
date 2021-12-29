import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
import * as util from './lib/utilityFunctions';

function PrintBookInfo(item: Book): void {
    console.log(`${item.title} was  authored by ${item.author}`)
}

function PrintBookInfo1({
    title: booktitle,
    author: bookauthor
}): void {
    console.log(`${booktitle} was  authored by ${bookauthor}`)
}



let [book1, book2] = util.GetAllBooks();

//PrintBookInfo(book1);
//PrintBookInfo(book2);

function LogFavoriteBooks([book1, book2, ...others]: Book[]) {
    PrintBookInfo(book1);
    PrintBookInfo(book2);
}

// LogFavoriteBooks(util.GetAllBooks());

let { title, author } = book1;
console.log(title);
console.log(author);

//let { title: booktitle, author: bookauthor} = book1;
//console.log(booktitle);
//console.log(bookauthor);

PrintBookInfo1(book1);
PrintBookInfo1(book2)