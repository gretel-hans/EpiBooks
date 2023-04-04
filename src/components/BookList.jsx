import SingleBook from "./SingleBook";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Row } from "react-bootstrap";
import CommentArea from "./CommentArea";
import { useState} from "react";


const BookList =(props)=> {

    /*state = {
        search: {
            bookSearched: ''
        },
        selected:{
            selezionato:false,
            idLibro:''
        }
    }*/

    const[state,setState]=useState({
        search: {
            bookSearched: ''
        },
        selected:{
            selezionato:false,
            idLibro:''
        }
    })

    const cambioLibro=(idNuovoLibro)=>{
        setState({
            selected:{
               selezionato:!state.selected.selezionato,
                idLibro:idNuovoLibro,
            },search:{
                ...state.search
            }
        })
    }         
                 


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
                            value={state.search.bookSearched}
                            onChange={(e) => {
                                setState({
                                    ...state,
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
    
    <Col xs={12} md={7}>
    {
    props.books.filter((book) =>
        ((book.title).toLowerCase()).includes((state.search.bookSearched).toLowerCase()))?.map(libro => (
            <SingleBook key={libro.asin} singleBook={libro} cambioLibroSelezionato={cambioLibro}/>
        ))
        
}
    </Col>

<Col className='areaCommenti'xs={12} md={5}>
<CommentArea idBook={state.selected.idLibro}/>
</Col>
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
export default BookList
