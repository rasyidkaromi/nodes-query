import React, { useContext, useEffect } from 'react'
import { Form, Container, Button, } from 'react-bootstrap'
import './style.css'
import { StateContext } from '../context/statecontext'


const TextArea = () => {
    const {
        queryTextareaValue, setQueryTextareaValue,
        globalResultQuery, setGlobalResultQuery
    } = useContext(StateContext)



    const onSubmit = () => {
        let resultfrom = queryTextareaValue.includes("from");
        let resultwhere = queryTextareaValue.includes("where");
        let bufquery1 = queryTextareaValue.toLowerCase().slice(queryTextareaValue.indexOf("from") + "from".length).split(" ")[1];
        let bufquery2 = queryTextareaValue.toLowerCase().slice(queryTextareaValue.indexOf("where") + "where".length).split(" ");
        let bufquery3 = queryTextareaValue.toLowerCase().slice(queryTextareaValue.indexOf("where") + "where".length);

        const after_ = bufquery3.substring(bufquery3.indexOf('=') + 1).trim()

        if (resultfrom && resultwhere) {
            setGlobalResultQuery(preState => ({
                ...preState,
                isFrom: resultfrom,
                isWhere: resultwhere,
                database: bufquery1,
                query: {
                    field: bufquery2[1],
                    filter: bufquery2[2],
                    // data: bufquery2[3],
                    data: after_,
                },
                type: 'input_textarea'

            }))
        }
        if (resultfrom && !resultwhere) {
            setGlobalResultQuery(preState => ({
                ...preState,
                isFrom: resultfrom,
                isWhere: resultwhere,
                database: bufquery1,
                query: {
                    field: '',
                    filter: '',
                    data: '',
                },
                type: 'input_textarea'
            }))
        }
    };

    return (
        <Container className='queritextarea d-grid gap-2'>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Query....</Form.Label>
                    <Form.Control as="textarea" rows={3}
                        onChange={(e) => {
                            setQueryTextareaValue(e.target.value)
                        }}
                        value={queryTextareaValue}
                        placeholder="Write Query here... ex. select * from ..."
                    />
                </Form.Group>
            </Form>
            <Button variant="secondary" size="lg" onClick={onSubmit}>
                Run Query
            </Button>
        </Container>
    )
}

export { TextArea }
