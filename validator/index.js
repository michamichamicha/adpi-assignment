import ValidationResult from './validationResult'
import dataTypes from './datatypes'

export class Validator {
    constructor() {
        this.validationResult = ValidationResult
        this.dataTypes = dataTypes
    }

    setSchema(schema) {
        if (!schema || typeof schema !== 'object' || Array.isArray(schema)) {
            throw new Error('setSchema should be passed with an object')
        }
        this.schema = schema
    }

    validate(payload) {
        const result = new this.validationResult()

        Object.entries(this.schema).forEach(([fieldName, fieldType]) => {
            if (!payload.hasOwnProperty(fieldName)) {
                return result.addMissingFieldResult(fieldName)
            }

            if (!this.dataTypes[fieldType]) {
                throw new Error(`No dataType validator found for: ${fieldType}`)
            }

            const fieldResult = this.dataTypes[fieldType].validateValue(payload[fieldName])
            return result.handleFieldResult(fieldName, fieldResult)
        })

        return result
    }
}
