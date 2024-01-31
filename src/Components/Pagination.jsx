export default function Pagination({ totalPosts,postsPerPage,paginate,currentPage }){
    const  pageNumbers=[]
 
     for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
          pageNumbers.push(i)
     }

     return (
         <div className="page-number-container">
             <ul>
                 {pageNumbers.map((num)=>{
                    return  <li key={num}>
                        <a className={currentPage===num?"page-num active":"page-num"} onClick={()=>paginate(num)}>{num}</a>
                    </li>
                 })}
             </ul>
         </div>
     )
 }