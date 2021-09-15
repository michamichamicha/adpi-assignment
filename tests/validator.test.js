import {Validator} from "../validator";
import cars from "../data/schemas/cars";
import payloadCorrectCars from "../tests/payloads/cars.correct";
import payloadIncorrectCars from "../tests/payloads/cars.incorrect";

describe('validator', () => {
    const validator = new Validator()
    test('has a setSchema method', () => {
        expect(typeof validator.setSchema).toBe('function')
    })

    test('throws exception when setting an empty schema', () => {
        expect(() => {
            validator.setSchema()
        }).toThrowError()
        expect(() => {
            validator.setSchema(true)
        }).toThrowError()
        expect(() => {
            validator.setSchema([])
        }).toThrowError()
    })

    test('can set schema successfully', () => {
        validator.setSchema(cars)
        expect(validator.schema).toBe(cars)
    })

    test('passes validation with correct payload', () => {
        validator.setSchema(cars)
        expect(validator.validate(payloadCorrectCars).isValid()).toBe(true)
    })

    test('fails validation with incorrect payload', () => {
        validator.setSchema(cars)
        expect(validator.validate(payloadIncorrectCars).isValid()).toBe(false)
    })

    test('returns incorrect field when failing validation', () => {
        validator.setSchema(cars)
        const validationResult = validator.validate(payloadIncorrectCars)
        expect(validationResult.errorFields).toContain('milage')
    })

    test('returns missing field when failing validation', () => {
        validator.setSchema(cars)
        const validationResult = validator.validate(payloadIncorrectCars)
        expect(validationResult.missingFields).toContain('type')
    })
});
