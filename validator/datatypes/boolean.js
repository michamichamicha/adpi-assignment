import GenericDataType from './generic'

export default class BooleanDataType extends GenericDataType {
    static validateValue(value) {
        return typeof value === 'boolean'
    }
}
