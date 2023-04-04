import AddComment from "./AddComment"
import CommentsList from "./CommentsList"
import { useState,useEffect } from "react"

const CommentArea =(props)=>{


    const [commenti,setCommenti]=useState([])
    const [counter,setCounter]=useState(0)


    const eseguiFetchCommento = () => {
        return (
            fetch(`https://striveschool-api.herokuapp.com/api/comments/${props.idBook}`, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzBkZGY4MWI0MjAwMTM5YjI3ZTciLCJpYXQiOjE2ODA1MjQ5NjMsImV4cCI6MTY4MTczNDU2M30.H1RTrJ1fRu495y_VYqsAHm2xWipWLTP6ZSl-UrPpoH0"
                },
            })
                .then(response => {
                    return response.json()
                })
                .then(dato => {
                    setCommenti(dato)
                    //this.setState({ commenti: dato })
                })
        )
    }

    useEffect(()=>{
        eseguiFetchCommento();
        console.log('ciao sono update')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.idBook,counter])

/*
    componentDidMount() {
        this.eseguiFetchCommento();
    }

    componentDidUpdate(prevProps,prevState){
        if (prevProps.idBook !== this.props.idBook){
            console.log('ciao sono update')
            this.eseguiFetchCommento();
        }
    }
    */





        return (

            <>
{
   // console.log(this.state.commenti)
}
            {commenti&& <>
                <CommentsList contatore={counter} incremento={setCounter} commenti={commenti}/>
                <AddComment contatore={counter} incremento={setCounter} idLibro={props.idBook}/>
             </> }
             {/*!this.state.commenti&& <>
                <h5 className="mt-3 mb-1">Non ci sono commenti</h5>
            </> */}
             </>
            
        )
    

}

export default CommentArea