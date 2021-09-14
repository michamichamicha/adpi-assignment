import GenericDataType from './generic'

export default class ArrayDataType extends GenericDataType {
    static validateValue(value) {
        return Array.isArray(value)
    }
}
