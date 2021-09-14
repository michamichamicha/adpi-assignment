export default class ValidationResult {
    constructor() {
        this.errorFields = []
        this.validFields = []
        this.missingFields = []
    }

    isValid() {
        return [this.errorFields, this.missingFields].every(({length}) => length===0)
    }

    handleFieldResult(field, dataTypeValidationResult) {
        if (!dataTypeValidationResult) {
            this.addError(field)
        } else {
            this.addValidField(field)
        }

        return dataTypeValidationResult
    }

    addMissingFieldResult(field) {
        this.missingFields.push(field)
    }

    addValidField(field) {
        this.validFields.push(field)
    }

    addError(field) {
        this.errorFields.push(field)
    }
}
