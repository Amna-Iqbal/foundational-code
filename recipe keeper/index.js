let myRecipes = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const recipesFromLocalStorage = JSON.parse(localStorage.getItem("myRecipes"))

if (recipesFromLocalStorage) {
    myRecipes = recipesFromLocalStorage
    render(myRecipes)
}

tabBtn.addEventListener("click", function() {    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myRecipes.push(tabs[0].url)
        localStorage.setItem("myRecipes", JSON.stringify(myRecipes))
        render(myRecipes)
    })
})

function render(recipes) {
    let listItems = ""
    for (let i = 0; i < recipes.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${recipes[i]}'>
                    ${recipes[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myRecipes = []
    render(myRecipes)
})

inputBtn.addEventListener("click", function() {
    myRecipes.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myRecipes", JSON.stringify(myRecipes))
    render(myRecipes)
})
