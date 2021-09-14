import GenericDataType from './generic'

export default class StringDataType extends GenericDataType {
    static validateValue(value) {
        return typeof value === 'string'
    }
}
