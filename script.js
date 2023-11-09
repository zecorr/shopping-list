// create tags for category lists. Be able to organize list by different categories

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

// Shopping List Action Area
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
input.placeholder = "Milk, Beef, Cheese, etc..."
input.style.cssText = `
    margin: 0 5px;
    `

//// Create "Add Item" button
const itemList = []

const addItemButton = document.createElement('button')
form.appendChild(addItemButton)
addItemButton.textContent = "Add item"
addItemButton.style.cssText = `
    border-radius: 5px;
    font-size : 12px;
    padding : 1px 1em;
    `


const createNewItem = function (event){
    event.preventDefault() // Prevent the form from submitting (causes refresh)
    //Get the input text value
    const inputValue = input.value.trim()
    // Check if the input is not empty
    if (inputValue !== ''){
        // Add the input value to the itemList array
        itemList.push(inputValue)
        // Can do further processing with the itemList array here
        console.log('Item added: ', inputValue)
        // Add inputValue to listItem
        addLi(inputValue)
        // Clear the input field
        input.value = ''
    }
}


// Create new input item upon clicking Add item button
addItemButton.addEventListener('click', createNewItem)

// add item button to create UL (check0) with a remove button next to it

const ulDiv = document.createElement('div')
bodyContainer.appendChild(ulDiv)
const unorderedList = document.createElement('ul')
ulDiv.appendChild(unorderedList)

ulDiv.style.cssText = `
    display: flex;
    padding: 20px;
    border: 2px solid red;
    margin: 40px;
    `

unorderedList.style.cssText = `
    border: 2px solid yellow;
    display: flex;
    flex-direction: column;

    `

// Function to add list items
const addLi = function (text){
    text = input.value
    const liDiv = document.createElement('div')
    unorderedList.appendChild(liDiv)
    liDiv.style.cssText = `
        border: 2px solid red;
        display: flex;
        `
    const listItem = document.createElement('li')
    liDiv.appendChild(listItem)
    listItem.style.cssText = `
        border: 2px solid lightgreen;
        `
    const removeButton = document.createElement('button')
    liDiv.appendChild(removeButton)
    removeButton.textContent = "remove"

    listItem.textContent = text

}

