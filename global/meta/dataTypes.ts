type dataTypeObj = { typeName: string; ref: string }

export const dataTypes: Record<string, dataTypeObj> = {
  object: {
    typeName: 'object',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object',
  },
  any: {
    typeName: 'any',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types',
  },
  string: {
    typeName: 'string',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type',
  },
  Function: {
    typeName: 'Function',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',
  },
}
