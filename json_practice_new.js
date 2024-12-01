const data = {
    "library": {
      "name": "City Library",
      "location": "Downtown",
      "books": [
        {
          "title": "JavaScript: The Good Parts",
          "author": "Douglas Crockford",
          "genres": ["Programming", "JavaScript"],
          "published": 2008,
          "copies": [
            {"copyId": 1, "status": "available"},
            {"copyId": 2, "status": "checked_out"},
            {"copyId": 3, "status": "available"}
          ]
        },
        {
          "title": "Clean Code",
          "author": "Robert C. Martin",
          "genres": ["Programming", "Software Engineering"],
          "published": 2008,
          "copies": [
            {"copyId": 4, "status": "checked_out"},
            {"copyId": 5, "status": "available"}
          ]
        },
        {
          "title": "The Pragmatic Programmer",
          "author": "Andrew Hunt, David Thomas",
          "genres": ["Programming", "Software Engineering"],
          "published": 1999,
          "copies": [
            {"copyId": 6, "status": "available"},
            {"copyId": 7, "status": "checked_out"},
            {"copyId": 8, "status": "available"}
          ]
        }
      ]
    }
  }
  

console.log(data)

const bookTitleAuthor = new Map();

const bookData = data.library.books;

for (let i = 0; i < bookData.length; i++) {
    bookTitleAuthor.set(bookData[i].title, bookData[i].author);
}

console.log(bookTitleAuthor);

const titleGenre = new Map();

for (let i = 0; i < bookData.length; i++) {
    titleGenre.set(bookData[i].title, bookData[i].genre);
}

console.log(titleGenre);

const uniqueGenre = new Set();

for (let i = 0; i < bookData.length; i++) {
    for (let j = 0; j < bookData[i].genres.length;j++){
        uniqueGenre.add(bookData[i].genres[j]);
    }
}

console.log(uniqueGenre);

const titleCopyIdStatus = {};

for (let i = 0; i < bookData.length; i++) {
    const bookTitle = bookData[i].title;
    titleCopyIdStatus[bookTitle] = {};
    for (let j = 0; j < bookData[i].copies.length; j++) {
        titleCopyIdStatus[bookTitle][bookData[i].copies[j].copyId] = bookData[i].copies[j].status
    }
}

console.log(JSON.stringify(titleCopyIdStatus));


const finalResult = new Map();

for (const book of bookData) {
    const bookMap = new Map();
    for (const copy of book.copies){
        bookMap.set(copy.copyId, copy.status);
    }
    finalResult.set(book.title,bookMap);
}

console.log(finalResult);

// Keys : book Title
// Values : arrays of copyId


const resultnew = new Map();
for (let i = 0; i < bookData.length; i++) {
    const copyId = []
    for (let j = 0; j < bookData[i].copies.length;j++){
        copyId.push(bookData[i].copies[j].copyId);
    }
    resultnew.set(bookData[i].title,copyId);
}

console.log("Ayush",resultnew)


