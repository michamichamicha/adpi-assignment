import { Validator } from './validator'
import cars from "./data/schemas/cars";

const validator = new Validator()

validator.setSchema(cars)

const validationResultIncorrect = validator.validate({
    type: 'Astra',
    brand: 'Opel',
    abc: Math.PI,
    milage: 199999.99,
    extras: 'none',
    ob: []
})

console.log('Validating an incorrect payload:')
console.log(validationResultIncorrect.isValid(), validationResultIncorrect)
console.log('----')


const validationResultCorrect = validator.validate({
    type: 'Astra',
    brand: 'Opel',
    abc: Math.PI,
    milage: 199999.99,
    extras: [],
    ob: []
})

console.log('Validating a correct payload:')
console.log(validationResultCorrect.isValid(), validationResultCorrect)
console.log('----')
console.log('Done')
