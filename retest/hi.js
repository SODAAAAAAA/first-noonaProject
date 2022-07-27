let animals= [ "Aardvark", "Albatross", "Alligator", "Alpaca", "Ant", "Ape", "Armadillo", "Donkey", "Baboon", "Badger", "Barracuda", "Bat", "Bear", "Beaver", "Bee", "Bison", "Cat", "Caterpillar", "Cattle", "Chamois", "Cheetah", "Chicken", "Chimpanzee", "Chinchilla", "Chough", "Clam", "Cobra", "Cockroach", "Cod", "Cormorant", "Dugong", "Dunlin", "Eagle", "Echidna", "Eel", "Eland", "Elephant", "Elk", "Emu", "Falcon", "Ferret", "Finch", "Fish", "Flamingo", "Fly", "Fox", "Frog", "Gaur",  "Gazelle", "Gerbil", "Giraffe", "Grasshopper", "Heron", "Herring", "Hippopotamus", "Hornet", "Horse", "Kangaroo", "Kingfisher", "Koala", "Kookabura", "Moose", "Narwhal", "Newt", "Nightingale", "Octopus", "Okapi", "Opossum",  "Quail", "Quelea", "Quetzal", "Rabbit",  "Raccoon", "Rail", "Ram", "Rat", "Raven", "Red deer", "Sandpiper", "Sardine", "Sparrow", "Spider", "Spoonbill", "Squid", "Squirrel", "Starling", "Stingray", "Tiger", "Toad", "Whale", "Wildcat", "Wolf", "Worm", "Wren", "Yak", "Zebra"]

console.log(animals)

animals.pop()
console.log(animals)

animals.push("Dog")
console.log(animals)

animals.push("Mosquito","Mouse","Mule")
console.log(animals)

console.log(animals.includes("Human"))

console.log(animals.includes("Cat"))

animals[animals.indexOf("Red deer")] = "Deer"
console.log(animals)

animals.splice(animals.indexOf("Spider"), 3)
console.log(animals)

animals.splice(animals.indexOf("Tiger"))
console.log(animals)

let Bnimals = animals.slice(animals.indexOf("Baboon"),animals.indexOf("Bison")+1)
console.log(Bnimals)


let num = 0

if (num > 0) {
    console.log("양성입니다")
} else if (num < 0) {
    console.log("음성입니다")
} else if (num == 0) {
    console.log("0 입니다")
}


let score = 95
let grade = ""

if (90 <= score && score <= 100) {
    grade = "A"
} else if (80 <= score && score < 90) {
    grade = "B"
} else if (70 <= score && score < 80) {
    grade = "C"
} else if (60 <= score && score < 70) {
    grade = "D"
} else if (0 <= score && score < 59) {
    grade = "F"
} else {
    grade = "?"
}

console.log(grade)

let skills = ["HTML","CSS","Javascript","React"]

if (skills.includes("Javascript") && skills.includes("React")){
    console.log("합격")
} else if (skills.includes("Javascript") || skills.includes("React")){
    console.log("예비")
} else {
    console.log("탈락")
}

for(let i=1; i<101; i++) {
    console.log(i)
}

for(let i=1; i<101; i+=2) {
    console.log(i)
}

for(let i=1; i<=50; i++) {
    let numberValue = i.toString()
    let result = ""

    for(let j=0; j<numberValue.length; j++) {
        if(numberValue[j] == "3" || numberValue[j] == "6" || numberValue[j] == "9")
        result+="짝"
    }
    console.log(result.length>0 ? result : i)
}

let nonDivide = 2
let isPrime = true

if (nonDivide === 1) {
    console = false;
}
for(let i=2; i<)