import { getFish } from './database.js'
// Import the FishList function from the correct module
import { FishList } from './fish.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".fishes")


parentHTMLElement.innerHTML = FishList()
const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}