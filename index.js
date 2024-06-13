var popupoverlay = document.querySelector(".popup-overlay")
var popup = document.querySelector(".popupbox")
var btn = document.getElementById("add-popup-button")

btn.addEventListener("click" , function(){
    popupoverlay.style.display = "block"
    popup.style.display = "block"
})

var cbtn = document.getElementById("cancel-popup")

cbtn.addEventListener("click" , function(event){
    event.preventDefault()
    popup.style.display = "none"
    popupoverlay.style.display = "none"
})

var container = document.querySelector(".container")
var abtn = document.getElementById("add-book")
var booktitlein = document.getElementById("book-title-input")
var bookauthorin = document.getElementById("Book-author-input")
var bookdesc = document.getElementById("book-description-input")


abtn.addEventListener("click" , function(event){
    event.preventDefault()
    var div =document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h2>${booktitlein.value}</h2>              
                     <h4>${bookauthorin.value}</h4>
                     <p>${bookdesc.value}</p>
                     <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popup.style.display = "none"
    popupoverlay.style.display = "none"
})

function deletebook(event){
    event.target.parentElement.remove()
}
