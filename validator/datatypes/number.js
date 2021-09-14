import GenericDataType from './generic'

export default class NumberDataType extends GenericDataType {
    static validateValue(value) {
        return typeof value === 'number'
    }
}
