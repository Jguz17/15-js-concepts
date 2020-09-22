// Constructor method to create object

// function Bike(model, color) {
//     this.model = model,
//     this.color = color

//     this.getDetails = function() {
//         return this.model+' bike is '+this.color
//     }
// }

// const bikeObj1 = new Bike('BMW','BLACK');

// console.log(bikeObj1.getDetails()); //output: BMW bike is BLACK

// ---- two objects have two instances of the constructor function getDetails(). 
// It doesn’t make sense having a copy of getDetails doing the same thing. ----


// Prototype

// ---- When an object is created in JavaScript, JavaScript engine adds a __proto__ property ----
// to the newly created object which is called dunder proto.

// function Bike(model, color) {
//     this.model = model,
//     this.color = color
// }

// Bike.prototype.getDetails = function() {
//     return this.model + ' bike is ' + this.color
// }

// const bike1 = new Bike('Nissan', 'red')

// console.log(bike1.getDetails())

// ---- Using prototype property, object created functions are loaded 
// into memory only once and we can override functions if required. ----


// Practice
function Human(name, age, eyeColor, vitality) {
    this.name = name,
    this.age = age,
    this.eyeColor = eyeColor,
    this.vitality = vitality
}

Human.prototype.getDiagnostics = function() {
    return this
}

const subject_001 = new Human(
    'Johnathan Guzman',
    21,
    'Dark-Brown',
    'Good'
)

const subject_002 = new Human(
    'Tom Holland',
    24,
    'Dark-Brown',
    'Good'
)

// console.log(subject_001.getDiagnostics())
console.log(subject_002.getDiagnostics())