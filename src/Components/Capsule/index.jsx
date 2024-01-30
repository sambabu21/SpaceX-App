import Banner from "./Banner"
import SearchForm from "./SearchForm"
import TileSection from "./TileSection"
import { useData } from "../../customHooks"


export default function Capsule(){
  const {filteredResults,filters,setFilters } = useData('https://api.spacexdata.com/v3/capsules')
    
    
    function handleChange(e){
        const { name,value } = e.target
        setFilters((prevFilters)=>{
            return {
                ...prevFilters,
                [name] : (value==="")?null:value
            }
        })
    }

    function clearFilters(){
        setFilters({
          status:null,
          type:null
      })
      }

    return (
        <>
            <Banner />
            <SearchForm 
                filters={filters} 
                handleChange={handleChange}
                clearFilters={clearFilters}
            />
            <TileSection
                filteredResults={filteredResults}
            />
        </>
    )
}