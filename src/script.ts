import { TestType } from './types'

export const returnTrue = (): boolean => {
    return true
}

export const returnFalse = (): boolean => {
    return true
}

export const buggyFunction = (): string => {
    const oData:TestType = {
        aKey: { "value": 'stored value' }
    }
    return oData['missingKey'].value
}
