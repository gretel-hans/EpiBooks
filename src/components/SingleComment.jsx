import Button from 'react-bootstrap/Button';
const SingleComment =(props)=>{
    const cancella=()=>{
        return(
            fetch(`https://striveschool-api.herokuapp.com/api/comments/${props.commentoLibro._id}`, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzBkZGY4MWI0MjAwMTM5YjI3ZTciLCJpYXQiOjE2ODA1MjQ5NjMsImV4cCI6MTY4MTczNDU2M30.H1RTrJ1fRu495y_VYqsAHm2xWipWLTP6ZSl-UrPpoH0"
                },
                method:'DELETE'
            })
            .then(response=>{
                if (response.ok){
                    alert('The comment has been deleted!')
                }else{
                    alert('ERROR the comment hasn\'t been deleted')
                }
            })
            .catch(err=>{
                console.log('ERROR ',err)
            })
        )
    }
    return(
        <>
             <div className='areaCommento'>
                <p className="mb-0">{props.commentoLibro.comment} - {props.commentoLibro.rate} ⭐️ </p>
                <Button className='mt-1' variant="primary" onClick={cancella}>
                    Delete comment
                </Button>
            </div> 
        </>
   
    )
}

export default SingleComment