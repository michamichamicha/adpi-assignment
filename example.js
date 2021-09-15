import { Validator } from './validator'
import cars from "./data/schemas/cars";

const validator = new Validator()

validator.setSchema(cars)

const validationResult = validator.validate({
    type: 'Astra',
    brand: 'Opel',
    abc: Math.PI,
    milage: 199999.99,
    extras: 'none',
    ob: []
})

console.log(validationResult.isValid(), validationResult)
