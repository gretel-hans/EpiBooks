import { Component } from "react"
import AddComment from "./AddComment"
import CommentsList from "./CommentsList"

class CommentArea extends Component {
    state = {
        commenti:null
    }

    eseguiFetchCommento = () => {
        return (
            fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.idBook}`, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzBkZGY4MWI0MjAwMTM5YjI3ZTciLCJpYXQiOjE2ODA1MjQ5NjMsImV4cCI6MTY4MTczNDU2M30.H1RTrJ1fRu495y_VYqsAHm2xWipWLTP6ZSl-UrPpoH0"
                },
            })
                .then(response => {
                    return response.json()
                })
                .then(dato => {
                    if (dato.lenght!==0)
                    {
                        this.setState({ commenti: dato })
                    }else{
                        this.setState({ commenti: null })
                    }
                    
                })

        )
    }
    componentDidMount() {
        this.eseguiFetchCommento();
    }

    render() {
        return (

            <>
{
   // console.log(this.state.commenti)
}
            {this.state.commenti&& <>
                <CommentsList commenti={this.state.commenti}/>
                <AddComment idLibro={this.props.idBook}/>
             </> }
             {/*!this.state.commenti&& <>
                <h5 className="mt-3 mb-1">Non ci sono commenti</h5>
            </> */}
             </>
            
        )
    }

}

export default CommentArea