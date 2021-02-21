export {} 
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}
type Drink = [string, boolean, number]

const pepsi: Drink = ['brown', true, 40]
const sprite: Drink = ['clear', true, 50]
const tea: Drink = ['brown', false, 60]

//Tuple - hard to understand
const carSpecs: [number, number] = [400, 3354]

//Object easy to understand
const carStats = {
    horsePower: 400,
    weight: 3354
}