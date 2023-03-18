// Write a function named tellFortune that:

// takes 4 arguments: number of children, partner's name, geographic location, job title.

// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

// Call that function 3 times with 3 different values for the arguments.

function random(x) {
    
    return x[Math.floor(Math.random() * x.length)]
}

function tellFortune(firstName, age, married) {

    let nameList = ["Tootlepip", firstName+"ington", "ShaNayNay", "Mc"+firstName+"Face"];
    let newName = random(nameList);
    
    let newAge = age + Math.floor(Math.random() * (5,40));

    if(married === true) {
        relationshipStatus = ["You will be with your current partner", "You Won't be with your current partner"]
    } else relationshipStatus = ["You will have found love", "You won't have found love"]
    let gotWifey = random(relationshipStatus)

    let locationList = ["Bali", "London" , "Australia", "Texas", "Bourton-On-The-Water"];
    let newLocation = random(locationList);

    return `${firstName} - by the time you are ${newAge}, unfortunately - you will have changed your name to ${newName}. However, you will live in ${newLocation}. Lastly, ${gotWifey}`

}
