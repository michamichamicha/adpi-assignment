import GenericDataType from './generic'

export default class ObjectDataType extends GenericDataType {
    static validateValue(value) {
        if (typeof value !== 'object') {
            return false
        }

        if (value === null) {
            return false
        }

        if (Array.isArray(value)) {
            return false
        }

        return true
    }
}
