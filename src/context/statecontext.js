import React, { useState, createContext, useEffect, useRef } from 'react';
import { useRootEngine } from "../nodes/lib";
import { engine } from '../nodes'
import { categories, customers, products, orders } from '../database'

const StateContext = createContext()

const StateProvider = ({ children }) => {
    // Global State
    const [nodes, setNodes] = useState({
        "LTbuLoWpfL": {
            "x": 230,
            "y": -93.49998474121094,
            "type": "resultdatabase",
            "width": 160,
            "connections": {
                "inputs": {
                    "resultQuery": [
                        {
                            "nodeId": "AjDVG1T2Ie",
                            "portName": "Output_wherequeryDataType"
                        }
                    ]
                },
                "outputs": {}
            },
            "inputData": {
                "resultQuery": {}
            },
            "root": true,
            "id": "LTbuLoWpfL"
        },
        "AjDVG1T2Ie": {
            "id": "AjDVG1T2Ie",
            "x": -114.63233947753906,
            "y": -113.49266052246094,
            "type": "where_query",
            "width": 220,
            "connections": {
                "inputs": {
                    "Input_result_wherequeryDataType": [
                        {
                            "nodeId": "u62vm29pNq",
                            "portName": "Selected"
                        }
                    ]
                },
                "outputs": {
                    "Output_wherequeryDataType": [
                        {
                            "nodeId": "LTbuLoWpfL",
                            "portName": "resultQuery"
                        }
                    ]
                }
            },
            "inputData": {
                "Input_result_wherequeryDataType": {},
                "Input_wherequeryDataType": {
                    "Controls_wherequeryDataType": "customerID"
                },
                "Output_text_wherequeryDataType": {
                    "text": "BERGS"
                }
            }
        },
        "u62vm29pNq": {
            "id": "u62vm29pNq",
            "x": -440.9558868408203,
            "y": -130.84556579589844,
            "type": "database",
            "width": 180,
            "connections": {
                "inputs": {},
                "outputs": {
                    "Selected": [
                        {
                            "nodeId": "AjDVG1T2Ie",
                            "portName": "Input_result_wherequeryDataType"
                        }
                    ]
                }
            },
            "inputData": {
                "Input_databaseDataType": {
                    "Controls_databaseDataType": "customers"
                }
            }
        }
    });
    const [comments, setComments] = useState({});
    const [selectDatabase, setSelectDatabase] = useState('')
    const [globalResultQuery, setGlobalResultQuery] = useState({
        isFrom: false,
        isWhere: false,
        database: '',
        query: {
            field: '',
            filter: '',
            data: '',
        }
    })

    // Query & Nodes
    const [queryTextareaValue, setQueryTextareaValue] = useState('select * from customers where customerID = BERGS')
    const [saveQuery1, setSaveQuery1] = useState({
        query: 'select * from customers where customerID = BERGS',
        buttonStatus: true
    })
    const [saveQuery2, setSaveQuery2] = useState({
        query: 'select * from orders where customerID = BERGS',
        buttonStatus: false
    })
    const [saveQuery3, setSaveQuery3] = useState({
        query: 'select * from category',
        buttonStatus: false
    })
    const [saveQuery4, setSaveQuery4] = useState({
        query: 'select * from product where quantityPerUnit = 48 - 6 oz jars',
        buttonStatus: false
    })
    const [saveQuery5, setSaveQuery5] = useState({
        query: 'select * from product where productID = 4',
        buttonStatus: false
    })
    const [saveQuery6, setSaveQuery6] = useState({
        query: 'select * from category where categoryID = 4',
        buttonStatus: false
    })



    const [saveNodeQuery1, setSaveNodeQuery1] = useState({
        "LTbuLoWpfL": {
            "x": 174.99999676662748,
            "y": -295.9999870455137,
            "type": "resultdatabase",
            "width": 160,
            "connections": {
                "inputs": {
                    "resultQuery": [
                        {
                            "nodeId": "8Lm_Xhmyp8",
                            "portName": "Selected"
                        }
                    ]
                },
                "outputs": {}
            },
            "inputData": {
                "resultQuery": {}
            },
            "root": true,
            "id": "LTbuLoWpfL"
        },
        "8Lm_Xhmyp8": {
            "id": "8Lm_Xhmyp8",
            "x": -170.89172686618494,
            "y": -226.25847093223246,
            "type": "database",
            "width": 180,
            "connections": {
                "inputs": {},
                "outputs": {
                    "Selected": [
                        {
                            "nodeId": "LTbuLoWpfL",
                            "portName": "resultQuery"
                        }
                    ]
                }
            },
            "inputData": {
                "Input_databaseDataType": {
                    "Controls_databaseDataType": "category"
                }
            }
        }
    })
    const [saveNodeQuery2, setSaveNodeQuery2] = useState({
        "LTbuLoWpfL": {
            "x": 174.99999676662748,
            "y": -295.9999870455137,
            "type": "resultdatabase",
            "width": 160,
            "connections": {
                "inputs": {
                    "resultQuery": [
                        {
                            "nodeId": "AjDVG1T2Ie",
                            "portName": "Output_wherequeryDataType"
                        }
                    ]
                },
                "outputs": {}
            },
            "inputData": {
                "resultQuery": {}
            },
            "root": true,
            "id": "LTbuLoWpfL"
        },
        "AjDVG1T2Ie": {
            "id": "AjDVG1T2Ie",
            "x": -152.13235294117646,
            "y": -295.9926470588234,
            "type": "where_query",
            "width": 220,
            "connections": {
                "inputs": {
                    "Input_result_wherequeryDataType": [
                        {
                            "nodeId": "u62vm29pNq",
                            "portName": "Selected"
                        }
                    ]
                },
                "outputs": {
                    "Output_wherequeryDataType": [
                        {
                            "nodeId": "LTbuLoWpfL",
                            "portName": "resultQuery"
                        }
                    ]
                }
            },
            "inputData": {
                "Input_result_wherequeryDataType": {},
                "Input_wherequeryDataType": {
                    "Controls_wherequeryDataType": "customerID"
                },
                "Output_text_wherequeryDataType": {
                    "text": "BERGS"
                }
            }
        },
        "u62vm29pNq": {
            "id": "u62vm29pNq",
            "x": -448.4558823529411,
            "y": -362.09558823529403,
            "type": "database",
            "width": 180,
            "connections": {
                "inputs": {},
                "outputs": {
                    "Selected": [
                        {
                            "nodeId": "AjDVG1T2Ie",
                            "portName": "Input_result_wherequeryDataType"
                        }
                    ]
                }
            },
            "inputData": {
                "Input_databaseDataType": {
                    "Controls_databaseDataType": "customers"
                }
            }
        }
    })
    const [saveNodeQuery3, setSaveNodeQuery3] = useState({})

    // tables
    const [globalColumnsTables, setGlobalColumnsTables] = useState([])
    const [globalDataTables, setGlobalDataTables] = useState([])

    // Height State
    const [height, setHeight] = useState(0)
    const refHeight = useRef(null)
    const refNodeEditor = useRef(null)

    const { resultQuery } = useRootEngine(nodes, engine)

    useEffect(() => {
        setGlobalResultQuery(resultQuery)
    }, [nodes])

    useEffect(() => {
        genTableData(orders)
    }, [])

    useEffect(() => {
        const { database, isFrom, isWhere, query, type } = globalResultQuery
        if (isFrom && !isWhere) {
            switch (database) {
                case 'category':
                    genTableData(categories)
                    break;
                case 'products':
                    genTableData(products)
                    break;
                case 'customers':
                    genTableData(customers)
                    break;
                case 'orders':
                    genTableData(orders)
                    break;

            }
        }
        if (isFrom && isWhere) {
            switch (database) {
                case 'category':
                    genTableDatawithconditions(categories, query.field, query.data, query.filter)
                    break;
                case 'product':
                    genTableDatawithconditions(products, query.field, query.data, query.filter)
                    break;
                case 'customers':
                    genTableDatawithconditions(customers, query.field, query.data, query.filter)
                    break;
                case 'orders':
                    genTableDatawithconditions(orders, query.field, query.data, query.filter)
                    break;

            }
        }
    }, [globalResultQuery])

    useEffect(() => {
        switch (selectDatabase) {
            case 'products':
                stateOption = [
                    { value: "quantityPerUnit", label: "Quantity Per Unit" },
                    { value: "name", label: "Name" }
                ]
                let reFnodeproducts = refNodeEditor.current.getNodes()
                setNodes(preState => ({
                    ...preState, ...reFnodeproducts
                }))
                break;
            case 'customers':
                stateOption = [
                    { value: "customerID", label: "Customer ID" },
                    { value: "companyName", label: "Company Name" },
                    { value: "contactName", label: "Contact Name" },
                    { value: "contactTitle", label: "Contact Title" }
                ]
                let reFnodecustomers = refNodeEditor.current.getNodes()
                setNodes(preState => ({
                    ...preState, ...reFnodecustomers
                }))
                break;
            case 'category':
                stateOption = [
                    { value: "description", label: "Description" },
                    { value: "name", label: "Name" },
                ]
                let reFnodecategory = refNodeEditor.current.getNodes()
                setNodes(preState => ({
                    ...preState, ...reFnodecategory
                }))
                break;
            case 'orders':
                stateOption = [
                    { value: "customerID", label: "Customer ID" },
                    { value: "shipName", label: "Ship Name" },
                ]
                let reFnodeorders = refNodeEditor.current.getNodes()
                setNodes(preState => ({
                    ...preState, ...reFnodeorders
                }))
                break;
        }

    }, [selectDatabase])

    useEffect(() => {
        for (var key in nodes) {
            if (nodes[key].type == 'database') {
                setSelectDatabase(nodes[key].inputData.Input_databaseDataType?.Controls_databaseDataType)
            }
        }
    }, [nodes])

    useEffect(() => {
        document.querySelectorAll('[data-port-name="Output_text_wherequeryDataType"]').forEach((val) => {
            val.style.display = "none"
        })
        document.querySelectorAll('[data-port-name="Input_wherequeryDataType"]').forEach((val) => {
            val.style.display = "none"
        })
        document.querySelectorAll('[data-port-name="Input_databaseDataType"]').forEach((val) => {
            val.style.display = "none"
        })

    }, [nodes])

    function genTableData(arrData) {
        if (arrData.length > 0) {
            let columnTable = []
            let dataTable = []
            Object.keys(arrData[0]).map((key) => {
                if (typeof arrData[0][key] == 'object' && !Array.isArray(arrData[0][key])) {
                    Object.keys(arrData[0][key]).map((inKey) => {
                        let bufData = {
                            Header: inKey.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1"),
                            accessor: inKey,
                        }
                        columnTable.push(bufData)
                    })
                }
                if (typeof arrData[0][key] == 'string' || typeof arrData[0][key] == 'number') {
                    let bufData = {
                        Header: key.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1"),
                        accessor: key,
                    }
                    columnTable.push(bufData)
                }
            });
            arrData.map((data, k) => {
                let localdataTable = {}
                Object.entries(data).map(([key, value]) => {
                    if (typeof value === "object") {
                        Object.keys(value).map((inKey) => {
                            localdataTable[inKey] = value[inKey]
                        })
                    } else {
                        localdataTable[key] = value
                    }
                })
                dataTable.push(localdataTable)
            })
            setGlobalColumnsTables([{
                Header: 'TABLE-ID : ' + makeid(12),
                columns: columnTable
            }])
            setGlobalDataTables(dataTable)
        }
    }
    function genTableDatawithconditions(arrData, field, data, filter) {
        if (arrData.length > 0) {
            let columnTable = []
            let dataTable = []
            switch (filter) {
                case '=':
                    Object.keys(arrData[0]).map((key) => {
                        if (typeof arrData[0][key] == 'object' && !Array.isArray(arrData[0][key])) {
                            Object.keys(arrData[0][key]).map((inKey) => {
                                let bufData = {
                                    Header: inKey.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1"),
                                    accessor: inKey,
                                }
                                columnTable.push(bufData)
                            })
                        }
                        if (typeof arrData[0][key] == 'string' || typeof arrData[0][key] == 'number') {
                            let bufData = {
                                Header: key.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1"),
                                accessor: key,
                            }
                            columnTable.push(bufData)
                        }
                    });
                    arrData.map((aData, k) => {
                        let localdataTable = {}
                        Object.keys(aData).map((inKeys) => {
                            if (inKeys.toLowerCase() == field.toLowerCase()) {
                                if (typeof aData[inKeys] == 'number') {
                                    if (Number(aData[inKeys]) == Number(data)) {
                                        Object.entries(aData).map(([key, value]) => {
                                            if (typeof value === "object") {
                                                Object.keys(value).map((inKey) => {
                                                    localdataTable[inKey] = value[inKey]
                                                })
                                            } else {
                                                localdataTable[key] = value
                                            }
                                        })
                                        dataTable.push(localdataTable)
                                    }
                                }
                                if (typeof aData[inKeys] == 'string') {
                                    if (aData[inKeys].toLowerCase() == data.toLowerCase()) {

                                        Object.entries(aData).map(([key, value]) => {
                                            if (typeof value === "object") {
                                                Object.keys(value).map((inKey) => {
                                                    localdataTable[inKey] = value[inKey]
                                                })
                                            } else {
                                                localdataTable[key] = value
                                            }
                                        })
                                        dataTable.push(localdataTable)
                                    }
                                }


                            }
                        })
                    })
                    break;
            }
            setGlobalColumnsTables([{
                Header: 'TABLE-ID : ' + makeid(12),
                columns: columnTable
            }])
            setGlobalDataTables(dataTable)
        }
    }
    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return 'RayidKaromi-' + result;
    }

    return (
        <StateContext.Provider value={{
            nodes, setNodes,
            comments, setComments,
            globalResultQuery, setGlobalResultQuery,

            height, setHeight,
            refHeight,
            refNodeEditor,
            queryTextareaValue, setQueryTextareaValue,

            saveQuery1, setSaveQuery1,
            saveQuery2, setSaveQuery2,
            saveQuery3, setSaveQuery3,
            saveQuery4, setSaveQuery4,
            saveQuery5, setSaveQuery5,
            saveQuery6, setSaveQuery6,

            saveNodeQuery1, setSaveNodeQuery1,
            saveNodeQuery2, setSaveNodeQuery2,
            saveNodeQuery3, setSaveNodeQuery3,

            globalColumnsTables, setGlobalColumnsTables,
            globalDataTables, setGlobalDataTables,

        }}>
            {children}
        </StateContext.Provider>
    )
}

export { StateContext, StateProvider }