import React, { useState, useContext } from 'react'
import { Container, Row, Col, Button, Card, Navbar, Nav } from 'react-bootstrap'
// import { EtherContext } from '../context/etherscontext'
import './style.css'


const Header = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg" className="nav">
                <Container>
                    <Navbar.Brand href="#">{"Nodes Query"}</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export { Header }
