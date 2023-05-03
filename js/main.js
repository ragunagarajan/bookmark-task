//function to handle bookmark

function handleEle(event) {
    event.preventDefault();
    //get the i element
    let iEle = this.getElementsByClassName("fa-bookmark-o");
    iEle = iEle[0];

    //check it has active class name
    if (iEle.className.includes("active")) {
        //if true disable bookmark
        //remove active class name from i
        iEle.classList.remove("active");
    }
    //else enable bookmark
    else {
        //add active class name from i
        iEle.classList.add("active");

        //get bookmark update element
        let bookmarkUpdate = this.parentNode.getElementsByClassName("bookmark-update");
        bookmarkUpdate = bookmarkUpdate[0];
        //show bookmark update element(style.display="block")
        bookmarkUpdate.style.display = "block";
        //autoCloseElement (bookmark-element)
        autoCloseElement();

        //time out function
        function autoCloseElement(element) {
            setTimeout(function () {
                bookmarkUpdate.style.display = "none";
            }, 3000);
        }
    }
}
//get all bookmark element

let bookMarkEle = document.getElementsByClassName("bookMark");

//iterate the html collection

for (let i = 0; i < bookMarkEle.length; i++) {
    //addEventListener for bookmark element
    bookMarkEle[i].addEventListener("click", handleEle);
}
