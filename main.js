// Write a function named tellFortune that:

// takes 4 arguments: number of children, partner's name, geographic location, job title.

// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

// Call that function 3 times with 3 different values for the arguments.

function tellFortune(firstName, age, married) {

    if(married === true) {
        relationshipStatus = ["You will be with your current partner", "You Won't be with your current partner"]
    } else relationshipStatus = ["You will have found love", "You won't have found love"]

    let gotWifey = relationshipStatus[Math.floor(Math.random() * relationshipStatus.length)]

    let newAge = age + Math.floor(Math.random() * (5,40));

    let nameList = ["Tootlepip", firstName+"ington", "ShaNayNay", "Mc"+firstName+"Face"]
    let newName = nameList[Math.floor(Math.random() * nameList.length)];

    let locationList = ["Bali", "London" , "Australia", "Texas", "Bourton-On-The-Water"]
    let newLocation = locationList[Math.floor(Math.random() * locationList.length)];

    return `${firstName} - by the time you are ${newAge}, unfortunately - you will have changed your name to ${newName}. However, you will live in ${newLocation}. Lastly, ${gotWifey}`

}
