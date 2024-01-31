import { useState } from "react"
import Tile from "./Tile"
import Pagination from "../Pagination"
import DetailWindow from "./DetailWindow"

export default function TileSection({ filteredResults}){
     //state to control the rocket detail window triggering on and off
     const [details,setDetails] = useState([])
     const [closed,setClosed] = useState(false)

    //state to control pagination
    const [currentPage,setCurrentPage]=useState(1)
    const [postsPerPage,setPostsPerPage] = useState(10)

    //determining current page
    const indexOfLastPost = currentPage*postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = filteredResults.slice(indexOfFirstPost,indexOfLastPost)

    //function to change page number
    function paginate(number){
        setCurrentPage(number)
    }

    //function to close the detail window
    function handleClick(capsule){
        setDetails([{...capsule}])
        setClosed(true)
    }

    const listElements = currentPosts.map((capsule)=>{
        return <Tile key={capsule.capsule_serial} name={capsule.capsule_serial} type={capsule.type} status={capsule.status} key={capsule.capsule_serial} handleClick={()=>{handleClick(capsule)}}/>
    })

    let searchText = (listElements.length===0)?"No rockets based on your filters..": "Rockets based on your search..."

    return (
        <div className="grid-container">
                <h2 className="search-text">{searchText}</h2>
                <div className="display-grid">
                    <table className="content-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listElements}
                        </tbody>
                    </table>
                </div>
                {
                    closed ? <DetailWindow details={details} setClosed={setClosed}/> : null
                }
                <Pagination totalPosts={filteredResults.length} postsPerPage={postsPerPage} paginate={paginate} currentPage={currentPage}/>
            </div>
    )
}