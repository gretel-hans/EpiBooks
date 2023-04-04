import SingleComment from "./SingleComment"
const CommentsList=(props)=>{
    return(
        props.commenti.map(commento=>{
            return(
                <SingleComment contatore={props.counter} incremento={props.setCounter} key={commento._id} commentoLibro={commento}/>
            )
        })
        
    )
}

export default CommentsList