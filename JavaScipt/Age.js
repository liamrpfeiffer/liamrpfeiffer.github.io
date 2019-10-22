var age = prompt("How old are you?")
if (age === 21) {
    console.log("happy 21st Birthday!!")
}
if (age < 0) {
    console.log ("Error")
}
if (age % 2 !==0) {
    console.log ("Your age is odd!")
}
if (age % Math.sqrt(age) === 0) {
    console.log("Your age is a perfect square!")
}