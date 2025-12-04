const books = [
  {
    bookName: "JavaScript Guide",
    author: "John Doe",
    pages: 350,
    price: 499,
    rating: 4.3,
    category: "Programming",
    publishedYear: 2019,
  },
  {
    bookName: "React Mastery",
    author: "Siddharth Sharma",
    pages: 280,
    price: 599,
    rating: 4.8,
    category: "Programming",
    publishedYear: 2023,
  },
  {
    bookName: "History of India",
    author: "R. Sharma",
    pages: 420,
    price: 399,
    rating: 4.1,
    category: "History",
    publishedYear: 2015,
  },
  {
    bookName: "CSS Basics",
    author: "Meena Gupta",
    pages: 180,
    price: 199,
    rating: 3.9,
    category: "Design",
    publishedYear: 2020,
  },
  {
    bookName: "Node.js Deep Dive",
    author: "Alex Ron",
    pages: 510,
    price: 699,
    rating: 4.7,
    category: "Programming",
    publishedYear: 2021,
  },
];

// 1. Get all books name with rating greater than 4.5
// 2. Get the names of all books published after 2020
// 3. Calculate the total price of all Programming books
// 4. Find the average number of pages of all books in the Design category
// 5. Get a list of authors who have written books with a rating less than 4.0
// 6. Find the most expensive book in the collection
// 7. Get all books that have more than 300 pages and are priced below 500
// 8. Create a new array with book names and their respective authors


// 1)
let a = books.filter((el) => {
  return el.rating > 4.5;
}).map((el) => {
  return el.bookName;
})
console.log(a);


// 2)
let b = books.filter((el) => {
  return el.publishedYear > 2020;
}).map((el) => {
  return el.bookName;
})
console.log(b);


// 3)
let c = books.reduce((acc , el) => {
    return el.category == "Programming" ? acc + el.price : acc;
}, 0)
console.log(c);


// 4)
let d = books.reduce((acc , el) => {
    return el.category == "Design" ? acc + el.pages : acc;
}, 0)
let d1 = books.reduce((acc, el) => {
    return el.category == "Design" ? acc + 1 : acc;
}, 0)
console.log(d/d1);


// 5)
let e = books.filter((el) => {
  return el.rating < 4.0;
}).map((el) => {
  return el.author;
})
console.log(e);


// 6)
let f = books.reduce((acc, el) => {
  return el.price>acc.price || acc == 0 ? el : acc;
}, 0)
console.log(f.bookName);


// 7)
let g = books.filter((el) => {
  return el.pages > 300 && el.price < 500;
}).map((el) => {
  return el.bookName;
})
console.log(g);


// 8)
let h = books.map((el) => 
{
    let ob = {
      "bookName" : el.bookName,
      "author" : el.author
    }
    return ob;
})
console.log(h);