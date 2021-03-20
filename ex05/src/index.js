var myPetsArray = [
    {
        animalType: "Dog",
        name: "Pujdo"
    },
    {
        animalType: "Cat",
        name: "Maca"
    },
    {animalType: "Bird",
    name: "Tweety"
}
];
function myPetsFunction(pets){
    return myPetsArray[pets];
}
console.log(myPetsFunction(myPetsArray[1].name));
module.exports =myPetsFunction;
module.exports.myPets = myPetsArray;