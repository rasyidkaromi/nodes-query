import "./appPage.css";
import { useContext } from "react";
import { NodeEditor } from "../nodes/lib";
import { Container } from 'react-bootstrap'
import { StateContext } from '../context/statecontext'

import { nodeConfig } from '../nodes/nodeconfig'

import { TextArea } from '../component/textarea'
import { Table } from "../component/table";

const AppPages = () => {
    const { nodes, setNodes, comments, refNodeEditor } = useContext(StateContext)
    return (
        <>
            <TextArea />
            <br />
            <Container>
                <div style={{ width: '100%', height: 400 }}>
                    <NodeEditor
                        ref={refNodeEditor}
                        portTypes={nodeConfig.portTypes}
                        nodeTypes={nodeConfig.nodeTypes}
                        nodes={nodes}
                        comments={comments}
                        onChange={setNodes}
                        // onCommentsChange={setComments}
                        disableComments={true}
                        initialScale={0.8}
                        defaultNodes={[
                            {
                                type: "resultdatabase",
                                x: 200,
                                y: -200
                            },
                            {
                                type: "database",
                                x: -400,
                                y: -200
                            }
                        ]}
                    />
                    <Table />
                </div>
            </Container>
        </>
    )
};


export { AppPages }
