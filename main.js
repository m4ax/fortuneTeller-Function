// Write a function named tellFortune that:

// takes 4 arguments: number of children, partner's name, geographic location, job title.

// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

// Call that function 3 times with 3 different values for the arguments.


function tellFortune(firstName, age,) {

    let newAge = age + Math.floor(Math.random() * (5,40));

    let nameList = ["Barry", "Tony", "ShaNayNay", "Trevington"]
    let newName = nameList[Math.floor(Math.random() * nameList.length)];
    return `${firstName} is your current name you are currently ${age} years old. However, by the time you are ${newAge}, unfortunately - you will have changed your name to ${newName} and you will have become a Chicken Nugget`

}
