// Body
const body = document.querySelector("body")

// Body Container
const bodyContainer = document.createElement("div")
body.appendChild(bodyContainer)
bodyContainer.style.cssText = `
    border: 2px solid red;
    display: flex;
    justify-content: center;
    align-items : center;
    padding: 10px;
    flex-direction: column;
    `

// Heading
const heading = document.createElement("div")
bodyContainer.appendChild(heading)
heading.textContent = "Shopping List"
heading.style.cssText = `
    border: 2px solid green;
    padding: 20px;
    margin: 20px;
    font-size: 36px;
    `

// Shopping List
const slDiv = document.createElement('div')
bodyContainer.appendChild(slDiv)
slDiv.textContent = `Enter a new item :`
slDiv.style.cssText = `
    border: 2px solid yellow;
    display: flex;
    padding: 5px;
    `

// Form
//// Create Form
const form = document.createElement('form')
slDiv.appendChild(form)
form.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center
    `

//// Create Input
const input = document.createElement('input')
form.appendChild(input)
input.setAttribute("type", "text")
input.style.cssText = `
    margin: 0 5px;
    `

//// Create "Add Item" button
const addItem = document.createElement('button')
form.appendChild(addItem)
addItem.textContent = "Add item"
addItem.style.cssText = `
    border-radius: 5px;
    font-size : 12px;
    padding : 1px 1em;
    `

// add item button to create UL with a remove button next to it


const ulDiv = document.createElement('div')
const unorderedList = document.createElement('ul')
const listItem = document.createElement('li')

bodyContainer.appendChild(ulDiv)
ulDiv.style.cssText = `
    padding: 20px;
    border: 2px solid red;
    margin: 40px;
    `
ulDiv.appendChild(unorderedList)

// Function to add list items
const addLi = function (){
    unorderedList.appendChild(document.createElement('li'))
}

addLi()
addLi()
addLi()
