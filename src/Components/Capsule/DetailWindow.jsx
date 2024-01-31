import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

export default function DetailWindow({ details,setClosed }){
    
    return (
        <div className="detail-container">
                <FontAwesomeIcon icon={faXmark} onClick={()=>{setClosed(false)}} className="close-btn"/>
                {details.map(detail=>{
                    const date = new Date(detail.original_launch)
                    const launchDate= date.toDateString()
                    return (
                        <div key={detail.capsule_serial} className="detail-window-capsule">
                            <h2>{detail.capsule_serial}</h2>
                            <p>{detail.details}</p>
                            <p>Original Launch: {launchDate}</p>
                            <p>Status: {detail.status}</p>
                            <p>Type: {detail.type}</p>
                            <p>Landings: {detail.landings}</p>
                            <p>Number of missions: {detail.missions.length}</p>
                        </div>
                    )
                })}
        </div>
    )
}