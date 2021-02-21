export {} 
const carMakers = ['ford', 'toyota', 'chevy']
const dates = [new Date(), new Date()]

const carsByMake: string[][] = []

//Help with inference when extracting values
const car = carMakers[0]
const myCar = carMakers.pop()

//Help with 'map'

carMakers.map((car: string): string => {
    return car.toUpperCase()
});

//Flexible Types
const importantDates: (Date | string)[] = []

importantDates.push('string');
importantDates.push(new Date());
