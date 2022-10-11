// ======================== Animal Class ========================

class Animal {
    constructor(dietParam, movementParam, reproductionParam){
        this.Type = "Wild"
        this.Diet = dietParam
        this.Movement = movementParam
        this.Reproduction = reproductionParam
    }
    threatened(){
        console.log("Feels threatened, ready to attack.")
    }
    eating(){
        console.log("animal is eating.")
    }
    tame(){
        this.Type = "Tamable"
        return this.Type
    }
}

// ======================== Mammal Class ========================


class Mammal extends Animal{
    constructor(nameParam, dietParam, movementParam, reproductionParam, timeParam){
        super(dietParam, movementParam, reproductionParam)
        this.Name = nameParam
        this.Milk = true
        this.ReproductionTime = timeParam
    }
    threatened(){
        // super.threatened()  //Uncomment if you wish, just was testing super on method
        console.log(`${this.Name} is friendly, don't worry!`)
    }
    vet(hurtParam){
        return hurtParam === true ? `${this.Name} is hurt, I'm taking them to the vet now!` : `${this.Name} is fine.`
    }
}

// First Instatance
const lion = new Mammal("Lion", "Carnivore", ["Running", "Jumping", "Walking", "Creeping"], "Live birth", "About 110 Days")

// console.log(lion)
// console.log(lion.tame())
// lion.eating()
// lion.threatened()
// console.log(lion.vet(true))
// console.log(lion.vet(false))


// Second Instatance
const platypus = new Mammal("Platypus", "Carnivore", ["Swimming", "Walking"], "Lays eggs", "About 27 Days")

// console.log(platypus)
// console.log(platypus.tame())
// platypus.eating()
// platypus.threatened()
// console.log(platypus.vet(true))
// console.log(platypus.vet(false))



class Dog extends Mammal {
    constructor(nameParam, dietParam, breedParam,){
        super(nameParam, dietParam)
        this.Movement = ["Running", "Walking", "Jumping", "Creeping"]
        this.Breed = breedParam
        this.Reproduction = "Live birth"
        this.ReproductionTime = "Roughly 65 days"
        this.barked = this.bark()
    }
    bark(){
        return `${this.Name} is barking to say hello to you!`
    }
    greet(nextDog){
        return `Hello ${nextDog}, I am ${this.Name}! Lets ask our parents for a play date.`
    }
}
const kennel = [
    new Dog("Delta", "Carnivore", "Dobermann"), 
    new Dog("Coco", "Carnivore", "Puddle"),
    new Dog("Bella", "Carnivore", "Chihuahua"),
    new Dog("Max", "Carnivore", "German Shephard"),
    new Dog("Alex", "Carnivore", "Husky"),
    ]

   function loopThroughNGreet(dogNames){
        let num = 1

        for (let i = 0; i < dogNames.length;i++){ 
            // for (let j = num; j < dogNames.length;j++){
                if (i !== 4){
                console.log(dogNames[i].greet(dogNames[i+1].Name))
                // i+=1
                // num+=1
                } else {
                    console.log(dogNames[i].greet(dogNames[0].Name))
                }
            }
            // }
            // Couldn't figure it out with if statement but this worked
            // console.log("Hello Delta, I am Alex! Lets ask our parents for a play date.")
        }
   

    loopThroughNGreet(kennel)
    // console.log(kennel)
    // console.log(kennel[2])

