
import TileSection from './TileSection'
import SearchForm from './SearchForm'
import { useData } from '../../customHooks'
import Banner from './Banner'


export default function Rocket() {
  
  const { filteredResults,filters,setFilters } = useData('https://api.spacexdata.com/v3/rockets')
  
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
        rocket_name:'',
        active:null,
        country:null
    })
    }

  return (
    <div className='site-container'>
      <Banner />
      <SearchForm 
          filters={filters} 
          handleChange={handleChange}
          clearFilters={clearFilters}
        />
      <TileSection 
          rocketList={filteredResults}
      />
    </div>
  )
}


