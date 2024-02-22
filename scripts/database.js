const database = {
    fish: [
        {
            name: "Darling",
            image: "images/Black-Skirt-Tetra.jpeg",
            food: "flake food and brine shrimp",
            size: 2,
            type: "Black skirt tetra",
            location: "Petsmart"
        }, {
            name: "Big Man",
            image: "images/Peppered-Corydora.jpeg",
            food: "bloodworms",
            size: 4,
            type: "Peppered corydora",
            location: "Aquatic Critters"
        },{
            name: "Po",
            image: "images/Panda-Corydora.jpeg",
            food: "daphnia and brine shrimp",
            size: 2,
            type: "Panda corydora",
            location: "Seven Seas Aquatics"
        },{
            name: "Zippy",
            image: "images/Zebra-Danio.jpeg",
            food: "flake food",
            size: 2,
            type: "Zebra danio",
            location: "Petsmart"
        },{
            name: "Gemini",
            image: "images/Colombian-Tetra.jpeg",
            food: "brine shrimp",
            size: 3,
            type: "Colombian Tetra",
            location: "Petsmart"
        },{
            name: "Shimmer",
            image: "images/Gold-Corydora.jpeg",
            food: "flake food and bloodworms",
            size: 3,
            type: "Gold corydora",
            location: "Aquatic Critters"
        },{
            name: "Casper",
            image: "images/Xray-Tetra.jpeg",
            food: "flake food",
            size: 1,
            type: "Pristella tetra",
            location: "Seven Seas Aquatics"
        },{
            name: "Flipper Potter",
            image: "images/Albino-Pleco.jpeg",
            food: "flake food and tablets",
            size: 5,
            type: "Albino plecostomus",
            location: "Aquatic Critters"
        },{
            name: "Angel",
            image: "images/Black-Angelfish.jpeg",
            food: "flake food",
            size: 3,
            type: "Black angelfish",
            location: "Aquatic Critters"
        }
    ]
 } 
//exports a copy of our fish
 export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}