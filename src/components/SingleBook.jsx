import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";


const SingleBook =(props)=>{

        return(
            <>
            <Col xs={8} md={8} lg={8}>
        <Card className='mx-auto'>
        <Card.Img variant="top" src={props.singleBook.img} onClick={()=>props.cambioLibroSelezionato(props.singleBook.asin)} />
        <Card.Body>
            <Card.Title>{props.singleBook.title}</Card.Title>
            <Card.Text>
                {props.singleBook.price}€ <br/>
            </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    
            </>
                
        )
}

export default SingleBook