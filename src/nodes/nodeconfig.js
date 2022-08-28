import { FlumeConfig, Controls, Colors } from "./lib";

const nodeConfig = new FlumeConfig()
nodeConfig
  .addPortType({
    type: "result",
    name: "result",
    label: "Result",
    color: Colors.purple
  })
  .addPortType({
    type: "text",
    name: "text",
    label: "Text",
    color: Colors.green,
    controls: [
      Controls.text({
        name: "text",
        label: "Text"
      })
    ]
  })
  .addPortType({
    type: "databaseDataType",
    name: "databaseDataType",
    color: Colors.purple,
    controls: [
      Controls.select({
        name: "Controls_databaseDataType",
        label: "Database Data Type",
        options: [
          { value: "products", label: "Products" },
          { value: "customers", label: "Customers" },
          { value: "orders", label: "Orders" },
          { value: "category", label: "Category" }
        ],
      })
    ]
  })
  .addPortType({
    type: "wherequeryDataType",
    name: "wherequeryDataType",
    color: Colors.purple,
    controls: [
      Controls.select({
        name: "Controls_wherequeryDataType",
        label: "Where",
        getOptions: (inputData, context) => {
          return stateOption
        },
      })
    ]
  })
  // ===========================
  .addNodeType({
    type: "where_query",
    label: "Where ( = ) Conditions",
    description: "Select Query",
    initialWidth: 220,
    inputs: ports => [
      ports.result({ name: "Input_result_wherequeryDataType", label: "Input Query" }),
      ports.wherequeryDataType({ name: "Input_wherequeryDataType", label: "Select Where" }),
      ports.text({ name: "Output_text_wherequeryDataType", label: "( = ) query" })

    ],
    outputs: ports => [
      ports.result({ name: "Output_wherequeryDataType", label: "Output Query" }),
    ],
  })
  // ===========================
  .addRootNodeType({
    type: "resultdatabase",
    label: "Result Table",
    description: "",
    initialWidth: 160,
    inputs: ports => [
      ports.result({ name: "resultQuery", label: "Result" }),
    ]
  })
  .addRootNodeType({
    type: "database",
    label: "Database",
    description: "Select a Database",
    initialWidth: 180,
    inputs: ports => [
      ports.databaseDataType({ name: "Input_databaseDataType", label: "Select * From" }),
    ],
    outputs: ports => [
      ports.result({ name: "Selected", label: "Selected" }),
    ],
  })

export {
  nodeConfig,
}

