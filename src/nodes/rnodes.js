const resolveNodes = (node, inputValues, nodeType, context) => {
    switch (node.type) {
      case "database":
        return {
          Selected: {
            type: 'database',
            isFrom: true,
            isWhere: false,
            database: inputValues.Input_databaseDataType.Controls_databaseDataType,
            query: {
              filter: '',
              field: '',
              data: '',
            }
          },
        }
      case "where_query": return {
  
        Output_wherequeryDataType: {
          type: 'where_query',
          isFrom: true,
          isWhere: true,
          database: inputValues.Input_result_wherequeryDataType.database == undefined ? '' : inputValues.Input_result_wherequeryDataType.database,
          query: {
            filter: '=',
            field: inputValues.Input_wherequeryDataType.Controls_wherequeryDataType == undefined ? '' : inputValues.Input_wherequeryDataType.Controls_wherequeryDataType,
            data: inputValues.Output_text_wherequeryDataType.text == undefined ? '' : inputValues.Output_text_wherequeryDataType.text
          }
        },
      }
    }
  }

export {
    resolveNodes
}