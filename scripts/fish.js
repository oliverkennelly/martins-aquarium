// Import the function that returns a copy of the fish array
import { getFish } from "./database.js"

export const mostHolyFish = () => {
    const holyFish = []
    const fishes = getFish()
    for (const fish of fishes) {
        if (fish.size % 3 === 0){
            holyFish.push(fish)
        }
    }
    return holyFish
}

export const soldierFish = () => {
    const soldiers = []
    const fishes = getFish()
    for (const fish of fishes) {
        if (fish.size % 5 === 0){
            soldiers.push(fish)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    const regularFish = []
    const fishes = getFish()
    for (const fish of fishes) {
        if (fish.size % 3 !== 0 && fish.size % 5 !== 0){
            regularFish.push(fish)
        }
    }
    return regularFish
}

export const FishList = (fishes) => {
    let htmlString = ''
    for (const fish of fishes) {
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