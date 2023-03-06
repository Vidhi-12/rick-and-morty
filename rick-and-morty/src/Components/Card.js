
export default function Card({ results }) {
    let viewCharacters;
    
    if(results){
        viewCharacters = results.map((details) => {
    return (
        <div key={details.id}>
        
            <div className="m-2 card-container">
                <div className="card">
                    <div className="card-image">
                        <img src={details.image} alt="character-img" />
                    </div>
                    <div className="card-name text-center">
                        <p>{details.name}</p>
                    </div>
                    <div className="card-down">
                        <div className="details">
                            <div className="d-flex"><h5 className="m-1">Name: </h5><h4>{details.name}</h4></div>
                            <div className="d-flex"><h5 className="m-1">Status: </h5><h4>{details.status}</h4></div>
                            <div className="d-flex"><h5 className="m-1">Species: </h5><h4>{details.species}</h4></div>
                            <div className="d-flex"><h5 className="m-1">Gender: </h5><h4>{details.gender}</h4></div>
                            <div className="d-flex"><h5 className="m-1">Origin Name: </h5><h4>{details.origin.name}</h4></div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        })
    }
    else{
        viewCharacters = "No Characters Found";
      
    }
    return(
        <>
        <div className="d-flex flex-wrap justify-content-center" style={{color:"grey"}}>
            {viewCharacters}
        </div>
        </>
    )
}