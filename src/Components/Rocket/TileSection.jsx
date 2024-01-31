import { useState } from "react";
import Tile from "./Tile";
import DetailWindow from "./DetailWindow";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faXmark} from '@fortawesome/free-solid-svg-icons'

export default function TileSection( { rocketList } ){
    //state to control the rocket detail window triggering on and off
    const [details,setDetails] = useState([])
    const [closed,setClosed] = useState(false)
    
    //function to close the detail window
    function handleClick(rocket){
        setDetails([{...rocket}])
        setClosed(true)
    }

    const listElements = rocketList.map(rock=>{
        return <Tile key={rock.id} imageUrl={rock.flickr_images[0]} name={rock.rocket_name} status={rock.active} handleClick={()=>handleClick(rock)}/>
    })
    
    let searchText = (listElements.length===0)?"No rockets based on your filters..": "Rockets based on your search..."

    return (
        <>
            {/* Rockets display grid */}
            <div className="grid-container">
                <h2 className="search-text">{searchText}</h2>
                <div className="display-grid">
                    {listElements}
                </div>
            </div>

        {/* rocket detail window which gets displayed when the view details button is clicked */}
        {
            closed ? <DetailWindow details={details} setClosed={setClosed}/> : null
        }
        </>
    )
    
}