import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='Text-center py-3'>
                        Copyright &copy; BeShop
                    </Col>
                </Row>
            </Container>
    
        </footer>
    )
}

export default Footer
