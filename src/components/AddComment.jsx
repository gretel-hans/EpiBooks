import { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class AddComment extends Component {
    state = {
        contenutoCommento: {
            comment: '',
            rate: '',
            elementId: `${this.props.idLibro}`
        }
    }

    eseguifetchPost = () => {
        return(
              fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
            method: 'POST',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzBkZGY4MWI0MjAwMTM5YjI3ZTciLCJpYXQiOjE2ODA1MjQ5NjMsImV4cCI6MTY4MTczNDU2M30.H1RTrJ1fRu495y_VYqsAHm2xWipWLTP6ZSl-UrPpoH0",
                "Content-Type": "application/json",
                
            },
            body: JSON.stringify(this.state.contenutoCommento)
        })
        .then(response=>{
            if(response.ok){
                alert('Your comment has been posted')
            }else{
                alert('ERROR your comment hasn\'t been posted')
            }
        })
        .catch(err=>{
            console.log('ERROR', err)
        })
        )
    }

    render() {
        return (
            <div className='AreaCommentoPosta mt-2'>
                <Form.Label htmlFor="inputPassword5">Comment:</Form.Label>
                <Form.Control type="text"
                    value={this.state.contenutoCommento.comment}
                    onChange={(e) => {
                        this.setState({
                            contenutoCommento: {
                                ...this.state.contenutoCommento,
                                comment: e.target.value,
                            }
                        })
                    }}
                />
                <Form.Text id="passwordHelpBlock" muted>
                    Insert your comment here
                </Form.Text><br />
                <Form.Label htmlFor="inputPassword5">Rating:</Form.Label>
                <Form.Control type="text" id="inputPassword5" aria-describedby="passwordHelpBlock"
                    value={this.state.contenutoCommento.rate}
                    onChange={(e) => {
                        this.setState({
                            contenutoCommento: {
                                ...this.state.contenutoCommento,
                                rate: e.target.value,
                            }
                        })
                    }}
                />
                <Form.Text id="passwordHelpBlock" muted>
                    Insert a rating between 1 to 5 included
                </Form.Text>
                <Button className='mt-1' variant="primary" onClick={this.eseguifetchPost}>
                    Submit comment
                </Button>
            </div>

        )
    }
}

export default AddComment