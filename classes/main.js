// Method 1

// class Cereal {
//     constructor(name, milkType) {
//         this.name = name,
//         this.milkType = milkType
//     }

//     getCereal() {
//         return `*Pouring a bowl of ${this.name}, with some ${this.milkType} milk*`
//     }
// }


// Method 2

class Cereal {
    constructor(name, milkType) {
        this.name = name,
        this.milkType = milkType
    }
}

Cereal.prototype.getCereal = function() {
    return `*Pouring a bowl of ${this.name}, with some ${this.milkType} milk*`
}


const frostedFlakes = new Cereal(
    'Frosted Flakes',
    'Cow'
)

console.log(frostedFlakes.getCereal())