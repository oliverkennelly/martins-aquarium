import { FishList, mostHolyFish, soldierFish, nonHolyFish } from './fish.js'

const parentHTMLElement = document.querySelector(".fishes")

parentHTMLElement.innerHTML = FishList(mostHolyFish())
parentHTMLElement.innerHTML += FishList(soldierFish())
parentHTMLElement.innerHTML += FishList(nonHolyFish())
