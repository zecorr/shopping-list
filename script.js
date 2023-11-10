// long term project - create tags for category lists. 
// Be able to organize list by different categories / tags
// Be able to save lists
// Be able to set timelines on when new items will appear (cyclical items)

// Body
const body = document.querySelector("body")
// body CSS
body.style.cssText = `
    background-color: rgb(62, 101, 218);
    `

// Body Container Div
const bodyContainer = document.createElement("div")
body.appendChild(bodyContainer)
// bodyContainer CSS
bodyContainer.style.cssText = `
    // border: 2px solid red;
    display: flex;
    justify-content: center;
    align-items : center;
    padding: 10px;
    flex-direction: column;
    `

// Heading Div
const heading = document.createElement("div")
bodyContainer.appendChild(heading)
heading.textContent = "Shopping List"
// heading CSS
heading.style.cssText = `
    // border: 2px solid green;
    padding: 20px;
    margin: 20px;
    font-size: 36px;
    `

// Input Container Div
const inputContainer = document.createElement('div')
bodyContainer.appendChild(inputContainer)
inputContainer.textContent = `Enter a new item :`
// inputContainer CSS
inputContainer.style.cssText = `
    // border: 2px solid yellow;
    display: flex;
    padding: 5px;
    `

// Form element
const form = document.createElement('form')
inputContainer.appendChild(form)
// form CSS
form.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 2px solid red;
    `

// Input element
const input = document.createElement('input')
form.appendChild(input)
input.setAttribute("type", "text")
input.placeholder = "Raw Milk, Beef, Cheese, etc..."
// input CSS
input.style.cssText = `
    margin: 0 5px;
    `

// "Add Item" Button 
const itemList = []
let divId = 0
// Button element
const addItemButton = document.createElement('button')
form.appendChild(addItemButton)
addItemButton.textContent = "Add item"
// addItemButton CSS
addItemButton.style.cssText = `
    border-radius: 5px;
    font-size : 12px;
    padding : 1px 1em;
    `

// Handle on click function for Add Item button
const createNewItem = function (event){
    // Prevent the form from submitting (submit causes refresh)
    event.preventDefault() 
    //Get the input text value
    const inputValue = input.value.trim()
    // Check if the input is not empty
    if (inputValue !== ''){
        // Add the input value to the itemList array
        itemList.push(inputValue)
        // Can do further processing with the itemList array here
        console.log('Item added: ', inputValue)
        // Add inputValue to listItem
        addListItem(inputValue)
        // Clear the input field
        input.value = ''
    }
}

// Div for the Unordered List
const ulDiv = document.createElement('div')
bodyContainer.appendChild(ulDiv)
// ulDiv CSS
ulDiv.style.cssText = `
    display: flex;
    padding: 20px;
    // border: 2px solid red;
    margin: 40px;
    `

// The Unordered List
const unorderedList = document.createElement('ul')
ulDiv.appendChild(unorderedList)
// unorderedList CSS
unorderedList.style.cssText = `
    // border: 2px solid yellow;
    display: flex;
    flex-direction: column;
    `

// Function to add list items
const addListItem = function (text){
    // set text = to input value
    text = input.value
    // create new div for every li
    const liDiv = document.createElement('div')
    unorderedList.appendChild(liDiv)
    liDiv.setAttribute('id', divId)
    // liDiv CSS
    liDiv.style.cssText = `
        // border: 2px solid red;
        display: flex;
        justify-content: space-between;
        `
    // create new li within liDiv containing input value
    const listItem = document.createElement('li')
    liDiv.appendChild(listItem)
    listItem.textContent = text
    // button element
    const removeButton = document.createElement('button')
    liDiv.appendChild(removeButton)
    removeButton.textContent = "delete"
    removeButton.style.cssText = `
        margin: 0 20px;
        border-radius: 5px;
        `
    removeButton.addEventListener('click', function(){
        const target = document.getElementById(liDiv.id)
        target.parentElement.removeChild(target)
    })
    divId++
}

// Add item to shopping list
addItemButton.addEventListener('click', createNewItem)

// can attempt to change list items to paragraphs.
// may help with wrapping text.