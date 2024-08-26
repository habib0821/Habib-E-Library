let addBtn = document.querySelector(".addBtn");
let bookInput = document.querySelector(".bookInput")
let bookList = document.querySelector(".bookList")

loadBook();


function addBook(e){
    e.preventDefault()
    let book = bookInput.value.trim();
    if(book){
        createBookElement(book);
        bookInput.value = "";
        saveBook();
    }
    else{
        alert("Please enter any book name here!");
    }
}
function createBookElement(book){
    let bookIcon = document.createElement("button");
    bookIcon.className = "book fa-solid fa-book"

    let h3 = document.createElement("h3")
    let li = document.createElement("li");
    h3.textContent = book


    let borrowBtn = document.createElement("button");
    borrowBtn.className = "fa-solid fa-book-open borrowBook "



    li.appendChild(h3);
    li.appendChild(borrowBtn);
    bookList.appendChild(li);

    borrowBtn.addEventListener("click", function(){
        bookList.removeChild(li);
    });
}

function saveBook(){
    let books = [];
    bookList.querySelectorAll("li").forEach(function(items){
        books.push(items.textContent.trim());
    });
    localStorage.setItem("books", JSON.stringify(books))
}

function loadBook(){
    let books = JSON.parse(localStorage.getItem("books"));
    books.forEach(createBookElement);
}

addBtn.addEventListener("click", addBook)


