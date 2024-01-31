import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

export default function DetailWindow({ details,setClosed }){
    return (
        <div className="detail-container">
                <FontAwesomeIcon icon={faXmark} onClick={()=>{setClosed(false)}} className="close-btn"/>
                {details.map(detail=>{
                    return (
                        <div key={detail.id} className="detail-window">
                            <div>
                                <img src={detail.flickr_images[0]} alt={detail.rocket_name} className="detail-img"/>
                            </div>
                            <div>
                                <h2>{detail.rocket_name}</h2>
                                <p>{detail.description}</p>
                                <p>Cost per launch: {detail.cost_per_launch}</p>
                                <p>First flight: {detail.first_flight}</p>
                                <p>Succes rate percentage: {detail.success_rate_pct}%</p>
                                <p>Status: {detail.active?"active":"inactive"}</p>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}