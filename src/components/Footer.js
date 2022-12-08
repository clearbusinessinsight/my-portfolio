import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center max-w-screen mx-auto flex flex-col item-center justify-center px-4 h-20 w-full">
            Copyright &copy; CLEAR Business Insight

          </Col>
        </Row>

      </Container>
      
    </footer>
  )
}

export default Footer
