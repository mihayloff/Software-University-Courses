﻿var collection = [
    { "book": "The Grapes of Wrath", "author": "John Steinbeck", "price": "34,24", "language": "French" },
    { "book": "The Great Gatsby", "author": "F. Scott Fitzgerald", "price": "39,26", "language": "English" },
    { "book": "Nineteen Eighty-Four", "author": "George Orwell", "price": "15,39", "language": "English" },
    { "book": "Ulysses", "author": "James Joyce", "price": "23,26", "language": "German" },
    { "book": "Lolita", "author": "Vladimir Nabokov", "price": "14,19", "language": "German" },
    { "book": "Catch-22", "author": "Joseph Heller", "price": "47,89", "language": "German" },
    { "book": "The Catcher in the Rye", "author": "J. D. Salinger", "price": "25,16", "language": "English" },
    { "book": "Beloved", "author": "Toni Morrison", "price": "48,61", "language": "French" },
    { "book": "Of Mice and Men", "author": "John Steinbeck", "price": "29,81", "language": "Bulgarian" },
    { "book": "Animal Farm", "author": "George Orwell", "price": "38,42", "language": "English" },
    { "book": "Finnegans Wake", "author": "James Joyce", "price": "29,59", "language": "English" },
    { "book": "The Grapes of Wrath", "author": "John Steinbeck", "price": "42,94", "language": "English" }
];

// Group all books by language and sort them by author (if two books have the same author, sort by price)
var filtered = _.sortBy(collection, function(book) {
    return [book.author, book.price];
});

filtered = _.groupBy(filtered, function(book) {
    return book.author;
});

console.log(filtered);

// Get the average price of the books
var average = _.reduce(collection, function (memo, book) {
    return memo + parseFloat(book.price);
}, 0) / collection.length;

console.log(average);

// Get all books in English or German, with price below 30.00, and group them by author

var filtered = _.reject(collection, function(book) {
    return parseFloat(book.price) > 30;
});

filtered = _.reject(filtered, function (book) {
    return book.language !== "English" && book.language !== "German";
});

filtered = _.groupBy(filtered, function (book) {
    return book.author;
});

console.log(filtered);