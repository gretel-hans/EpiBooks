import { Component } from "react";
import SingleBook from "./SingleBook";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Row } from "react-bootstrap";


class BookList extends Component {

    state = {
        search: {
            bookSearched: ''
        }
    }
    mostraNome(){
        console.log(1,2,3,4)
    }
             
                 

render() {
    return (
        <>

            <Row>
                
                <Col xs={12} md={6} lg={3}>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={this.state.search.bookSearched}
                            onChange={(e) => {
                                this.setState({
                                    search: {
                                        bookSearched: e.target.value
                                    }

                                })
                            }}
                        />
                    </Form>
                </Col>
            </Row>
<Row>
{
    this.props.books.filter((book) =>
        ((book.title).toLowerCase()).includes((this.state.search.bookSearched).toLowerCase()))?.map(libro => (
            <SingleBook key={libro.asin} singleBook={libro} />
        ))
        
}
</Row>
            {
            /*

                    this.props.books.map(book => {
                        return (
                            <SingleBook key={book.asin} singleBook={book} />
                        )
                    })
                */}

        </>

    )
}
}
export default BookList
