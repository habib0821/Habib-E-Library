let addBtn = document.querySelector(".addBtn");
let bookInput = document.querySelector(".bookInput")
let bookList = document.querySelector(".bookList")


function addBook(e){
    e.preventDefault()
    let book = bookInput.value.trim();
    if(book){
        createBookElement(book);
        bookInput.value = "";
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
    // li.innerHTML = h3;


    let borrowBtn = document.createElement("button");
    borrowBtn.className = "fa-solid fa-book-open borrowBook "



    // li.appendChild(bookIcon);
    li.appendChild(h3);
    li.appendChild(borrowBtn);
    bookList.appendChild(li);

    borrowBtn.addEventListener("click", function(){
        bookList.removeChild(li);
    });
}

addBtn.addEventListener("click", addBook)

