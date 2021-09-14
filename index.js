import { Validator } from './validator'
import cars from "./data/schemas/cars";

const validator = new Validator()

validator.setSchema(cars)

const validationResult = validator.validate({
    gfdgfdsgfds: 2,
    type: 'Astra',
    brand: 'Opel',
    abc: Math.PI,
    ob: []
})

console.log(validationResult.isValid(), validationResult)
