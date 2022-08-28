import React, { useContext } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './style.css'
import { StateContext } from '../context/statecontext'


const HeadButton = () => {
    const {
        setQueryTextareaValue,

        saveQuery1, setSaveQuery1,
        saveQuery2, setSaveQuery2,
        saveQuery3, setSaveQuery3,
        saveQuery4, setSaveQuery4,
        saveQuery5, setSaveQuery5,
        saveQuery6, setSaveQuery6,

    } = useContext(StateContext)

    const button = (e) => {
        const buttonId = e.target.id
        switch (buttonId) {
            case 'button-1':
                setSaveQuery1(preState => ({
                    ...preState,
                    buttonStatus: true
                }))
                setSaveQuery2(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setSaveQuery3(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setSaveQuery4(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setSaveQuery5(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setSaveQuery6(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setQueryTextareaValue(saveQuery1.query)
                break;
            case 'button-2':
                setSaveQuery1(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setSaveQuery2(preState => ({
                    ...preState,
                    buttonStatus: true
                }))
                setSaveQuery3(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setSaveQuery4(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setSaveQuery5(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setSaveQuery6(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setQueryTextareaValue(saveQuery2.query)
                break;
            case 'button-3':
                setSaveQuery1(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setSaveQuery2(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setSaveQuery3(preState => ({
                    ...preState,
                    buttonStatus: true
                }))
                setSaveQuery4(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setSaveQuery5(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setSaveQuery6(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setQueryTextareaValue(saveQuery3.query)
                break;
            case 'button-4':
                setSaveQuery1(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setSaveQuery2(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setSaveQuery3(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setSaveQuery4(preState => ({
                    ...preState,
                    buttonStatus: true
                }))
                setSaveQuery5(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setSaveQuery6(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setQueryTextareaValue(saveQuery4.query)
                break;
            case 'button-5':
                setSaveQuery1(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setSaveQuery2(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setSaveQuery3(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setSaveQuery4(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setSaveQuery5(preState => ({
                    ...preState,
                    buttonStatus: true
                }))
                setSaveQuery6(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setQueryTextareaValue(saveQuery5.query)
                break;
            case 'button-6':
                setSaveQuery1(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setSaveQuery2(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setSaveQuery3(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setSaveQuery4(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setSaveQuery5(preState => ({
                    ...preState,
                    buttonStatus: false
                }))
                setSaveQuery6(preState => ({
                    ...preState,
                    buttonStatus: true
                }))
                setQueryTextareaValue(saveQuery6.query)
                break;
        }
    }

    return (
        <>
            <div className='d-grid gap-2'>
                <Container className='blackbg2'>
                    <Row >
                        <Col md={2} >
                            <br />
                            <Button
                                variant={saveQuery1.buttonStatus ? "primary" : "secondary"}
                                id="button-1"
                                size="lg"
                                onClick={button}>
                                Query @1
                            </Button>
                        </Col>
                        <Col md={2}>
                            <br />
                            <Button
                                variant={saveQuery2.buttonStatus ? "primary" : "secondary"}
                                id="button-2"
                                size="lg"
                                onClick={button}>
                                Query @2
                            </Button>
                        </Col>
                        <Col md={2}>
                            <br />
                            <Button variant={saveQuery3.buttonStatus ? "primary" : "secondary"}
                                id="button-3"
                                size="lg"
                                onClick={button}>
                                Query @3
                            </Button>
                        </Col>

                        <Col md={2}>
                            <br />
                            <Button variant={saveQuery4.buttonStatus ? "primary" : "secondary"}
                                id="button-4"
                                size="lg"
                                onClick={button}>
                                Query @4
                            </Button>
                        </Col>
                        <Col md={2}>
                            <br />
                            <Button variant={saveQuery5.buttonStatus ? "primary" : "secondary"}
                                id="button-5"
                                size="lg"
                                onClick={button}>
                                Query @5
                            </Button>
                        </Col>
                        <Col md={2}>
                            <br />
                            <Button variant={saveQuery6.buttonStatus ? "primary" : "secondary"}
                                id="button-6"
                                size="lg"
                                onClick={button}>
                                Query @6
                            </Button>
                        </Col>
                    </Row>
                    {/* button for to get information of nodes */}

                    {/* <Col md={12}>
                        <br />
                        <Button variant="secondary"
                            id="button-getNode"
                            size="lg"
                            onClick={() => {
                                let reFnodeorders = refNodeEditor.current.getNodes()
                                console.log('reFnodeorders', reFnodeorders)
                            }}>
                            getNode
                        </Button>
                    </Col> */}
                </Container>
            </div>
        </>
    )
}

export { HeadButton }
