console.log("hey")

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
const slCommand = document.createElement('div')
bodyContainer.appendChild(slCommand)
slCommand.textContent = "Enter a new item: "
slCommand.style.cssText = `
    border: 2px solid yellow;
    display: flex;

`



