       
 const HalfBody = ({title, body}) => {
    return(
           <div className="halfBody">
          {/* Container for first Paragraph */}
          <div>{title}:</div>
          <div>
            {body}
          </div>
        </div>    
    )
 }     
 export default HalfBody;