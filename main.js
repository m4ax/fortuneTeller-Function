// Write a function named tellFortune that:

// takes 4 arguments: number of children, partner's name, geographic location, job title.

// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

// Call that function 3 times with 3 different values for the arguments.


function tellFortune(firstName, age,) {

    let newAge = age + Math.floor(Math.random() * (5,40));
    let newName = ["Barry", "Tony", "ShaNayNay", "Trevington"]

    return `${firstName}, you are now, ${age}, when you are ${newAge} you will become a Chicken Nugget`

}

