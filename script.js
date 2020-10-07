const display = document.querySelector('#display')

const inputSize = document.querySelector('#input-size')
const showSize = document.querySelector('#show-size')

const inputFont = document.querySelector('#select-font')
const showFont = document.querySelector('#show-font')

const inputColor = document.querySelector('#input-color')
const showColor = document.querySelector('#show-color')

const inputBackgroundColor = document.querySelector('#input-bg-color')
const showBackgroundColor = document.querySelector('#show-bg-color')

const inputText = document.querySelector('#enter-text')

inputSize.addEventListener('input', handleInput)
inputFont.addEventListener('input', handleInput)
inputColor.addEventListener('input', handleInput)
inputBackgroundColor.addEventListener('input', handleInput)
inputText.addEventListener('input', handleInput)

function handleInput() {
	// Store the input
    const fontSize = inputSize.value + 'px'
    const fontStyle = inputFont.value
    const fontColor = inputColor.value
    const fontBackgroundColor = inputBackgroundColor.value
    const text = inputText.value
	// Set the style 
    display.style.fontSize = fontSize
    display.style.fontFamily = fontStyle
    display.style.color = fontColor
    display.style.backgroundColor = fontBackgroundColor
	// Show to user
    showSize.innerHTML = fontSize
    showFont.innerHTML = fontStyle
    showColor.innerHTML = fontColor
    showBackgroundColor.innerHTML = fontBackgroundColor
    display.innerHTML = text
}