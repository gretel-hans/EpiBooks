import { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import CommentArea from "./CommentArea";


class SingleBook extends Component {
    state={
        selected:false
    }
    render(){
        return(
                <Col xs={12} md={6} lg={3}>
        <Card className='mx-auto' style={{border: this.state.selected ? '3px solid red' : 'none'}}>
        <Card.Img variant="top" src={this.props.singleBook.img} onClick={()=>this.setState({selected: !this.state.selected})} />
        <Card.Body>
            <Card.Title>{this.props.singleBook.title}</Card.Title>
            <Card.Text>
                {this.props.singleBook.price}€ <br/>
                {this.state.selected&&<CommentArea idBook={this.props.singleBook.asin}/>}
            </Card.Text>
        </Card.Body>
    </Card>
    </Col>
        )
    }


}

export default SingleBook