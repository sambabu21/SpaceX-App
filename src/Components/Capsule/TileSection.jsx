import { useState } from "react"
import Tile from "./Tile"
import Pagination from "../Pagination"

export default function TileSection({ filteredResults }){
    //state to control pagination
    
    const [currentPage,setCurrentPage]=useState(1)
    const [postsPerPage,setPostsPerPage] = useState(10)

    //determining current page
    const indexOfLastPost = currentPage*postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = filteredResults.slice(indexOfFirstPost,indexOfLastPost)

    function paginate(number){
        setCurrentPage(number)
    }

    const listElements = currentPosts.map((capsule)=>{
        return <Tile name={capsule.capsule_serial} type={capsule.type} status={capsule.status} key={capsule.capsule_serial}/>
    })
    return (
        <div className="grid-container">
                {/* <h2 className="search-text">{searchText}</h2> */}
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
                <Pagination totalPosts={filteredResults.length} postsPerPage={postsPerPage} paginate={paginate} currentPage={currentPage}/>
            </div>
    )
}