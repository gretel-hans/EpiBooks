import books from '../data/books.json'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { Component } from 'react'

class AllTheBooks extends Component {
    render() {
        return (
            <>
            <a href="#home"><i className="bi bi-arrow-up-circle-fill"></i></a>
                <Container>
                    <Row>
                        {
                            books.map((book) => {
                                return (
                                    <Col key={book.asin} className='col-12 col-md-6 col-lg-4 col-xl-3 mb-3'>
                                        <Card className='mx-auto'>
                                            <Card.Img variant="top" src={book.img} />
                                            <Card.Body>
                                                <Card.Title>{book.title}</Card.Title>
                                                <Card.Text>
                                                    {book.price}€
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }

                    </Row>
                </Container>
            </>
        )
    }
}

export default AllTheBooks