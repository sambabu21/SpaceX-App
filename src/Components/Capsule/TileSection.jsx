import Tile from "./Tile"

export default function TileSection({ filteredResults }){

    const listElements = filteredResults.map((capsule)=>{
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
            </div>
    )
}