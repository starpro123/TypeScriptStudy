const carMakers: string[] = ['ford', 'toyota']
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
  ['f150'],['camaro']
]

// Help with inference when extracting values

const car = carMakers[0];
console.log(car)

//Flexible types
const importantDates = [new Date(), '2030-10']

importantDates.push('3')
// importantDates.push(3)