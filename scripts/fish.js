// Import the function that returns a copy of the fish array
import { getFish } from "./database.js"

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = ''

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<div style="padding: 15px">
        <div class="gallery">
        <img class="polaroid" src="${fish.image}">
          <div class="desc">
          <p style="font-size:150%"><b>${fish.name}</b></p>
          <p>Species: ${fish.type}</p>
          <p>Size: ${fish.size} inches</p>
          <p>Diet: ${fish.food}</p>
          <p>Harvest Location: ${fish.location}</p>
          </div>
        </div>
      </div>`
    }

    return htmlString
}